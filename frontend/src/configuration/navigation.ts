
export type NavItem = {
  href: EXISTING_URLS | EXISTING_ANCORNS;
  text: string;
};

function isNavItem(item: unknown): item is NavItem {
  return (
    typeof item === "object" &&
    item !== null &&
    "href" in item &&
    "text" in item &&
    typeof item.text === "string" &&
    typeof item.href === "string"
  );
}

export type NavItemDesktop = (NavItem | {
  text: string;
  innerItems: NavItem[];
}) & { hideOnScroll?: boolean }

export function isNavItemDesktop(item: unknown): item is NavItemDesktop {
  if (!item || typeof item !== "object") {
    return false;
  }

  // Check if it's a regular NavItem
  if (isNavItem(item)) {
    return true;
  }

  // Check if it's a dropdown item
  if (
    "text" in item &&
    typeof item.text === "string" &&
    "innerItems" in item &&
    Array.isArray(item.innerItems) &&
    item.innerItems.every(isNavItem)
  ) {
    return true;
  }

  return false;
}

export type NavItemMobile = NavItem & {
  showInPopup: boolean;
}

export function isNavItemMobile(item: unknown): item is NavItemMobile {
  return (
    isNavItem(item) &&
    "showInPopup" in item &&
    typeof item.showInPopup === "boolean"
  );
}

export type EXISTING_URLS = "/history"
  | "/how-to-become-a-cristian"
  | "/public-service"
  | "/our-symbols"
  | "/videos"
  ;

export type EXISTING_ANCORNS = "#services" | "#footer";

export const navItemsDesktop: NavItemDesktop[] = [
  {
    text: "О нас", innerItems: [
      { href: "/history", text: "История" },
      { href: "/our-symbols", text: "Во что мы верим" },
    ],
  },
  { href: "/how-to-become-a-cristian", text: "Как стать христианином?", hideOnScroll: true },
  { href: "/public-service", text: "Проповеди" },
  { href: "#services", text: "Служения" },
  { href: "#footer", text: "Контакты" },
];

export const navItemsMobileAndTablet: NavItemMobile[] = [
  { href: "/history", text: "История", showInPopup: false },
  { href: "/our-symbols", text: "О нас", showInPopup: false },
  { href: "/videos", text: "Проповеди", showInPopup: false },

  // these navs are shown in popup
  { href: "/how-to-become-a-cristian", text: "Как стать христианином?", showInPopup: true },
  { href: "#services", text: "Служения", showInPopup: true },
  { href: "#footer", text: "Контакты", showInPopup: true },
];