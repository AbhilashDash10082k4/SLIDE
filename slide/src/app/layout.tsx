import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/theme-provider";

//Metadata in this context refers to information that describes the content of a page or a layout and is used for purposes like SEO, social sharing, and browser behavior.
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slide Automation",
  description: "Automating Instagram DM's and Comment replies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body 
      suppressHydrationWarning 
      className={jakarta.className}
      >
        <ThemeProvider 
        attribute="class" defaultTheme="dark"
        disableTransitionOnChange 
        >
          {children}
        <Toaster/>
        </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}