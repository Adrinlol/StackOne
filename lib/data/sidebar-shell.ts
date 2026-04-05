import type {
  AuthenticatedUserSummary,
  ProjectEnvironmentSummary,
} from "@/types/sidebar-shell";

async function delay(ms: number): Promise<void> {
  await new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function loadProjectEnvironmentSummary(): Promise<ProjectEnvironmentSummary> {
  await delay(320);
  return {
    activeEnvironmentLabel: "Production [EU1]",
  };
}

export async function loadAuthenticatedUserSummary(): Promise<AuthenticatedUserSummary> {
  await delay(480);
  return {
    displayName: "Morgan Williams",
    avatarInitial: "M",
  };
}
