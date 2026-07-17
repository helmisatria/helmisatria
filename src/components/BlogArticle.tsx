import type { MDXComponents } from "mdx/types";
import { useEffect, useRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

type BlogArticleProps = {
  children: ReactNode;
};

type BlogCodeFigureProps = ComponentPropsWithoutRef<"figure"> & {
  "data-rehype-pretty-code-figure"?: string;
};

function BlogCodeFigure(props: BlogCodeFigureProps) {
  const isCodeBlock = Object.hasOwn(props, "data-rehype-pretty-code-figure");

  if (!isCodeBlock) {
    return <figure {...props} />;
  }

  return (
    <figure className="code-block-wrapper" {...props}>
      <button type="button" className="copy-button" aria-label="Copy code to clipboard">
        Copy
      </button>
      {props.children}
    </figure>
  );
}

export const blogMdxComponents = {
  figure: BlogCodeFigure,
} satisfies MDXComponents;

export function BlogArticle({ children }: BlogArticleProps) {
  const articleRef = useRef<HTMLElement>(null);
  const resetTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const article = articleRef.current;

    if (!article) {
      return;
    }

    async function copyCode(event: MouseEvent) {
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>(".copy-button");

      if (!button) {
        return;
      }

      const code = button.parentElement?.querySelector("code")?.textContent;

      if (!code) {
        return;
      }

      window.clearTimeout(resetTimerRef.current);

      try {
        await navigator.clipboard.writeText(code);
        button.dataset.state = "copied";
        button.textContent = "Copied";
      } catch {
        button.dataset.state = "error";
        button.textContent = "Try again";
      }

      resetTimerRef.current = window.setTimeout(() => {
        delete button.dataset.state;
        button.textContent = "Copy";
      }, 2_000);
    }

    article.addEventListener("click", copyCode);
    return () => {
      article.removeEventListener("click", copyCode);
      window.clearTimeout(resetTimerRef.current);
    };
  }, []);

  return (
    <article className="blog-article" lang="id" ref={articleRef}>
      {children}
    </article>
  );
}
