export default function Programs() {
  const programs = [
    {
      title: "Education Initiative",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: "Providing quality education and learning resources to underserved communities, ensuring every child has access to knowledge and opportunities.",
      features: ["Scholarship Programs", "School Infrastructure", "Teacher Training", "Digital Learning Resources"]
    },
    {
      title: "Healthcare Services",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: "Delivering essential healthcare services and medical support to those who need it most, improving community wellbeing and health outcomes.",
      features: ["Medical Camps", "Health Awareness", "Maternal & Child Care", "Preventive Healthcare"]
    },
    {
      title: "Social Welfare",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "Supporting vulnerable populations with food, shelter, and essential services to build stronger, more resilient communities.",
      features: ["Food Distribution", "Shelter Support", "Skill Development", "Emergency Relief"]
    },
    {
      title: "Women Empowerment",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      description: "Empowering women through education, skill development, and economic opportunities to achieve independence and leadership.",
      features: ["Vocational Training", "Microfinance Support", "Leadership Programs", "Legal Aid"]
    },
    {
      title: "Youth Development",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      description: "Nurturing the next generation through mentorship, career guidance, and opportunities for personal and professional growth.",
      features: ["Mentorship Programs", "Career Counseling", "Sports & Arts", "Scholarship Support"]
    },
    {
      title: "Environmental Conservation",
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "Promoting environmental awareness and sustainable practices to protect our planet for future generations.",
      features: ["Tree Plantation", "Waste Management", "Awareness Campaigns", "Green Initiatives"]
    }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
            Our Programs
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We focus on key areas that create sustainable change in communities. Each program is designed to address specific needs while building long-term capacity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="rounded-xl bg-white dark:bg-slate-800 p-8 shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-100/10 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {program.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {program.description}
              </p>
              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
                    <svg className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
