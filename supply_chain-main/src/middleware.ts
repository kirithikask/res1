import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/register", "/market", "/product-catalog", "/api(.*)"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next/static|_next/image|favicon.ico).*)", "/", "/(api|trpc)(.*)"],
};
