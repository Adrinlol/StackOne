export function SidebarLoading() {
  return (
    <aside className="flex h-screen w-70 shrink-0 flex-col bg-sidebar py-2 font-sans">
      <header className="flex h-15 shrink-0 items-center gap-3 border-b border-border px-7">
        <div className="h-4 w-24 animate-pulse rounded bg-border" />
        <div className="ml-auto h-4 w-4 animate-pulse rounded bg-border" />
      </header>
      <div className="flex flex-1 flex-col justify-end">
        <div className="border-t border-border px-5 py-4">
          <div className="h-10 animate-pulse rounded-xl bg-border" />
        </div>
      </div>
    </aside>
  );
}
