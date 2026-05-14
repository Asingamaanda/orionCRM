import { NextResponse } from "next/server";
export async function GET() { return NextResponse.json({ active_leads: 19, pending_tasks: 7, consultations_booked: 12, completed_tasks: 38 }); }
