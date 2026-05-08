"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const productDocs = [
  {
    title: "Coach Kai Reimagining Wellness with AI",
    href: "https://www.notion.so/Coach-Kai-Reimagining-Wellness-with-AI-28c3a8b7312380b9908fe8ae743d3d86",
  },
  {
    title: "Kai Flywheel",
    href: "https://www.notion.so/Kai-Flywheel-dfbbe7fd84e24970b2aa68e614965189?t=35a3a8b7312380bfa93e00a97df8fa99",
  },
  {
    title: "Kai 2.0 Brainstorming Board",
    href: "https://canva.link/ndc4mojq3gpx7vd",
  },
  {
    title: "Login Experience",
    href: "https://www.notion.so/Login-Experience-28f3a8b731238060a706c49459518358",
  },
  {
    title: "Coach Kai Interaction Model",
    href: "https://www.notion.so/Coach-Kai-Interaction-Model-29f3a8b7312380368e90e2042fce5611",
  },
  {
    title: "Kai's Dynamic Memory Model",
    href: "https://www.notion.so/Kai-s-Dynamic-Memory-Model-29f3a8b7312380ec80a8f7d5e3da108b",
  },
  {
    title: "Chat Recipe",
    href: "https://www.notion.so/Chat-Recipe-2c53a8b731238019a5acecf9419ee645",
  },
];

const contentDocs = [
  {
    title: "Content Strategy",
    href: "https://www.notion.so/Content-Strategy-2c23a8b7312380dfbaa6ca94f483478a",
  },
  {
    title: "Content Category Mapping",
    href: "https://www.notion.so/Content-Category-Mapping-2c23a8b7312380e68467f2e125a01856",
  },
  {
    title: "Social Media Content",
    href: "https://www.instagram.com/coachkai.life/",
  },
];

const designDocs = [
  {
    title: "Brand Identity",
    href: "https://www.notion.so/Brand-Identity-28c3a8b7312380a09e11d9d01ba91c5c",
  },
  {
    title: "Google Ad Design",
    href: "https://www.canva.com/design/DAHETgNSerc/tuXcPrAwyOd7wZYcMMd9RA/edit",
  },
  {
    title: "Design : Store Submission",
    href: "https://canva.link/9t4lwt16ytlt49n",
  },
];

export default function CoachKaiProductDocsPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm font-medium text-gray-600">
              <button
                type="button"
                onClick={() => router.back()}
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                coach-kai
              </button>{" "}
              / product-docs
            </p>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800 transition-colors hover:bg-blue-100 hover:text-blue-900"
            >
              Back to Portfolio
            </Link>
          </div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Coach Kai Product Docs
            </h1>
          </div>

          <p className="text-gray-700 mb-8">
            Product documentation and strategy artifacts hosted in Notion.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Product</h2>
              <div className="space-y-4">
                {productDocs.map((doc) => (
                  <article
                    key={doc.href}
                    className="border border-gray-200 rounded-lg p-5 bg-gray-50"
                  >
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-2"
                    >
                      {doc.title}
                    </a>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Design</h2>
              <div className="space-y-4">
                {designDocs.map((doc) => (
                  <article
                    key={doc.href}
                    className="border border-gray-200 rounded-lg p-5 bg-gray-50"
                  >
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-2"
                    >
                      {doc.title}
                    </a>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Content</h2>
              <div className="space-y-4">
                {contentDocs.map((doc) => (
                  <article
                    key={doc.href}
                    className="border border-gray-200 rounded-lg p-5 bg-gray-50"
                  >
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-blue-700 hover:text-blue-900 underline underline-offset-2"
                    >
                      {doc.title}
                    </a>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
