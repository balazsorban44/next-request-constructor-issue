import { NextRequest } from "next/server";

import { foo } from "foo"; // uses new NextRequest(req)
// import { foo } from "foo/default"; // uses new NextRequest.default(req)

export function GET(req: NextRequest) {
  foo(req);
  return Response.json("Hello, world!");
}

// export const runtime = "edge"; // Commenting this out make both imports work
