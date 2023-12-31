import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { posts: string } }
) {
  return NextResponse.redirect(
    new URL("/posts/" + context.params.posts, "https://blog.xrzyun.eu.org")
  );
}
