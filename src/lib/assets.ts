// Resolve any image/video under /content/**/assets to a served URL.
// Reference by a trailing path fragment, e.g. asset('home/assets/borneo-map.jpg').
// Filenames with spaces are matched leniently (decoded + normalized).

const modules = import.meta.glob(
  '/content/**/*.{png,jpg,jpeg,webp,avif,gif,mp4}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>

const normalize = (s: string) => decodeURIComponent(s).toLowerCase().trim()

const entries = Object.entries(modules).map(([key, url]) => ({
  key: normalize(key),
  url,
}))

const cache = new Map<string, string>()

export function asset(fragment: string): string {
  const want = normalize(fragment)
  const cached = cache.get(want)
  if (cached !== undefined) return cached

  // Prefer an exact suffix match on the full path.
  let found = entries.find((e) => e.key.endsWith('/' + want) || e.key.endsWith(want))

  // Fall back to matching just the basename.
  if (!found) {
    const base = want.split('/').pop() as string
    found = entries.find((e) => (e.key.split('/').pop() as string) === base)
  }

  const url = found?.url ?? ''
  if (!url && import.meta.env.DEV) {
    // Surface missing-asset issues during development.
    console.warn('[asset] not found:', fragment)
  }
  cache.set(want, url)
  return url
}
