import { DOCS_URL } from 'lib/constants'
import { CodeBlockLang } from 'ui'

export type DatabaseConnectionType =
  | 'uri'
  | 'psql'
  | 'golang'
  | 'jdbc'
  | 'dotnet'
  | 'nodejs'
  | 'php'
  | 'python'
  | 'sqlalchemy'

export const DATABASE_CONNECTION_TYPES: {
  id: DatabaseConnectionType
  label: string
  contentType: 'input' | 'code'
  lang: CodeBlockLang
  fileTitle: string | undefined
}[] = [
    { id: 'uri', label: 'URI', contentType: 'input', lang: 'bash', fileTitle: undefined },
    { id: 'psql', label: 'PSQL', contentType: 'code', lang: 'bash', fileTitle: undefined },
    { id: 'golang', label: 'Golang', contentType: 'code', lang: 'go', fileTitle: '.env' },
    { id: 'jdbc', label: 'JDBC', contentType: 'input', lang: 'bash', fileTitle: undefined },
    {
      id: 'dotnet',
      label: '.NET',
      contentType: 'code',
      lang: 'csharp',
      fileTitle: 'appsettings.json',
    },
    { id: 'nodejs', label: 'Node.js', contentType: 'code', lang: 'js', fileTitle: '.env' },
    { id: 'php', label: 'PHP', contentType: 'code', lang: 'php', fileTitle: '.env' },
    { id: 'python', label: 'Python', contentType: 'code', lang: 'python', fileTitle: '.env' },
    { id: 'sqlalchemy', label: 'SQLAlchemy', contentType: 'code', lang: 'python', fileTitle: '.env' },
  ]

export const CONNECTION_PARAMETERS = {
  host: {
    key: 'host',
    description: 'The hostname of your database',
  },
  port: {
    key: 'port',
    description: 'Port number for the connection',
  },
  database: {
    key: 'database',
    description: 'Default database name',
  },
  user: {
    key: 'user',
    description: 'Database user',
  },
  pool_mode: {
    key: 'pool_mode',
    description: 'Connection pooling behavior',
  },
} as const

export type ConnectionType = {
  key: string
  icon: string
  label: string
  guideLink?: string
  children: ConnectionType[]
  files?: {
    name: string
    content: string
  }[]
}

export const FRAMEWORKS: ConnectionType[] = [
  {
    key: 'nextjs',
    label: 'Next.js',
    icon: 'nextjs',
    guideLink: 'https://github.com/scadasystems',
    children: [
      {
        key: 'app',
        label: 'App Router',
        icon: '',
        children: [
          {
            key: 'supabasejs',
            label: 'Flint-js',
            icon: 'supabase',
            children: [],
          },
        ],
      },
      {
        key: 'pages',
        label: 'Pages Router',
        icon: '',
        children: [
          {
            key: 'supabasejs',
            label: 'Flint-js',
            children: [],
            icon: 'supabase',
          },
        ],
      },
    ],
  },
  {
    key: 'remix',
    label: 'Remix',
    icon: 'remix',
    guideLink:
      'https://github.com/scadasystems',
    children: [
      {
        key: 'supabasejs',
        label: 'Flint-js',
        children: [],
        icon: 'supabase',
      },
    ],
  },
  {
    key: 'react',
    label: 'React',
    icon: 'react',
    guideLink: 'https://github.com/scadasystems',
    children: [
      {
        key: 'create-react-app',
        label: 'Create React App',
        icon: 'react',
        children: [
          {
            key: 'supabasejs',
            label: 'Flint-js',
            icon: 'supabase',
            children: [],
          },
        ],
      },
      {
        key: 'vite',
        label: 'Vite',
        icon: 'vite',
        children: [
          {
            key: 'supabasejs',
            label: 'Flint-js',
            children: [],
            icon: 'supabase',
          },
        ],
      },
    ],
  },
  {
    key: 'nuxt',
    label: 'Nuxt',
    icon: 'nuxt',
    guideLink: 'https://github.com/scadasystems',
    children: [
      {
        key: 'supabasejs',
        label: 'Flint-js',
        children: [],
        icon: 'supabase',
      },
    ],
  },
  {
    key: 'vuejs',
    label: 'Vue.JS',
    icon: 'vuejs',
    guideLink: 'https://github.com/scadasystems',
    children: [
      {
        key: 'supabasejs',
        label: 'Flint-js',
        children: [],
        icon: 'supabase',
      },
    ],
  },

  {
    key: 'sveltekit',
    label: 'SvelteKit',
    icon: 'sveltekit',
    guideLink: 'https://github.com/scadasystems',
    children: [
      {
        key: 'supabasejs',
        label: 'Flint-js',
        children: [],
        icon: 'supabase',
      },
    ],
  },
  {
    key: 'solidjs',
    label: 'Solid.js',
    icon: 'solidjs',
    guideLink: 'https://github.com/scadasystems',
    children: [
      {
        key: 'supabasejs',
        label: 'Flint-js',
        children: [],
        icon: 'supabase',
      },
    ],
  },
  {
    key: 'astro',
    label: 'Astro',
    icon: 'astro',
    guideLink: 'https://github.com/scadasystems',
    children: [
      {
        key: 'supabasejs',
        label: 'Flint-js',
        children: [],
        icon: 'supabase',
      },
    ],
  },
  {
    key: 'refine',
    label: 'refine',
    icon: 'refine',
    guideLink: 'https://github.com/scadasystems',
    children: [
      {
        key: 'supabasejs',
        label: 'Flint-js',
        children: [],
        icon: 'supabase',
      },
    ],
  },
]

