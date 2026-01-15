import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header />
      <main className="flex-1 w-full">
          {children}
      </main>
      <Footer />
    </div>
  );
}
