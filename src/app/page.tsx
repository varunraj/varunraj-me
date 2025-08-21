"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaPhone,
  FaHeart,
  FaRocket,
  FaRoute,
  FaBalanceScale,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [expandedCards, setExpandedCards] = useState<number[]>([0]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
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
              Full-Stack Product Manager
            </p>
            <p className="text-lg text-gray-500 mb-4">
              Bridging AI fluency, technical depth, and product leadership
            </p>
            <div className="flex justify-center space-x-6 text-gray-500">
              <a
                href="mailto:varunraj82@gmail.com"
                className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
              >
                <FaEnvelope />
                <span>varunraj82@gmail.com</span>
              </a>
              <a
                href="tel:+19194506245"
                className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
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
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/varunraj537"
                className="text-gray-500 hover:text-blue-600 transition-colors"
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
            I&apos;m a Full-Stack Product Manager who thrives at the
            intersection of strategy, technology, and execution. I own product
            vision end-to-end—from discovery and roadmap definition to
            architecture, design, and hands-on collaboration with engineering.
            With a builder&apos;s mindset, I bridge business needs and technical
            depth to ship high-impact, scalable products.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            I specialize in AI, data, and platform products, leading initiatives
            from first idea → shipped product while keeping user needs and
            market signals at the core. My approach blends deep technical
            fluency with a disciplined product mindset—turning big ideas into
            scalable, impactful solutions.
          </p>
        </section>

        {/* Core Product Principles Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Guiding Product Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-red-50">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <FaHeart className="text-red-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Make something people want
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Borrowing from Y Combinator&apos;s core ethos, build
                    solutions that directly address genuine customer needs,
                    focusing on real problems rather than following fleeting
                    trends or untested assumptions.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-blue-50">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <FaRocket className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Iterate Toward Fit
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Following Dan Olsen&apos;s{" "}
                    <em>Achieving Product-Market Fit</em>, I validate
                    assumptions early, iterate quickly, and use data to zero in
                    on what truly resonates with users.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-green-50">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <FaRoute className="text-green-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Own the End-to-End Journey
                  </h3>
                  <p className="text-gray-700 text-sm">
                    I believe a PM should shepherd a product from concept
                    through launch and beyond—connecting strategy, execution,
                    and iteration seamlessly.
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
                    Balance Vision with Evidence
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Big ideas inspire, but they must be grounded in user
                    insights, market signals, and measurable outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      <FaSearch className="text-blue-500 text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Precedent AI – Legal Research Assistant (Personal
                        Project)
                      </h3>
                      <p className="text-gray-700">
                        A personal AI project to explore retrieval-augmented
                        generation (RAG) for legal research.
                      </p>
                    </div>
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
                  <div className="pt-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        My Role & Contribution:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>
                          • Defined product vision, success metrics, and user
                          flows
                        </li>
                        <li>
                          • Designed backend using AWS Bedrock (LLM inference)
                          and DynamoDB
                        </li>
                        <li>• Built Next.js frontend deployed on Vercel</li>
                        <li>
                          • Authored evaluation framework for accuracy and
                          citations
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Outcome:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>
                          • Delivered working prototype demonstrating AI legal
                          queries with verifiable citations
                        </li>
                        <li>
                          • Achieved 85% accuracy rate on legal precedent
                          retrieval
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="#"
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-colors"
                      >
                        Live Demo
                      </a>
                      <a
                        href="#"
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200 transition-colors"
                      >
                        GitHub Repo
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Work Product 2 */}
            <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-green-50">
              <div className="p-6 cursor-pointer" onClick={() => toggleCard(1)}>
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      <FaShieldAlt className="text-green-500 text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Okta Identity Engine Migration PRD (Work Product)
                      </h3>
                      <p className="text-gray-700">
                        Product requirements document outlining strategy and
                        execution for migrating patient accounts from Okta
                        Classic to Okta Identity Engine.
                      </p>
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
                        My Role & Contribution:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>
                          • Led cross-functional stakeholder alignment and
                          requirements gathering
                        </li>
                        <li>
                          • Designed migration strategy with minimal user
                          disruption
                        </li>
                        <li>
                          • Created comprehensive risk assessment and mitigation
                          plan
                        </li>
                        <li>
                          • Developed testing framework for identity validation
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Outcome:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>
                          • Published technical PRD used for internal
                          stakeholder alignment
                        </li>
                        <li>
                          • Reduced identity migration risk by introducing
                          preview environment strategy
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="#"
                        className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full hover:bg-green-200 transition-colors"
                      >
                        PDF Document
                      </a>
                      <a
                        href="#"
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200 transition-colors"
                      >
                        Case Study
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Work Product 3 */}
            <div className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-purple-50">
              <div className="p-6 cursor-pointer" onClick={() => toggleCard(2)}>
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      <FaChartLine className="text-purple-500 text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Healthcare Supply Chain Analytics Dashboard (Work
                        Product)
                      </h3>
                      <p className="text-gray-700">
                        Real-time analytics platform for monitoring and
                        optimizing healthcare supply chain operations across
                        multiple facilities.
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {expandedCards.includes(2) ? (
                      <FaChevronUp className="text-gray-500" />
                    ) : (
                      <FaChevronDown className="text-gray-500" />
                    )}
                  </div>
                </div>
              </div>

              {expandedCards.includes(2) && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        My Role & Contribution:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>
                          • Conducted user research with supply chain managers
                          and procurement teams
                        </li>
                        <li>
                          • Designed data architecture for real-time inventory
                          tracking
                        </li>
                        <li>
                          • Built interactive dashboard using React and D3.js
                        </li>
                        <li>
                          • Implemented automated alerting system for low stock
                          scenarios
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Outcome:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>
                          • Reduced stockout incidents by 40% across 15
                          facilities
                        </li>
                        <li>
                          • Deployed to production serving 500+ daily active
                          users
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="#"
                        className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full hover:bg-purple-200 transition-colors"
                      >
                        Live Demo
                      </a>
                      <a
                        href="#"
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full hover:bg-gray-200 transition-colors"
                      >
                        Case Study
                      </a>
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
                <div className="flex-shrink-0 mt-1">
                  <FaBriefcase className="text-purple-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Core PM
                  </h3>
                  <p className="text-gray-700">
                    Product Discovery & Strategy, Roadmapping, PRD Authoring &
                    Specs, Agile/Scrum Execution, Stakeholder Alignment &
                    Communication, Metrics/KPI Definition, Data-Informed
                    Decision-Making, Go-to-Market Planning
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <FaCode className="text-green-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Technical
                  </h3>
                  <p className="text-gray-700">
                    AWS Serverless (Lambda, Step Functions, EventBridge,
                    DynamoDB, S3, API Gateway, AppSync, SNS/SQS, Bedrock,
                    Cognito), Identity & Access Management, Next.js (Vercel),
                    REST
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <FaRocket className="text-blue-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    AI Product
                  </h3>
                  <p className="text-gray-700">
                    LLM Application Design, Prompt Engineering, RAG Pipelines,
                    Model Evaluation Frameworks, Responsible AI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaBriefcase className="text-blue-600 mr-3" size={24} />
            <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
          </div>

          <div className="space-y-8">
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
                  • Lead digital health product initiatives, driving adoption of
                  modern identity, access, and verification solutions
                </li>
                <li>
                  • Partner with engineering and clinical stakeholders to define
                  product strategy, roadmaps, and requirements for
                  patient-facing platforms
                </li>
                <li>
                  • Manage delivery of cloud-native applications (TypeScript,
                  Identity, AWS) ensuring scalability, compliance, and seamless
                  user experience
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
        </section>

        {/* Certifications Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Certifications
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-900 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-serif text-xs font-medium">
                      Duke
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    AI Product Management
                  </h3>
                </div>
                <span className="text-sm font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                  In Progress, 2025
                </span>
              </div>
              <p className="text-blue-900 font-medium mb-2">
                Duke University / Coursera
              </p>
              <p className="text-gray-700">
                Advanced certification program focused on AI product management,
                covering LLM applications, responsible AI practices, and product
                strategy for AI-powered solutions.
              </p>
              <div className="mt-3">
                <a
                  href="https://www.coursera.org/specializations/ai-product-management-duke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>View Course Details</span>
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
        </section>

        {/* Education Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaGraduationCap className="text-green-600 mr-3" size={24} />
            <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
          </div>

          <div className="space-y-8">
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
                      MBA, Technology Innovation
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
        </section>
      </main>
    </div>
  );
}
