export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-300 text-white py-2 px-4 text-center">
        <h1 className="ttext-3xl md:text-4xl lg:text-5xl font-bold text-900 mb-2">Midwest Flow - AI Solutions</h1>	
      </header>
      <section className="px-4 py-8 md:py-12 lg:py-16 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
          No fuss Technology Solutions for Growing Businesses
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Transforming small and medium businesses with practical automation and modern technology solutions.
        </p>
		    <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>Fewer missed calls</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>Faster quotes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>Better reviews</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>Improved labor usage</span>
              </li>
              <li className="flex items-start mt-4">
                <span className="text-blue-600 mr-3 font-bold text-xl">•</span>
                <span className="text-xl md:text-2xl font-bold text-gray-900">More Customers</span>
              </li>
            </ul>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold active:bg-blue-700 transition-colors mt-6"
        >
          Book a FREE Consultation 
        </a>
      </section>

      <section className="px-4 py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <div className="mb-3">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI-Assisted Websites
              </h3>
              <p className="text-gray-600">
                Custom websites powered by AI to enhance user experience and streamline operations.
              </p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <div className="mb-3">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Business Automation
              </h3>
              <p className="text-gray-600">
                Automate repetitive tasks to save time and reduce errors in your daily operations.
              </p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <div className="mb-3">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Process Optimization
              </h3>
              <p className="text-gray-600">
                Analyze and improve workflows to increase efficiency and productivity.
              </p>
            </div>
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
              <div className="mb-3">
                <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Practical Tech Solutions
              </h3>
              <p className="text-gray-600">
                Affordable technology solutions designed specifically for small business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Who I Help
          </h2>
          <div className="bg-white p-5 md:p-6 rounded-lg border border-gray-200">
            <p className="text-gray-700 mb-3 font-medium">
              I specialize in helping Midwest businesses leverage technology to grow and compete.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>Auto & motorcycle garages</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>Construction & HVAC contractors</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>Local retail & bakeries</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 font-bold">•</span>
                <span>Solo operators and SMBs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Sample Work
          </h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-5 md:p-6 rounded-lg border border-gray-200">
              <div className="mb-2">
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                  DEMO PROJECT
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-3">
                Automated Appointment System
              </h3>
              <div className="space-y-2 text-gray-700">
                <div>
                  <span className="font-semibold text-gray-900">Problem:</span>{" "}
                  Local garage struggled with phone-based scheduling, leading to missed appointments and customer frustration.
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Solution:</span>{" "}
                  Built an online booking system with automated reminders and calendar integration.
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Outcome:</span>{" "}
                  Reduced no-shows by 40% and freed up staff time for customer service.
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 md:p-6 rounded-lg border border-gray-200">
              <div className="mb-2">
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                  DEMO PROJECT
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-3">
                Inventory Management Dashboard
              </h3>
              <div className="space-y-2 text-gray-700">
                <div>
                  <span className="font-semibold text-gray-900">Problem:</span>{" "}
                  Retail store tracked inventory manually, causing stockouts and over-ordering.
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Solution:</span>{" "}
                  Created a real-time inventory dashboard with automated low-stock alerts.
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Outcome:</span>{" "}
                  Improved inventory accuracy by 85% and reduced carrying costs by 20%.
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 md:p-6 rounded-lg border border-gray-200">
              <div className="mb-2">
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                  DEMO PROJECT
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-3">
                Customer Communication Platform
              </h3>
              <div className="space-y-2 text-gray-700">
                <div>
                  <span className="font-semibold text-gray-900">Problem:</span>{" "}
                  HVAC contractor needed better way to communicate service updates and invoices to customers.
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Solution:</span>{" "}
                  Developed a customer portal with automated service updates and digital invoicing.
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Outcome:</span>{" "}
                  Increased customer satisfaction scores and reduced payment processing time by 50%.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-8 md:py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Contact
          </h2>
          <div className="bg-white p-5 md:p-6 rounded-lg border border-gray-200 text-center">
            <p className="text-gray-700 mb-4">
              Ready to transform your business with technology? Let's discuss how I can help.
            </p>
            <div className="space-y-3">
              <div>
                <a
                  href="mailto:contact@example.com"
                  className="text-blue-600 font-semibold hover:text-blue-700 active:text-blue-800 transition-colors"
                >
                  contact@example.com
                </a>
              </div>
              <div>
                <a
                  href="https://linkedin.com/in/example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:text-blue-700 active:text-blue-800 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
