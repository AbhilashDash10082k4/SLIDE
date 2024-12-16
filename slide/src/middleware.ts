import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)', '/api/payment(.*)','/callback(.*)'
]);

export default clerkMiddleware(async (auth, req) => {
    //directing user to sign-in page if he is trying to go to any protected route
    if (isProtectedRoute(req)) await auth.protect();

});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};