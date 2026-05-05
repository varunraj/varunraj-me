"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaPhone,
  FaHeart,
  FaPuzzlePiece,
  FaTools,
  FaBalanceScale,
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaFilePdf,
  FaProjectDiagram,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

export default function Home() {
  const [expandedCards, setExpandedCards] = useState<number[]>([0]);
  const [expandedResumeSections, setExpandedResumeSections] = useState<
    string[]
  >([]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleResumeSection = (section: string) => {
    setExpandedResumeSections((prev) =>
      prev.includes(section)
        ? prev.filter((item) => item !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Varun Raj</h1>
            <p className="text-xl text-gray-600 mb-2">
              Technical Product Manager, AI Product Builder
            </p>
            <div className="flex justify-center space-x-6 text-gray-500">
              <a
                href="mailto:varunraj82@gmail.com"
                className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
                <span>varunraj82@gmail.com</span>
              </a>
              <a
                href="tel:+19194506245"
                className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhone />
                <span>(919) 450-6245</span>
              </a>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>Raleigh, North Carolina</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://github.com/varunraj"
                className="text-gray-500 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/varunraj537"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* About Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            I&apos;m a{" "}
            <strong className="text-gray-900">
              Technical Product Manager and AI Builder
            </strong>{" "}
            with deep technical expertise in cloud-native systems, AI-native products,
            and full-stack product development.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            I&apos;ve led patient-facing digital health products, identity platform
            transformations, and 0 → 1 AI product development across mobile, web,
            and cloud infrastructure. My experience spans product strategy, user
            research, roadmap ownership, AI system design, full-stack development,
            and production delivery.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            I&apos;m a builder at heart: I translate real-world problems into shipped
            products, then improve them through usage data, experimentation,
            customer feedback, and rapid iteration. My work sits at the
            intersection of product thinking, technical execution, and AI.
          </p>
        </section>

        {/* Work Products Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Work Products
          </h2>

          <div className="space-y-4">
            {/* Work Product 1 */}
            <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-blue-50">
              <div className="p-6 cursor-pointer" onClick={() => toggleCard(0)}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Coach Kai – AI-Powered Personal Health & Nutrition Coach
                      (AI Product Builder | Founder Project)
                    </h3>
                    <p className="text-gray-700">
                      A voice-first AI coaching system that transforms daily food
                      and activity logs into personalized, behavior-driven
                      guidance.
                    </p>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {expandedCards.includes(0) ? (
                      <FaChevronUp className="text-gray-500" />
                    ) : (
                      <FaChevronDown className="text-gray-500" />
                    )}
                  </div>
                </div>
              </div>

              {expandedCards.includes(0) && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-2 space-y-4">
                    <div>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>
                          • Identified a real user problem around inconsistent
                          logging and lack of actionable feedback in traditional
                          calorie trackers, and defined a differentiated
                          &quot;AI coach, not tracker&quot; product direction
                        </li>
                        <li>
                          • Took product from 0 → 1: concept, positioning, UX
                          design, full-stack development, deployment, and early
                          user testing
                        </li>
                        <li>
                          • Designed an agent-like system that interprets user
                          inputs (voice/text), maintains context over time, and
                          delivers adaptive coaching insights
                        </li>
                      </ul>
                      <div className="flex flex-wrap items-center gap-2 mt-3 ml-4">
                        <a
                          href="http://coachkai.life/"
                          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-blue-900 bg-white/90 border border-blue-200 shadow-sm hover:bg-blue-50 hover:border-blue-300 hover:shadow-md transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt
                            className="text-base text-blue-700 shrink-0"
                            aria-hidden
                          />
                          <span>Product Demo</span>
                        </a>
                        <Link
                          href="/coach-kai/product-docs"
                          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-blue-900 bg-white/90 border border-blue-200 shadow-sm hover:bg-blue-50 hover:border-blue-300 hover:shadow-md transition-all"
                        >
                          <FaExternalLinkAlt
                            className="text-base text-blue-700 shrink-0"
                            aria-hidden
                          />
                          <span>Product Docs</span>
                        </Link>
                        <a
                          href="https://apps.apple.com/us/app/coach-kai/id6759616598"
                          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-blue-900 bg-white/90 border border-blue-200 shadow-sm hover:bg-blue-50 hover:border-blue-300 hover:shadow-md transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiAppstore
                            className="text-[1.35rem] text-gray-900 shrink-0"
                            aria-hidden
                          />
                          <span>App Store</span>
                        </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.coachkai.app&hl=en-US&ah=Txs8zCRf4kUikQDQAKYSG-cwuNw"
                          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-emerald-900 bg-white/90 border border-emerald-200 shadow-sm hover:bg-emerald-50 hover:border-emerald-300 hover:shadow-md transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiGoogleplay
                            className="text-[1.35rem] shrink-0"
                            aria-hidden
                          />
                          <span>Google Play</span>
                        </a>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 mt-4">
                        Technical Implementation:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>
                          • Built end-to-end system using React Native (Expo),
                          AWS serverless (Lambda, DynamoDB, S3), and LLM-powered
                          pipelines for structured nutrition analysis
                        </li>
                        <li>
                          • Developed a structured insight engine (daily + weekly
                          signals) combining deterministic logic with LLM
                          summarization for consistent coaching outputs
                        </li>
                        <li>
                          • Implemented analytics (PostHog) and feedback loops to
                          track user behavior, retention, and feature
                          effectiveness
                        </li>
                      </ul>
                      <div className="flex flex-wrap items-center gap-2 mt-3 ml-4">
                        <Link
                          href="/coach-kai/technical-docs"
                          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-blue-900 bg-white/90 border border-blue-200 shadow-sm hover:bg-blue-50 hover:border-blue-300 hover:shadow-md transition-all"
                        >
                          <FaExternalLinkAlt
                            className="text-base text-blue-700 shrink-0"
                            aria-hidden
                          />
                          <span>Technical Docs</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 mt-4">
                        Iteration &amp; Growth:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>
                          • Ran continuous build–measure–learn cycles: usability
                          testing, prompt tuning, flow optimization, and
                          onboarding refinement
                        </li>
                        <li>
                          • Experimented with messaging, positioning, and early
                          growth strategies (landing pages, user outreach,
                          feedback interviews)
                        </li>
                        <li>
                          • Balanced product decisions across UX, technical
                          feasibility, and business model (free vs premium,
                          engagement loops, habit formation)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 mt-4">
                        Outcome:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>
                          • Shipped a production-ready AI-powered mobile app with
                          real users, demonstrating end-to-end ownership across
                          product, engineering, and early-stage growth
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Work Product 2 */}
            <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-green-50">
              <div className="p-6 cursor-pointer" onClick={() => toggleCard(1)}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Clear Identity Verification for New Accounts (AI Product
                      Builder | Identity Migration Initiative)
                    </h3>
                    <p className="text-gray-700">
                      Led the end-to-end design and implementation of a modern
                      identity verification system, transitioning from a
                      traditional identity provider model to a streamlined,
                      &ldquo;clear identity&rdquo; experience with minimal user
                      friction.
                    </p>
                    <div
                      className="flex flex-wrap items-center gap-2 mt-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href="/a2ecdb7a-437a-4715-a221-251007ea4fcc_Clear_Identity_Verification_for_new_accounts.pdf"
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-green-900 bg-white/90 border border-green-300 shadow-sm hover:bg-green-100/80 hover:border-green-400 hover:shadow-md transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFilePdf
                          className="text-[1.35rem] text-red-600 shrink-0"
                          aria-hidden
                        />
                        <span>PRD</span>
                      </a>
                      <a
                        href="https://mermaid.ai/view/f1b01c96-aeae-4c24-9ba1-9725e86fc21e"
                        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium text-teal-900 bg-white/90 border border-teal-300 shadow-sm hover:bg-teal-50 hover:border-teal-400 hover:shadow-md transition-all"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaProjectDiagram
                          className="text-base text-teal-700 shrink-0"
                          aria-hidden
                        />
                        <span>System Design</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {expandedCards.includes(1) ? (
                      <FaChevronUp className="text-gray-500" />
                    ) : (
                      <FaChevronDown className="text-gray-500" />
                    )}
                  </div>
                </div>
              </div>

              {expandedCards.includes(1) && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Product &amp; Build Approach:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>
                          • Translated a high-level business objective (modernize
                          identity verification) into a concrete, end-to-end
                          product strategy and execution plan
                        </li>
                        <li>
                          • Took ownership from 0 → production: authored PRD,
                          designed flows, configured vendor solution (Clear), and
                          implemented the full verification experience
                        </li>
                        <li>
                          • Operated in an AI-native, builder-led
                          model—personally driving solution design, prototyping,
                          and implementation while aligning with design,
                          engineering, and security stakeholders
                        </li>
                        <li>
                          • Collaborated directly with vendor to integrate
                          identity verification workflows into existing
                          authentication systems (Okta)
                        </li>
                        <li>
                          • Designed and validated complete user journeys,
                          including account creation, identity verification, and
                          fallback/error handling scenarios
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Execution &amp; Iteration:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>
                          • Replaced traditional handoff model with a
                          build-and-align approach: rapidly iterated on flows,
                          gathered stakeholder feedback, and refined in real time
                        </li>
                        <li>
                          • Developed validation and testing framework to ensure
                          identity accuracy, reliability, and edge case coverage
                        </li>
                        <li>
                          • Created risk assessment and mitigation strategy,
                          including staged rollout and preview environment testing
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Outcome:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>
                          • Successfully delivered a production-ready identity
                          verification system with reduced user friction and
                          improved onboarding experience
                        </li>
                        <li>
                          • Demonstrated a new execution model within the
                          organization, showing how AI-enabled, end-to-end
                          ownership can accelerate delivery while maintaining
                          stakeholder alignment
                        </li>
                        <li>
                          • PRD and implementation approach adopted as a reference
                          for similar initiatives
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skills</h2>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <div className="flex items-start gap-4">
                <span className="text-2xl shrink-0 leading-none mt-0.5" aria-hidden>
                  🧠
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    AI Product &amp; Strategy
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>LLM Applications:</strong> Generative AI, LLM
                    Applications, Prompt Engineering, Prompt Optimization,
                    Structured Outputs, Conversational AI
                    <br />
                    <strong>Retrieval &amp; Intelligence Systems:</strong> RAG
                    Pipelines, Embeddings, Vector Search, Personalization
                    Systems, Recommendation Systems, Knowledge Retrieval
                    <br />
                    <strong>Evaluation &amp; Experimentation:</strong> LLM
                    Evaluation, AI Experimentation, A/B Testing, Feedback Loops,
                    Hallucination Mitigation, Quality Measurement
                    <br />
                    <strong>Production AI Systems:</strong> Agentic Workflows,
                    Function Calling, Tool Use, AI Observability, Cost
                    Optimization, Latency Optimization
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <div className="flex items-start gap-4">
                <span className="text-2xl shrink-0 leading-none mt-0.5" aria-hidden>
                  ⚙️
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Technical
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Cloud &amp; Architecture:</strong> AWS, Serverless
                    Architecture, Microservices, Distributed Systems, System
                    Design, Backend Architecture
                    <br />
                    <strong>Development:</strong> React Native, Next.js, React,
                    Node.js, TypeScript, JavaScript, Python
                    <br />
                    <strong>APIs &amp; Data:</strong> REST APIs, GraphQL, SQL,
                    NoSQL, DynamoDB, Data Modeling
                    <br />
                    <strong>DevOps &amp; Delivery:</strong> CI/CD Pipelines,
                    Git/GitHub, DevOps Fundamentals, Performance Optimization,
                    Third-Party Integrations
                    <br />
                    <strong>Analytics &amp; Operations:</strong> PostHog,
                    Firebase, Analytics Instrumentation, Observability,
                    Monitoring
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <div className="flex items-start gap-4">
                <span className="text-2xl shrink-0 leading-none mt-0.5" aria-hidden>
                  📊
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Product
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Strategy &amp; Execution:</strong> Product Strategy,
                    Roadmapping, 0→1 Development, PMF, GTM
                    <br />
                    <strong>Growth:</strong> User Discovery, Activation,
                    Retention, Pricing, Subscriptions
                    <br />
                    <strong>Analytics:</strong> KPIs, Product Analytics, A/B
                    Testing, Funnel Optimization
                    <br />
                    <strong>Leadership:</strong> Stakeholder Management,
                    Cross-functional Leadership, PRDs, Agile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Principles Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Product Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-red-50">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <FaHeart className="text-red-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Build What Actually Matters
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    I focus on real user problems, not ideas that sound good in theory. Every product starts with understanding behavior, needs, and friction—then building solutions people genuinely use.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-blue-50">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <FaPuzzlePiece className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Iterate to Real-World Fit
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    I ship fast, learn from real usage, and refine continuously. Product–market fit isn&apos;t guessed—it&apos;s discovered through cycles of building, measuring, and improving.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-green-50">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <FaTools className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Bridge Strategy and Execution
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    I connect product strategy with hands-on technical execution,
                    working across UX, AI systems, backend, frontend, and cloud
                    infrastructure. I can prototype when needed, make informed
                    tradeoffs, and partner closely with engineers to move products
                    from idea to production.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-purple-50">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <FaBalanceScale className="text-purple-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Balance Intuition with Data
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Strong product instincts matter, but decisions are grounded in user behavior, system signals, and measurable outcomes—not opinions alone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <button
            type="button"
            className="flex w-full items-start justify-between text-left"
            onClick={() => toggleResumeSection("experience")}
            aria-expanded={expandedResumeSections.includes("experience")}
          >
            <div>
              <div className="flex items-center">
                <FaBriefcase className="text-blue-600 mr-3" size={24} />
                <h2 className="text-2xl font-semibold text-gray-900">
                  Experience
                </h2>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Digital health product leadership, AI product building, identity
                platforms, and enterprise modernization
              </p>
            </div>
            <div className="flex-shrink-0 ml-4 mt-1">
              {expandedResumeSections.includes("experience") ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
          </button>

          {expandedResumeSections.includes("experience") && (
          <div className="space-y-8 mt-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Engineering Product Manager
                </h3>
                <span className="text-sm text-gray-500">
                  Jun 2021 – Present
                </span>
              </div>
              <p className="text-blue-600 font-medium mb-2">
                Froedtert Health · Remote
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>
                  • Joined as Product Lead for the F&amp;MCW Mobile App, owning
                  roadmap and delivery for the patient-facing mobile experience
                  serving 100K+ active patients; led improvements in performance,
                  usability, and app store sentiment
                </li>
                <li>
                  • Advanced into Domain Product Lead for Identity Management,
                  directing large-scale platform transformations including Okta
                  authentication rollout, migration of 100K+ patient accounts, and
                  identity verification enhancements with CLEAR
                </li>
                <li>
                  • Partner with engineering, clinical, security, and compliance
                  stakeholders to define product strategy, roadmaps, and
                  requirements while balancing security, compliance, and user
                  experience
                </li>
                <li>
                  • Manage delivery of cloud-native identity and patient-facing
                  applications (TypeScript, Identity, AWS), ensuring scalability,
                  reliability, and seamless digital health experiences
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-sky-600 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Founder / AI Product Builder
                </h3>
                <span className="text-sm text-gray-500">2025 – 2026</span>
              </div>
              <p className="text-sky-600 font-medium mb-2">
                Coach Kai – AI Nutrition App
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>
                  • Built and launched an AI-powered nutrition coaching mobile app
                  from 0 → 1, owning product strategy, UX, engineering, and
                  go-to-market; shipped to iOS and Android within 4 months
                </li>
                <li>
                  • Built an LLM-native coaching system using prompt engineering
                  and structured outputs to deliver personalized meal insights and
                  adaptive guidance
                </li>
                <li>
                  • Used product analytics, experimentation, and user feedback to
                  improve onboarding, engagement, retention, and subscription
                  conversion
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Advisor / Senior Principal Consultant / Principal Consultant
                </h3>
                <span className="text-sm text-gray-500">
                  Jan 2013 – Jun 2021
                </span>
              </div>
              <p className="text-green-600 font-medium mb-2">
                NTT DATA Services · Raleigh, NC & Toronto, Canada
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>
                  • Delivered large-scale cloud and web application solutions
                  for healthcare and enterprise clients, leveraging AWS,
                  Node.js, and modern development frameworks
                </li>
                <li>
                  • Guided cross-functional teams through cloud migration,
                  modernization, and digital transformation projects
                </li>
                <li>
                  • Provided technical leadership and architectural guidance
                  across multiple client engagements
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Consultant – Healthcare Consulting
                </h3>
                <span className="text-sm text-gray-500">
                  May 2010 – Dec 2012
                </span>
              </div>
              <p className="text-purple-600 font-medium mb-2">
                Cognizant Technology Solutions · Minneapolis, MN
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>
                  • Designed and delivered healthcare applications integrating
                  payer and provider workflows
                </li>
                <li>
                  • Built scalable SQL and Python-based solutions to improve
                  claims processing and analytics
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-600 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Associate / Programmer Analyst
                </h3>
                <span className="text-sm text-gray-500">
                  Mar 2004 – Jun 2008
                </span>
              </div>
              <p className="text-orange-600 font-medium mb-2">
                Cognizant Technology Solutions · Chennai, India
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>
                  • Developed and maintained full-stack applications for
                  healthcare insurance clients
                </li>
                <li>
                  • Delivered functional and technical enhancements to core
                  claims management systems
                </li>
              </ul>
            </div>
          </div>
          )}
        </section>

        {/* Education Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <button
            type="button"
            className="flex w-full items-start justify-between text-left"
            onClick={() => toggleResumeSection("education")}
            aria-expanded={expandedResumeSections.includes("education")}
          >
            <div>
              <div className="flex items-center">
                <FaGraduationCap className="text-green-600 mr-3" size={24} />
                <h2 className="text-2xl font-semibold text-gray-900">
                  Education
                </h2>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Technology innovation, software engineering, electronics, and
                agentic AI training
              </p>
            </div>
            <div className="flex-shrink-0 ml-4 mt-1">
              {expandedResumeSections.includes("education") ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
          </button>

          {expandedResumeSections.includes("education") && (
          <div className="space-y-8 mt-6">
            <div className="border-l-4 border-teal-600 pl-6">
              <div className="flex items-start gap-4 mb-2">
                <Image
                  src="/dl.png"
                  alt="DeepLearning.AI"
                  width={48}
                  height={48}
                  className="rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Agentic AI Certificate
                    </h3>
                  </div>
                  <p className="text-teal-700 font-medium mb-2">
                    DeepLearning.AI
                  </p>
                  <p className="text-gray-700">
                    Hands-on program led by Andrew Ng on building agentic AI systems
                    that orchestrate tools, automate workflows, and deliver measurable
                    business outcomes.
                  </p>
                  <div className="mt-3">
                    <a
                      href="https://learn.deeplearning.ai/courses/agentic-ai/information"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors"
                    >
                      <span>View Program</span>
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-12 h-12 bg-black rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-400 font-bold text-xs">
                    IOWA
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Masters, Technology Innovation
                    </h3>
                  </div>
                  <p className="text-green-600 font-medium mb-2">
                    The University of Iowa Tippie College of Business
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-start gap-4 mb-2">
                <Image
                  src="/bits.png"
                  alt="BITS Pilani"
                  width={48}
                  height={48}
                  className="rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      MS, Software Engineering
                    </h3>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">
                    Birla Institute of Technology and Science, Pilani
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <div className="flex items-start gap-4 mb-2">
                <Image
                  src="/cusat.png"
                  alt="Cochin University of Science and Technology"
                  width={48}
                  height={48}
                  className="rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      BE, Electronics Engineering
                    </h3>
                  </div>
                  <p className="text-purple-600 font-medium mb-2">
                    Cochin University of Science and Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
          )}
        </section>
      </main>
    </div>
  );
}
