<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## StackOne app data (shell / mocks)

- **Project environment** vs **authenticated user**: types in **`types/sidebar-shell.ts`**, **`load*`** in **`lib/data/sidebar-shell.ts`**. **`GET /api/shell/project-environment`** and **`GET /api/shell/authenticated-user`** delegate to those loaders.
- **Server-first**: async **`app/layout.tsx`** loads shell data once → **`ShellChromeProvider`** → **`Sidebar`**. Client pages use **`useShellChrome`** / **`useAuthenticatedUser`** / **`useProjectEnvironment`**. Fields: **`activeEnvironmentLabel`**, **`displayName`**, **`avatarInitial`**.
- **Naming**: callback and local names should include a **meaningful word** (`navSection`, `navItem`, `clickEvent`) — not single letters like `s` / `e` / `i`. See `.cursor/rules/stackone-frontend.mdc`.

