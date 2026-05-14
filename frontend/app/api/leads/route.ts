import { NextResponse } from "next/server";
export async function GET() { return NextResponse.json([{ id: 1, client_name: "Mercury Holdings", source: "Referral", lead_stage: "Consult Scheduled", conversion_probability: 74, last_contacted: "2026-05-12" }]); }
