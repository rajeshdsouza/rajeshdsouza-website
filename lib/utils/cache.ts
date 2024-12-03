interface CacheItem<T> {
  data: T;
  timestamp: number;
}

type CacheMap = Map<string, CacheItem<unknown>>;

class Cache {
  private static instance: Cache;
  private cache: CacheMap;

  private constructor() {
    this.cache = new Map();
  }

  static getInstance(): Cache {
    if (!Cache.instance) {
      Cache.instance = new Cache();
    }
    return Cache.instance;
  }

  set<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
    });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key) as CacheItem<T> | undefined;
    if (!item) return null;

    const isExpired = Date.now() - item.timestamp > (process.env.CACHE_DURATION || 5) * 60 * 1000;
    if (isExpired) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  clear(): void {
    this.cache.clear();
  }
}

export const cache = Cache.getInstance();