import { NavGroup, NavItemId } from "@/constants/navigation";

export const SIDEBAR_GROUP_LABELS: Record<NavGroup, string> = {
  [NavGroup.Overview]: "Overview",
  [NavGroup.Configuration]: "Configuration",
  [NavGroup.Support]: "Support",
};

export const SIDEBAR_ICON_PATHS: Record<NavItemId, string> = {
  [NavItemId.Dashboard]: "/icons/nav/dashboard.svg",
  [NavItemId.Accounts]: "/icons/nav/accounts.svg",
  [NavItemId.Logs]: "/icons/nav/logs.svg",
  [NavItemId.Fields]: "/icons/nav/field-mapping.svg",
  [NavItemId.Integrations]: "/icons/nav/integrations.svg",
  [NavItemId.ApiKeys]: "/icons/nav/api-keys.svg",
  [NavItemId.Webhooks]: "/icons/nav/webhooks.svg",
  [NavItemId.ProjectSettings]: "/icons/nav/project-settings.svg",
  [NavItemId.FieldCoverage]: "/icons/nav/field-coverage.svg",
  [NavItemId.Documentation]: "/icons/nav/documentation.svg",
};

export const SIDEBAR_ASSETS = {
  logo: "/icons/brand/logo-mark.svg",
  chevronSelector: "/icons/ui/chevron-selector.svg",
  themeToggle: "/icons/ui/theme-toggle.svg",
  externalLink: "/icons/ui/external-link.svg",
  accountMenu: "/icons/ui/account-menu.svg",
} as const;

export type SidebarItemDef = {
  id: NavItemId;
  label: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
  activeIconSrc?: string;
};

export const SIDEBAR_SECTIONS: {
  group: NavGroup;
  items: SidebarItemDef[];
}[] = [
  {
    group: NavGroup.Overview,
    items: [
      {
        id: NavItemId.Dashboard,
        label: "Overview",
        href: "/",
        disabled: true,
      },
      {
        id: NavItemId.Accounts,
        label: "Accounts",
        href: "/accounts",
        disabled: true,
      },
      {
        id: NavItemId.Logs,
        label: "Logs",
        href: "/",
        activeIconSrc: "/icons/nav/logs-active.svg",
      },
    ],
  },
  {
    group: NavGroup.Configuration,
    items: [
      {
        id: NavItemId.Fields,
        label: "Field Mapping",
        href: "/field-mapping",
        disabled: true,
      },
      {
        id: NavItemId.Integrations,
        label: "Integrations",
        href: "/integrations",
        disabled: true,
      },
      {
        id: NavItemId.ApiKeys,
        label: "API Keys",
        href: "/api-keys",
        disabled: true,
      },
      {
        id: NavItemId.Webhooks,
        label: "Webhooks",
        href: "/webhooks",
        disabled: true,
      },
      {
        id: NavItemId.ProjectSettings,
        label: "Project Settings",
        href: "/project-settings",
        disabled: true,
      },
    ],
  },
  {
    group: NavGroup.Support,
    items: [
      {
        id: NavItemId.FieldCoverage,
        label: "Field Coverage",
        href: "/field-coverage",
        disabled: true,
      },
      {
        id: NavItemId.Documentation,
        label: "Documentation",
        href: "https://docs.stackone.com",
        external: true,
      },
    ],
  },
];
