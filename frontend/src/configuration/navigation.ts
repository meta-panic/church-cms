import { root } from "@/utils/isRoot";

export type NavItem = {
  href: ExistingUrls | ExistingAnchors;
  text: string;
};

export type NavItemDesktop = (NavItem | {
  text: string;
  innerItems: NavItem[];
}) & { hideOnScroll?: boolean }

export type NavItemMobile = NavItem & {
  showInPopup: boolean;
}

export const EXISTING_URLS = [
  "/history",
  "/how-to-become-a-cristian",
  "/public-service",
  "/our-symbols",
  "/videos",
  root, // it is a root
] as const;
export type PublicServiceRoute = `/public-service/${string}`;

export type ExistingUrls = typeof EXISTING_URLS[number];

export type ExistingAnchors = `${typeof root}#services` | "#contacts";

export const navItemsDesktop: NavItemDesktop[] = [
  {
    text: "О нас", innerItems: [
      { href: "/history", text: "История" },
      { href: "/our-symbols", text: "Во что мы верим" },
    ],
  },
  { href: "/how-to-become-a-cristian", text: "Как стать христианином?", hideOnScroll: true },
  { href: "/public-service", text: "Проповеди" },
  { href: `${root}#services`, text: "Служения" },
  { href: "#contacts", text: "Контакты" },
];

export const navItemsMobileAndTablet: NavItemMobile[] = [
  { href: "/history", text: "История", showInPopup: false },
  { href: "/our-symbols", text: "О нас", showInPopup: false },
  { href: "/videos", text: "Проповеди", showInPopup: false },

  // these navs are shown in popup
  { href: "/how-to-become-a-cristian", text: "Как стать христианином?", showInPopup: true },
  { href: `${root}#services`, text: "Служения", showInPopup: true },
  { href: "#contacts", text: "Контакты", showInPopup: true },
];
