import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/components/providers/appProvider";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl={"/sign-in"} appearance={{elements:{formButtonPrimary:'bg-primary !shadow-none text-sm hover:bg-primary/90'  }}}>
       <html lang="en">
    <body className={inter.className}><AppProvider>{children}</AppProvider></body>
  </html>
  </ClerkProvider>
   
  );
}

