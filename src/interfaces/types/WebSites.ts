const WebSites = {
  Saramin: 'Saramin',
  JobKorea: 'JobKorea',
  Wanted: 'Wanted',
  Jumpit: 'Jumpit',
} as const;

export type WebSites = typeof WebSites[keyof typeof WebSites];