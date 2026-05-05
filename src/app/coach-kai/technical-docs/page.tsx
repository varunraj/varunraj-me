import Link from "next/link";
import { coachKaiDocs } from "@/lib/coachKaiDocs";

export default function CoachKaiTechnicalDocsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Coach Kai Technical Docs
            </h1>
            <Link
              href="/"
              className="text-sm font-medium text-blue-700 hover:text-blue-900"
            >
              Back to Portfolio
            </Link>
          </div>
          <p className="text-gray-700 mb-8">
            Sample technical documentation pages for Coach Kai. Add or replace
            markdown files in <code className="text-sm">public/coach-kai-docs</code>{" "}
            and update this list as needed.
          </p>

          <div className="space-y-4">
            {coachKaiDocs.map((doc) => (
              <article
                key={doc.slug}
                className="border border-gray-200 rounded-lg p-5 bg-gray-50"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {doc.title}
                </h2>
                <p className="text-sm text-gray-700 mb-3">{doc.description}</p>
                <Link
                  href={`/coach-kai/technical-docs/${doc.slug}`}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-blue-900 bg-white border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all"
                >
                  Read Doc
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
