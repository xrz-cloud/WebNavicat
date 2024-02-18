import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { posts: string } }
) {
  return NextResponse.rewrite(
    new URL("/api/chat/peer" + context.params.posts, "https://oboard.eu.org")
  );
}
