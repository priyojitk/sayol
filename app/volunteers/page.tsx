import Link from "next/link";

export default function Volunteers() {
  const opportunities = [
    {
      title: "Education Support",
      description: "Help teach, tutor, or assist in educational programs for children and adults.",
      time: "2-4 hours/week",
      skills: ["Teaching", "Patience", "Communication"]
    },
    {
      title: "Healthcare Assistance",
      description: "Support medical camps, health awareness campaigns, and patient care activities.",
      time: "3-5 hours/week",
      skills: ["Healthcare", "Empathy", "Organization"]
    },
    {
      title: "Event Coordination",
      description: "Help organize and manage community events, fundraisers, and awareness programs.",
      time: "4-6 hours/week",
      skills: ["Planning", "Coordination", "Teamwork"]
    },
    {
      title: "Administrative Support",
      description: "Assist with office work, data entry, documentation, and communication tasks.",
      time: "2-3 hours/week",
      skills: ["Organization", "Computer Skills", "Attention to Detail"]
    },
    {
      title: "Community Outreach",
      description: "Engage with communities, conduct surveys, and spread awareness about our programs.",
      time: "3-4 hours/week",
      skills: ["Communication", "Cultural Sensitivity", "Networking"]
    },
    {
      title: "Digital & Social Media",
      description: "Help with social media management, content creation, and digital marketing.",
      time: "2-3 hours/week",
      skills: ["Social Media", "Content Creation", "Design"]
    }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
              Become a Volunteer
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Join our team of dedicated volunteers and make a meaningful impact in your community. Your time and skills can transform lives.
            </p>
          </div>

          <div className="mb-12 p-8 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why Volunteer with Us?</h2>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Make a real difference in people's lives
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Gain valuable experience and skills
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Connect with like-minded individuals
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Flexible time commitments
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Receive training and support
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Volunteer Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {opportunities.map((opp, index) => (
                <div key={index} className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-100/10">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {opp.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                    {opp.description}
                  </p>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {opp.time}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {opp.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-100/10">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Ready to Get Started?</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Fill out our volunteer application form and we'll get in touch with you to discuss how you can contribute.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
            >
              Apply to Volunteer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
