import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaPhone,
} from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Varun Raj</h1>
            <p className="text-xl text-gray-600 mb-2">
              Technical Product Manager + Builder
            </p>
            <p className="text-lg text-gray-500 mb-4">
              Transforming ideas into shipped, impactful products
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
            I&apos;m a builder-minded Product Manager who thrives at the
            intersection of strategy, technology, and execution. Over my career,
            I&apos;ve operated as a Super IC—owning product vision while rolling
            up my sleeves to design solutions, define architecture, and work
            alongside engineers to ship high-impact products.
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
            Core Product Principles I Live By
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Make something people want
              </h3>
              <p className="text-gray-700">
                Borrowing from Y Combinator&apos;s core ethos, build solutions
                that directly address genuine customer needs, focusing on real
                problems rather than following fleeting trends or untested
                assumptions. As Marty Cagan teaches in <em>Inspired</em>, great
                products are born from a relentless focus on understanding the
                problem, not just executing a solution.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Iterate Toward Fit
              </h3>
              <p className="text-gray-700">
                Following Dan Olsen&apos;s <em>Achieving Product-Market Fit</em>
                , I validate assumptions early, iterate quickly, and use data to
                zero in on what truly resonates with users.
              </p>
            </div>

            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Own the End-to-End Journey
              </h3>
              <p className="text-gray-700">
                I believe a PM should shepherd a product from concept through
                launch and beyond—connecting strategy, execution, and iteration
                seamlessly.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Balance Vision with Evidence
              </h3>
              <p className="text-gray-700">
                Big ideas inspire, but they must be grounded in user insights,
                market signals, and measurable outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Healthcare Domains
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  Patient Care Systems
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  Pharmacy Management
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  Supply Chain
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  Clinical Systems
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Technology Consulting
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  Digital Transformation
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  Process Optimization
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  Change Management
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                  Strategic Planning
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Business & Technology
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                  Healthcare IT
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                  Business Analysis
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                  Project Management
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                  Stakeholder Management
                </span>
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
                  Technology Consultant
                </h3>
                <span className="text-sm text-gray-500">Present</span>
              </div>
              <p className="text-blue-600 font-medium mb-2">Froedtert Health</p>
              <ul className="text-gray-700 space-y-1">
                <li>
                  • Specialized in Health Care, Pharmacy, and Supply Chain
                  technology solutions
                </li>
                <li>
                  • Implemented innovative digital transformation initiatives
                </li>
                <li>
                  • Led technology consulting projects to improve operational
                  efficiency
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-gray-300 pl-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Technology Consultant
                </h3>
                <span className="text-sm text-gray-500">
                  Previous Experience
                </span>
              </div>
              <p className="text-blue-600 font-medium mb-2">
                Various Healthcare Organizations
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>
                  • Provided technology consulting services across multiple
                  healthcare domains
                </li>
                <li>
                  • Collaborated with cross-functional teams to implement
                  technology solutions
                </li>
                <li>
                  • Developed and optimized pharmacy and supply chain management
                  systems
                </li>
              </ul>
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
                      Master of Business Administration - MBA, Technology
                      Innovation
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
                      Master&apos;s Degree, Software Engineering
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
                      Bachelor of Engineering
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

        {/* Projects Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaCode className="text-purple-600 mr-3" size={24} />
            <h2 className="text-2xl font-semibold text-gray-900">
              Current Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Healthcare Technology Solutions
              </h3>
              <p className="text-gray-700 mb-3">
                Implemented comprehensive healthcare technology solutions for
                patient care and operational efficiency.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                  Healthcare IT
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                  Digital Transformation
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                  Patient Care Systems
                </span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Pharmacy Management Systems
              </h3>
              <p className="text-gray-700 mb-3">
                Developed and optimized pharmacy management systems for improved
                medication dispensing and tracking.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                  Pharmacy IT
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                  Medication Management
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                  Compliance Systems
                </span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Supply Chain Optimization
              </h3>
              <p className="text-gray-700 mb-3">
                Led technology initiatives to optimize healthcare supply chain
                operations and inventory management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                  Supply Chain IT
                </span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                  Inventory Management
                </span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                  Process Optimization
                </span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Digital Transformation Projects
              </h3>
              <p className="text-gray-700 mb-3">
                Spearheaded digital transformation initiatives across multiple
                healthcare organizations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                  Digital Strategy
                </span>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                  Change Management
                </span>
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                  Technology Consulting
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
