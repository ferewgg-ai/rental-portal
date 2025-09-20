export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/renew/:path*", "/api/renew"],
};