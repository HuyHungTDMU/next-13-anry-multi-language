import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["vn", "en", "jp"],
  defaultLocale: "vn",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
