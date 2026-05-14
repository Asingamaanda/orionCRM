import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([{ id: 1, title: "Review intake forms", priority: "High", status: "In Progress", assigned_to: "Alex", due_date: "2026-05-18" }]);
}
