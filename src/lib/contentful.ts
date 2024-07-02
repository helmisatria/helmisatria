import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, MARKS, type Document } from "@contentful/rich-text-types";
import contentful, { type Asset, type EntryFieldTypes } from "contentful";
import { marked } from "marked";
import { codeToHtml, createHighlighter } from "shiki";

// Configuration
const CONTENTFUL_SPACE_ID = import.meta.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_DELIVERY_TOKEN = import.meta.env.CONTENTFUL_DELIVERY_TOKEN;

// Create Contentful client
export const contentfulClient = contentful.createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_DELIVERY_TOKEN,
  host: "cdn.contentful.com",
});

// Interfaces
export interface BlogPost {
  contentTypeId: "blog";
  fields: {
    title: EntryFieldTypes.Text;
    subheadline: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    thumbnail: Asset;
    slug: EntryFieldTypes.Text;
    longContent: EntryFieldTypes.Text;
  };
}

const highlighter = await createHighlighter({
  themes: ["houston"],
  langs: ["text", "markdown"],
});

// Helper functions
const highlightCode = async (code: string, language: string, isInline: boolean = false) => {
  if (!code) {
    return "";
  }

  if (isInline) {
    const tokens = highlighter.codeToHtml(code, {
      theme: "houston",
      lang: language,
    });

    let html = '<code class="shiki-inline" style="background-color: var(--shiki-color-background)">';

    for (const line of tokens) {
      for (const token of line) {
        html += token;
      }
    }

    html += "</code>";
    return html;
  }

  return codeToHtml(code, { lang: language, theme: "github-dark-dimmed" });
};

const processCodeBlock = async (block: string, isInline: boolean = false) => {
  const language = block.match(/data-language="([^"]*)"/)![1];
  const codeMatch = block.match(/<(pre|code)[^>]*>([\s\S]*?)<\/(pre|code)>/);
  const code = codeMatch ? codeMatch[2] : "";
  const cleanedCode = code.replace(/```[\w-]*\n|```$/g, "").trim();
  const highlightedCode = await highlightCode(cleanedCode, language, isInline);

  if (isInline) {
    return highlightedCode;
  }

  return `<div class="code-block-wrapper relative group">${highlightedCode}<button class="copy-button font-code !opacity-0 group-hover:!opacity-100 transition-opacity duration-100">Copy</button></div>`;
};

const renderRichTextToHtml = (richText: Document) => {
  return documentToHtmlString(richText, {
    renderMark: {
      [MARKS.CODE]: (text) => {
        // replace &quot; with "
        text = text.replace(/&quot;/g, '"');

        const gistMatch = text.trim().match(/https:\/\/gist\.github\.com\/([^\/]+)\/([^\/\.]+)/);
        if (gistMatch) {
          const [, username, id] = gistMatch;
          return `<iframe
            src="https://gist.github.com/${username}/${id}.pibb"
            style="width: 100%; height: 500px;"
          >
          </iframe>
        `;
        }

        const langMatch = text.trim().match(/^lang:(\w+)/);
        if (langMatch) {
          const lang = langMatch[1];
          text = text.replace(/^lang:\w+\s*/, "");
          return `<pre class="code-block" data-language="${lang}">${text.trim()}</pre>`;
        }

        return `<pre class="code-block" data-language="text">${text.trim()}</pre>`;
      },
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const contentType = node.data.target.sys.contentType.sys.id;
        if (contentType === "codeBlock") {
          return `<pre class="code-block" data-language="${node.data.target.fields.language}">${node.data.target.fields.code}</pre>`;
        }
        return "";
      },
    },
  });
};

const createCustomMarkedRenderer = () => {
  const renderer = new marked.Renderer();

  renderer.code = ({ text, lang }) => {
    return `<pre class="code-block" data-language="${lang || "text"}">${text}</pre>`;
  };

  renderer.codespan = ({ text }) => {
    const decodedCode = text.replace(/&quot;/g, '"');

    return `<code class="code-block" data-language="text">${decodedCode}</code>`;
  };
  return renderer;
};

const processContent = async (content: string, isMarkdown: boolean = false) => {
  if (isMarkdown) {
    const customRenderer = createCustomMarkedRenderer();
    content = await marked(content, { renderer: customRenderer });
  }

  // Process block code
  const codeBlocks = content.match(/<pre class="code-block"[^>]*>([\s\S]*?)<\/pre>/g) || [];
  for (const block of codeBlocks) {
    const highlightedCode = await processCodeBlock(block);
    content = content.replace(block, highlightedCode);
  }

  // Process inline code
  const inlineCodeBlocks = content.match(/<code class="code-block"[^>]*>([\s\S]*?)<\/code>/g) || [];
  for (const block of inlineCodeBlocks) {
    const highlightedCode = await processCodeBlock(block, true);
    content = content.replace(block, highlightedCode);
  }

  return content;
};

// Main functions
export const getBlogPosts = async ({ limit = 1000 }: { limit?: number } = {}) => {
  const entries = await contentfulClient.getEntries<BlogPost>({
    content_type: "blog",
    limit,
    "sys.revision[gte]": 1,
  });

  const posts = await Promise.all(
    entries.items.map(async (entry) => {
      const content = await processContent(renderRichTextToHtml(entry.fields.content));
      const longContent = entry.fields.longContent ? await processContent(entry.fields.longContent, true) : content;

      return {
        ...entry,
        title: entry.fields.title,
        slug: entry.fields.slug,
        content: longContent,
        subheadline: entry.fields.subheadline,
        thumbnail: (entry.fields?.thumbnail as Asset)?.fields?.file?.url,
        link: `/blog/${entry.fields.slug}`,
        tags: entry.metadata.tags.map((tag) => tag.sys.id),
        fields: { ...entry.fields, publishDate: entry.sys.updatedAt },
      };
    })
  );

  return posts;
};

export const getBlogDetail = async (
  slug: string
): Promise<{
  title: string;
  content: string;
  subheadline: string;
  publishDate: string;
  tags: string[];
}> => {
  const entries = await contentfulClient.getEntries<BlogPost>({
    content_type: "blog",
    "fields.slug": slug,
  });

  const blogPost = entries.items[0];
  const content = await processContent(renderRichTextToHtml(blogPost.fields.content));
  const longContent = blogPost.fields.longContent ? await processContent(blogPost.fields.longContent, true) : content;

  return {
    title: blogPost.fields.title,
    content: longContent,
    subheadline: blogPost.fields.subheadline,
    publishDate: blogPost.sys.updatedAt as string,
    tags: blogPost.metadata.tags.map((tag) => tag.sys.id),
  };
};
