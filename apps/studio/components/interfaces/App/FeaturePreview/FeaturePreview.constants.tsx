import { LOCAL_STORAGE_KEYS } from 'common'

export const FEATURE_PREVIEWS = [
  {
    key: LOCAL_STORAGE_KEYS.UI_PREVIEW_INLINE_EDITOR,
    name: 'Directly edit database entities',
    discussionsUrl: 'https://github.com/scadasystems',
    isNew: true,
    isPlatformOnly: false,
  },
  {
    key: LOCAL_STORAGE_KEYS.UI_TABLE_EDITOR_TABS,
    name: 'Table Editor Tabs',
    discussionsUrl: 'https://github.com/scadasystems',
    isNew: true,
    isPlatformOnly: false,
  },
  {
    key: LOCAL_STORAGE_KEYS.UI_SQL_EDITOR_TABS,
    name: 'SQL Editor Tabs',
    discussionsUrl: 'https://github.com/scadasystems',
    isNew: true,
    isPlatformOnly: true,
  },
  {
    key: LOCAL_STORAGE_KEYS.UI_PREVIEW_API_SIDE_PANEL,
    name: 'Project API documentation',
    discussionsUrl: 'https://github.com/scadasystems',
    isNew: false,
    isPlatformOnly: false,
  },
  {
    key: LOCAL_STORAGE_KEYS.UI_PREVIEW_CLS,
    name: 'Column-level privileges',
    discussionsUrl: 'https://github.com/scadasystems',
    isNew: false,
    isPlatformOnly: false,
  },
] as const
