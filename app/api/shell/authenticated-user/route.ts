import { NextResponse } from "next/server";
import { loadAuthenticatedUserSummary } from "@/lib/data/sidebar-shell";

export async function GET() {
  const body = await loadAuthenticatedUserSummary();
  return NextResponse.json(body);
}
