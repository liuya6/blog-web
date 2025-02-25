import type { Metadata } from "next";
import "../styles/globals.css";

import MHeader from "../components/features/Header";

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
    <html lang="en">
      <body>
        <MHeader />
        <div className={`mx-auto w-96`}>{children}</div>
      </body>
    </html>
  );
}
