"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import type {
  AuthenticatedUserSummary,
  ProjectEnvironmentSummary,
} from "@/types/sidebar-shell";

export type ShellChromeValue = {
  projectEnvironment: ProjectEnvironmentSummary;
  authenticatedUser: AuthenticatedUserSummary;
};

const ShellChromeContext = createContext<ShellChromeValue | null>(null);

export function ShellChromeProvider({
  children,
  projectEnvironment,
  authenticatedUser,
}: ShellChromeValue & { children: ReactNode }) {
  const value = useMemo(
    () => ({ projectEnvironment, authenticatedUser }),
    [projectEnvironment, authenticatedUser],
  );
  return (
    <ShellChromeContext.Provider value={value}>
      {children}
    </ShellChromeContext.Provider>
  );
}

export function useShellChrome(): ShellChromeValue {
  const shellChrome = useContext(ShellChromeContext);
  if (!shellChrome) {
    throw new Error("useShellChrome must be used within ShellChromeProvider");
  }
  return shellChrome;
}

export function useAuthenticatedUser(): AuthenticatedUserSummary {
  return useShellChrome().authenticatedUser;
}

export function useProjectEnvironment(): ProjectEnvironmentSummary {
  return useShellChrome().projectEnvironment;
}
