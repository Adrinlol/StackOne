"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { SidebarNavItem } from "./sidebar-nav-item";
import {
  type SidebarItemDef,
  SIDEBAR_ASSETS,
  SIDEBAR_GROUP_LABELS,
  SIDEBAR_ICON_PATHS,
} from "./constants";
import {
  isSidebarItemActive,
  MAIN_SECTIONS,
  SUPPORT_SECTION,
} from "./sidebar-client-helpers";
import { useShellChrome } from "./shell-chrome-provider";

export function SidebarClient() {
  const pathname = usePathname();
  const { projectEnvironment, authenticatedUser } = useShellChrome();

  const renderItem = (item: SidebarItemDef) => {
    const active = isSidebarItemActive(pathname, item);
    const iconSrc =
      active && item.activeIconSrc
        ? item.activeIconSrc
        : SIDEBAR_ICON_PATHS[item.id];

    return (
      <SidebarNavItem
        key={item.id}
        href={item.href}
        label={item.label}
        icon={
          <Image
            src={iconSrc}
            alt=""
            width={16}
            height={16}
            className="size-4 shrink-0 object-contain"
            unoptimized
          />
        }
        active={active}
        external={item.external}
        disabled={item.disabled}
        trailing={
          item.external && !item.disabled ? (
            <Image
              src={SIDEBAR_ASSETS.externalLink}
              alt=""
              width={11}
              height={11}
              className="size-2.75 shrink-0 object-contain"
              unoptimized
            />
          ) : undefined
        }
      />
    );
  };

  return (
    <aside className="flex h-screen w-70 shrink-0 flex-col bg-sidebar py-2">
      <header className="flex h-15 shrink-0 items-center gap-3 border-b border-border px-7">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Image
            src={SIDEBAR_ASSETS.logo}
            alt=""
            width={24}
            height={15}
            className="shrink-0"
            priority
          />
          <div className="flex min-w-0 flex-1 items-center gap-4">
            <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
              {projectEnvironment.activeEnvironmentLabel}
            </span>
            <button
              type="button"
              disabled
              className="shrink-0 cursor-not-allowed opacity-50"
              aria-label="Project environment (unavailable)"
            >
              <Image
                src={SIDEBAR_ASSETS.chevronSelector}
                alt=""
                width={16}
                height={16}
                className="size-4"
                unoptimized
              />
            </button>
          </div>
        </div>
        <div className="flex h-6.5 w-4.5 shrink-0 items-center justify-center">
          <button
            type="button"
            disabled
            className="cursor-not-allowed opacity-50"
          >
            <Image
              src={SIDEBAR_ASSETS.themeToggle}
              alt=""
              width={16}
              height={16}
              className="size-4"
              unoptimized
            />
          </button>
        </div>
      </header>

      <nav className="flex min-h-0 flex-1 flex-col">
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="flex flex-col gap-1 px-5 py-2">
            {MAIN_SECTIONS.map((section) => (
              <div key={section.group} className="flex flex-col gap-1">
                <div className="px-3 pb-1 pt-3.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-tag">
                    {SIDEBAR_GROUP_LABELS[section.group]}
                  </p>
                </div>
                {section.items.map(renderItem)}
              </div>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 flex-col">
          <div className="flex flex-col gap-1 px-5 py-4.5">
            <div className="px-3 pb-1 pt-3.5">
              <p className="text-xs font-semibold uppercase tracking-wide text-tag">
                {SIDEBAR_GROUP_LABELS[SUPPORT_SECTION.group]}
              </p>
            </div>
            {SUPPORT_SECTION.items.map(renderItem)}
          </div>
        </div>

        <div className="box-border flex h-15 shrink-0 items-center border-t border-border px-5">
          <div className="flex w-full items-center gap-4 rounded-xl px-3 py-2.5">
            <div className="flex size-4 shrink-0 items-center justify-center rounded border border-border text-xs font-medium leading-none text-foreground">
              {authenticatedUser.avatarInitial}
            </div>
            <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
              {authenticatedUser.displayName}
            </span>
            <button
              type="button"
              disabled
              className="shrink-0 cursor-not-allowed opacity-50"
              aria-label="Account menu (unavailable)"
            >
              <Image
                src={SIDEBAR_ASSETS.accountMenu}
                alt=""
                width={13}
                height={13}
                className="size-3.25"
                unoptimized
              />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}
