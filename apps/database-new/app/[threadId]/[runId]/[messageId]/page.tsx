'use client'
import { last, sortBy } from 'lodash'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'

import { CodeEditor } from '@/components/CodeEditor/CodeEditor'
import SchemaGraph from '@/components/SchemaGraph/SchemaGraph'
import { useMessagesQuery } from '@/data/messages-query'
import { AssistantMessage, PostgresTable } from '@/lib/types'
import { parseTables } from '@/lib/utils'
import { useAppStateSnapshot } from '@/lib/state'
import { cn } from 'ui'
import { Loader2 } from 'lucide-react'

export default function ThreadPage() {
  const router = useRouter()
  const { threadId, runId, messageId }: { threadId: string; runId: string; messageId: string } =
    useParams()
  const [tables, setTables] = useState<PostgresTable[]>([])

  const { data, isSuccess, isLoading: threadIsLoading } = useMessagesQuery({ threadId, runId })

  const isLoadingPrev = useRef<boolean>(false)
  const isLoading = isSuccess && data.status === 'loading'
  const snap = useAppStateSnapshot()

  const messages = useMemo(() => {
    if (isSuccess) return sortBy(data.messages, (m) => m.created_at)
    return []
  }, [data?.messages, isSuccess])

  const userMessages = messages.filter((m) => m.role === 'user')

  const selectedMessageIdx = useMemo(() => {
    return messages.findIndex((m) => m.id === messageId)
  }, [messages, messageId])

  const selectedMessageReply = useMemo(
    () =>
      (selectedMessageIdx !== -1 ? messages[selectedMessageIdx + 1] : undefined) as
        | AssistantMessage
        | undefined,
    [messages, selectedMessageIdx]
  )

  const content = useMemo(
    () => selectedMessageReply?.sql.replaceAll('```sql', '').replaceAll('```', '') || '',
    [selectedMessageReply?.sql]
  )

  useEffect(() => {
    parseTables(content).then((t) => setTables(t))
  }, [content])

  useEffect(() => {
    if (isLoadingPrev.current && !isLoading) {
      const latestMessage = last(userMessages)
      if (latestMessage) router.push(`/${threadId}/${runId}/${latestMessage.id}`)
    }
    isLoadingPrev.current = isLoading
  }, [isLoading, router, runId, threadId, userMessages])

  return (
    <div
      className={cn(
        snap.layout === 'two-col' ? 'flex-col' : 'flex-row',
        'flex grow max-h-screen items-center justify-between bg-alternative h-full'
      )}
    >
      {threadIsLoading ? (
        <div className="flex items-center justify-center h-full">
          <Loader2 className="animate-spin opacity-30" />
        </div>
      ) : (
        <>
          <SchemaGraph tables={tables} threadIsLoading={threadIsLoading} />
          <CodeEditor content={content} threadIsLoading={threadIsLoading} />
        </>
      )}
    </div>
  )
}
