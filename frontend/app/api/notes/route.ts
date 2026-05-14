import { NextResponse } from "next/server";
export async function GET() { return NextResponse.json([{ id: 1, content: "Client asked about M&A due diligence timeline.", category: "Client", created_at: "2026-05-11 10:22" }]); }
