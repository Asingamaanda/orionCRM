import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  if (body.password === "password") return NextResponse.json({ access_token: "mock-jwt-token", role: "Admin" });
  return NextResponse.json({ error: "invalid" }, { status: 401 });
}
