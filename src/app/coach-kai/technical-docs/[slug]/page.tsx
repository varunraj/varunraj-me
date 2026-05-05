import { readFile } from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { coachKaiDocs, getCoachKaiDocBySlug } from "@/lib/coachKaiDocs";
import MermaidDiagram from "@/components/MermaidDiagram";

type DocPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return coachKaiDocs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getCoachKaiDocBySlug(slug);
  if (!doc) {
    return { title: "Doc Not Found | Coach Kai Technical Docs" };
  }

  return {
    title: `${doc.title} | Coach Kai Technical Docs`,
    description: doc.description,
  };
}

export default async function CoachKaiTechnicalDocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const doc = getCoachKaiDocBySlug(slug);
  if (!doc) {
    notFound();
  }

  const markdownPath = path.join(
    process.cwd(),
    "public",
    "coach-kai-docs",
    `${slug}.md`
  );

  let content = "";
  try {
    content = await readFile(markdownPath, "utf-8");
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{doc.title}</h1>
            <div className="flex items-center gap-4 text-sm font-medium">
              <Link href="/coach-kai/technical-docs" className="text-blue-700 hover:text-blue-900">
                Back to Docs
              </Link>
              <a
                href={`/coach-kai-docs/${slug}.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                View Raw Markdown
              </a>
            </div>
          </div>

          <article className="markdown-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                code({ className, children, ...props }) {
                  const isMermaid =
                    className?.includes("language-mermaid") ?? false;
                  const codeContent = String(children).replace(/\n$/, "");

                  if (isMermaid) {
                    return <MermaidDiagram chart={codeContent} />;
                  }

                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </section>
    </main>
  );
}
