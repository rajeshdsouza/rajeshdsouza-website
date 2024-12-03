import { cache } from './cache';

export async function fetchWithCache<T>(
  key: string,
  fetcher: () => Promise<T>
): Promise<T> {
  const cachedData = cache.get<T>(key);
  if (cachedData) return cachedData;

  try {
    const data = await fetcher();
    cache.set(key, data);
    return data;
  } catch (error) {
    console.error(`Error fetching data for key ${key}:`, error);
    throw error;
  }
}

export function createApiHandler<T>(
  fetcher: () => Promise<T>,
  cacheKey: string
) {
  return async () => {
    return fetchWithCache(cacheKey, fetcher);
  };
}