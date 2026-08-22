const CACHE_NAME = 'cv-data'

export async function fetchWithCache(url: string, init: RequestInit, ttlSeconds: number): Promise<Response> {
    const cache = await caches.open(CACHE_NAME)
    const cacheKey = new Request(url, init as RequestInit)

    const cached = await cache.match(cacheKey)
    if (cached) return cached

    let lastError: unknown
    for (let attempt = 0; attempt < 3; attempt++) {
        try {
            const res = await fetch(url, init)
            if (res.ok) {
                const cacheable = new Response(res.clone().body, res)
                cacheable.headers.set('Cache-Control', `public, max-age=${ttlSeconds}`)
                await cache.put(cacheKey, cacheable)
                return res
            }
            lastError = new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`)
        } catch (e) {
            lastError = e
        }
    }
    throw lastError
}
