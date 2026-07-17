import type { ReactNode } from "react";
import { ThemeToggle } from "./ThemeToggle";

type DocumentLayoutProps = {
  children: ReactNode;
  filePath: string;
  footerText?: string;
};

export function DocumentLayout({
  children,
  filePath,
  footerText = "Last updated July 2026.",
}: DocumentLayoutProps) {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <main className="document" id="content">
        <header className="document-header">
          <p className="file-path">{filePath}</p>
          <div className="header-actions">
            <nav aria-label="Site links">
              <a href="/">home</a>
              <a href="/#work">work</a>
              <a href="/#projects">projects</a>
              <a href="/blog/">blog</a>
              <a href="/#contact">contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </header>
        {children}
        <footer>
          <p>{footerText}</p>
          <a href="#content">Back to top ↑</a>
        </footer>
      </main>
    </>
  );
}
