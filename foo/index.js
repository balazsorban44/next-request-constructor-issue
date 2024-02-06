import { NextRequest } from "next/server";

export function foo(req) {
  return new NextRequest(req);
}
