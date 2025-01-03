"use client";
import { AUTH } from "@/constants/auth";
import { BrowserStorage } from "@/lib/browser-storage";
import { create } from "zustand";

const isBrowser = typeof window !== "undefined";
interface Istate {
  role: string | null;
  uid: string | null;
  token: string | null;
  roles: any[];
  user: any;
}

const initialState: Istate = {
  token: isBrowser ? BrowserStorage.get<string>("local", AUTH.TOKEN_KEY) : null,
  uid: isBrowser ? BrowserStorage.get<string>("local", AUTH.UID_KEY) : null,
  role: isBrowser ? BrowserStorage.get<string>("local", AUTH.ROLE_KEY) : null,
  roles: [],
  user: isBrowser ? BrowserStorage.get<any>("local", AUTH.USR_KEY) : null,
};

interface Iaction {
  setToken: (token: string | null) => void;
  setUid: (uid: string | null) => void;
  setRole: (role: string | null) => void;
  setRoles: (roles: any[]) => void;
  setUser: (user: any) => void;

  clear: () => void;
}

const appStore = create<Istate & Iaction>((set) => ({
  ...initialState,
  setToken: (t) => {
    if (!t) BrowserStorage.remove("local", AUTH.TOKEN_KEY);
    else BrowserStorage.set("local", AUTH.TOKEN_KEY, t);
    set({ token: t });
  },
  setUid: (t) => {
    if (!t) BrowserStorage.remove("local", AUTH.UID_KEY);
    else BrowserStorage.set("local", AUTH.UID_KEY, t);
    set({ uid: t });
  },
  setRole: (r) => {
    if (!r) BrowserStorage.remove("local", AUTH.ROLE_KEY);
    else BrowserStorage.set("local", AUTH.ROLE_KEY, r);
    set({ role: r });
  },
  setUser: (u) => {
    if (!u) BrowserStorage.remove("local", AUTH.USR_KEY);
    else BrowserStorage.set("local", AUTH.USR_KEY, u);
    set({ user: u });
  },
  setRoles: (roles) => set({ roles }),
  clear: () => set(initialState),
}));

export default appStore;
