import React from "react";
import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/icon.css";

import { BlogHeader } from "@/components/features/Header";
import { BlogFooter } from "@/components/features/Footer";
import { ProfileCom } from "@/components/features/Profile";
import { Notices } from "@/components/features/Notices";
import { Article } from "@/components/features/Article";
import { ArticleTag } from "@/components/features/ArticleTag";
import { Statistics } from "@/components/features/Statistics";

export const metadata: Metadata = {
  title: "lyq的博客",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[url(/img/background.png)] bg-fixed min-h-screen">
        <BlogHeader />
        <main className="mx-auto max-w-content transform-cpu flex justify-between py-10">
          <section className="min-h-screen flex-1">{children}</section>
          <aside className="w-1/4 pl-[5%]">
            <ProfileCom />
            <Notices />
            <Article />
            <ArticleTag />
            <Statistics />
          </aside>
        </main>
        <BlogFooter />
      </body>
    </html>
  );
}
