import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Orion Law Operations Dashboard",
  description: "Internal legal-tech operations hub"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
