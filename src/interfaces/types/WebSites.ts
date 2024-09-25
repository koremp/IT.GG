const WebSites = [
  'Saramin',
  'JobKorea',
  'Wanted',
  'Jumpit',
] as const;

export type WebSites = typeof WebSites[number];