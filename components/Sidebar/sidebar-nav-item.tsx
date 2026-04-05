import Link from "next/link";
import type { ReactNode } from "react";

export type SidebarNavItemProps = {
  href: string;
  label: string;
  icon: ReactNode;
  active?: boolean;
  external?: boolean;
  trailing?: ReactNode;
  disabled?: boolean;
};

export function SidebarNavItem({
  href,
  label,
  icon,
  active,
  external,
  trailing,
  disabled,
}: SidebarNavItemProps) {
  const className = [
    "flex h-[2.3125rem] w-full max-w-60 items-center rounded-xl px-3 py-2.5 text-sm font-medium leading-normal transition-colors",
    trailing ? "justify-between gap-4" : "gap-4",
    disabled
      ? "cursor-not-allowed bg-sidebar text-secondary"
      : active
        ? "bg-primary/10 text-primary-dark"
        : "bg-sidebar text-secondary hover:bg-accent",
  ].join(" ");

  const content = trailing ? (
    <>
      <span className="flex min-w-0 flex-1 items-center gap-4">
        <span className="flex size-4 shrink-0 [&_img]:size-4 [&_img]:object-contain [&_svg]:size-4 [&_svg]:shrink-0">
          {icon}
        </span>
        <span className="truncate">{label}</span>
      </span>
      <span className="shrink-0">{trailing}</span>
    </>
  ) : (
    <>
      <span className="flex size-4 shrink-0 [&_img]:size-4 [&_img]:object-contain [&_svg]:size-4 [&_svg]:shrink-0">
        {icon}
      </span>
      <span className="min-w-0 flex-1 truncate">{label}</span>
    </>
  );

  if (disabled) {
    return (
      <button
        type="button"
        disabled
        className={`${className} border-0 font-inherit text-left outline-none`}
      >
        {content}
      </button>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
