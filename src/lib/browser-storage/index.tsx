"use client";

type TstorageType = "local" | "session";

const isBrowser = typeof window !== "undefined";

const BrowserStorage = {
  get<T>(typ: TstorageType, key: string, fallback?: T): T | null {
    if (!isBrowser) return fallback ?? null;

    let data = null;
    if (typ === "local") data = localStorage.getItem(key);
    if (typ === "session") data = sessionStorage.getItem(key);

    if (data) {
      try {
        data = JSON.parse(data);
      } catch {
        data = null;
      }
    }
    return data ? (data as T) : fallback ?? null;
  },
  set<T>(typ: TstorageType, key: string, data: T): T | null {
    if (!isBrowser) return null;

    try {
      if (typ === "local") localStorage.setItem(key, JSON.stringify(data));
      if (typ === "session") sessionStorage.setItem(key, JSON.stringify(data));
      return data;
    } catch {
      return null;
    }
  },
  remove(typ: TstorageType, key: string): void {
    if (!isBrowser) return;

    try {
      if (typ === "local") localStorage.removeItem(key);
      if (typ === "session") sessionStorage.removeItem(key);
    } catch {}
  },
};

export { BrowserStorage };