export const MOBILES: ConnectionType[] = [
  {
    key: 'exporeactnative',
    label: 'Expo React Native',
    icon: 'expo',
    guideLink: 'https://github.com/scadasystems',
    children: [
      {
        key: 'supabasejs',
        label: 'Flint-js',
        children: [],
        icon: 'supabase',
      },
    ],
  },
  {
    key: 'flutter',
    label: 'Flutter',
    icon: 'flutter',
    guideLink: 'https://github.com/scadasystems',
    children: [
      {
        key: 'supabaseflutter',
        label: 'flint-flutter',
        children: [],
        icon: 'supabase',
      },
    ],
  },
  {
    key: 'ionicreact',
    label: 'Ionic React',
    icon: 'react',
    guideLink: 'https://github.com/scadasystems',
    children: [
      {
        key: 'supabasejs',
        label: 'Flint-js',
        children: [],
        icon: 'supabase',
      },
    ],
  },
  {
    key: 'swift',
    label: 'Swift',
    icon: 'swift',
    guideLink: 'https://github.com/scadasystems',
    children: [
      {
        key: 'supabaseswift',
        label: 'flint-swift',
        children: [],
        icon: 'supabase',
      },
    ],
  },
  {
    key: 'androidkotlin',
    label: 'Android Kotlin',
    icon: 'kotlin',
    guideLink: 'https://github.com/scadasystems',
    children: [
      {
        key: 'supabasekt',
        label: 'flint-kt',
        children: [],
        icon: 'supabase',
      },
    ],
  },
  {
    key: 'ionicangular',
    label: 'Ionic Angular',
    icon: 'ionic-angular',
    guideLink: 'https://github.com/scadasystems',
    children: [
      {
        key: 'supabasejs',
        label: 'Flint-js',
        children: [],
        icon: 'supabase',
      },
    ],
  },
]

export const ORMS: ConnectionType[] = [
  {
    key: 'prisma',
    label: 'Prisma',
    icon: 'prisma',
    guideLink: 'https://github.com/scadasystems',
    children: [],
  },
  {
    key: 'drizzle',
    label: 'Drizzle',
    icon: 'drizzle',
    guideLink:
      'https://github.com/scadasystems',
    children: [],
  },
]

export const CONNECTION_TYPES = [
  { key: 'direct', label: 'Connection String', obj: [] },
  { key: 'frameworks', label: 'App Frameworks', obj: FRAMEWORKS },
  { key: 'mobiles', label: 'Mobile Frameworks', obj: MOBILES },
  { key: 'orms', label: 'ORMs', obj: ORMS },
  { key: 'mcp', label: 'MCP', obj: [] },
]

export const PGBOUNCER_ENABLED_BUT_NO_IPV4_ADDON_TEXT =
  'Purchase IPv4 add-on or use Shared Pooler if on a IPv4 network'
export const IPV4_ADDON_TEXT = 'Connections are IPv4 proxied with IPv4 add-on'
