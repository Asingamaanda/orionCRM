import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { action } = await req.json();
  return NextResponse.json({ action, status: "queued" });
}
