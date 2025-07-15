import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "✅ guapo-gameroom Liveness OK!",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
}
