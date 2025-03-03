import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import ConvexClientProvider from "./ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";


export const metadata = {
  title: "WARP.IT",
  description: "WARP.IT lets you build and deploy professional websites in under a minute with AI-powered automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        
      >
        <ConvexClientProvider>
        <Provider>
         {children}
         <Toaster />
        </Provider>
        </ConvexClientProvider>
       
      </body>
    </html>
  );
}
