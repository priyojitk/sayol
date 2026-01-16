export default function Events() {
  const events = [
    {
      title: "Annual Health Camp",
      date: "March 15, 2024",
      location: "Community Center, Downtown",
      description: "Free health checkups, vaccinations, and medical consultations for all community members.",
      type: "Healthcare"
    },
    {
      title: "Education Fair 2024",
      date: "April 20, 2024",
      location: "City Park",
      description: "Scholarship opportunities, career counseling, and educational resource distribution.",
      type: "Education"
    },
    {
      title: "Community Cleanup Drive",
      date: "May 5, 2024",
      location: "Various Locations",
      description: "Join us for a day of environmental conservation and community beautification.",
      type: "Environment"
    },
    {
      title: "Women's Empowerment Workshop",
      date: "June 10, 2024",
      location: "Community Hall",
      description: "Skill development, financial literacy, and leadership training for women.",
      type: "Empowerment"
    },
    {
      title: "Youth Sports Tournament",
      date: "July 15, 2024",
      location: "Sports Complex",
      description: "Annual sports competition promoting physical fitness and teamwork among youth.",
      type: "Youth"
    },
    {
      title: "Fundraising Gala",
      date: "August 25, 2024",
      location: "Grand Hotel",
      description: "An evening of celebration and fundraising to support our ongoing programs.",
      type: "Fundraising"
    }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
            Upcoming Events
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Join us for our upcoming events and activities. Your participation helps us create greater impact in the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-100/10 transition-shadow hover:shadow-md">
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  {event.type}
                </span>
                <div className="text-right">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {event.date.split(',')[0]}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {event.date.split(',')[1]}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                {event.description}
              </p>
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {event.location}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Want to stay updated on our events?
          </p>
          <a
            href="/contact"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
