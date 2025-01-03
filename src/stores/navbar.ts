import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

// Define the state interface
interface NavbarState {
  toggle: boolean;
  navbarColorNew: number;
  navbarColorNew2: number;
  navbarHide: number;
  delayAnim: number;
  delayAnimLenis: number;
  imagePath: string;
  navbarTransision: number;
  preloader: number;
  currencyTo: string;
  currencyDevTo: string;

  updateToggle: (toggle: boolean) => void;
  updateNavbarColorNew: (navbarColorNew: number) => void;
  updateNavbarColorNew2: (navbarColorNew2: number) => void;
  updateNavbarHide: (navbarHide: number) => void;
  updateDelayAnim: (delayAnim: number) => void;
  updateDelayAnimLenis: (delayAnimLenis: number) => void;
  updateImagePath: (imagePath: string) => void;
  updateNavbarTransision: (navbarTransision: number) => void;
  updatePreloader: (preloader: number) => void;
  updateCurrencyTo: (currencyTo: string) => void;
  updateCurrencyDevTo: (currencyDevTo: string) => void;
}

// Create the Zustand store
const toggleNavbar = create<NavbarState>((set) => ({
  toggle: true,
  navbarColorNew: 0,
  navbarColorNew2: 0,
  navbarHide: 0,
  delayAnim: 0,
  delayAnimLenis: 1000,
  imagePath: "",
  navbarTransision: 0,
  preloader: 0,
  currencyTo: "IDR",
  currencyDevTo: "USD",

  updateToggle: (toggle) => set({ toggle }),
  updateNavbarColorNew: (navbarColorNew) =>
    set({ navbarColorNew, navbarColorNew2: navbarColorNew }),
  updateNavbarColorNew2: (navbarColorNew2) => set({ navbarColorNew2 }),
  updateNavbarHide: (navbarHide) => set({ navbarHide }),
  updateDelayAnim: (delayAnim) => set({ delayAnim }),
  updateDelayAnimLenis: (delayAnimLenis) => set({ delayAnimLenis }),
  updateImagePath: (imagePath) => set({ imagePath }),
  updateNavbarTransision: (navbarTransision) => set({ navbarTransision }),
  updatePreloader: (preloader) => set({ preloader }),
  updateCurrencyTo: (currencyTo) => set({ currencyTo }),
  updateCurrencyDevTo: (currencyDevTo) => set({ currencyDevTo }),
}));

export { toggleNavbar };
