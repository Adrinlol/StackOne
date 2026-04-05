import { NavGroup } from "@/constants/navigation";
import { type SidebarItemDef, SIDEBAR_SECTIONS } from "./constants";

export function isSidebarItemActive(
  pathname: string,
  item: SidebarItemDef,
): boolean {
  if (item.external || item.disabled) return false;
  const href = item.href;
  if (!href.startsWith("/")) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const MAIN_SECTIONS = SIDEBAR_SECTIONS.filter(
  (navSection) => navSection.group !== NavGroup.Support,
);

export const SUPPORT_SECTION = SIDEBAR_SECTIONS.find(
  (navSection) => navSection.group === NavGroup.Support,
)!;
