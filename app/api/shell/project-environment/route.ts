import { NextResponse } from "next/server";
import { loadProjectEnvironmentSummary } from "@/lib/data/sidebar-shell";

export async function GET() {
  const body = await loadProjectEnvironmentSummary();
  return NextResponse.json(body);
}
