import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "✅ gpo-gameroom Liveness OK!",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
}
