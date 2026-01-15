import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.05] bg-[size:20px_20px]"></div>
        <div className="relative container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl">
              Empowering Communities,
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Transforming Lives
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Join us in creating positive change through education, healthcare, and social welfare initiatives that make a lasting impact.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/donate"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Make a Difference
              </Link>
              <Link
                href="/programs"
                className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-slate-950 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">10K+</div>
              <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400">500+</div>
              <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">50+</div>
              <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">Programs Running</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400">25+</div>
              <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-slate-50 dark:bg-slate-900 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Our Programs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              We focus on key areas that create sustainable change in communities.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white dark:bg-slate-800 p-8 shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-100/10 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">Education</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Providing quality education and learning resources to underserved communities, ensuring every child has access to knowledge.
              </p>
            </div>
            <div className="rounded-xl bg-white dark:bg-slate-800 p-8 shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-100/10 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">Healthcare</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Delivering essential healthcare services and medical support to those who need it most, improving community wellbeing.
              </p>
            </div>
            <div className="rounded-xl bg-white dark:bg-slate-800 p-8 shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-100/10 transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">Social Welfare</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Supporting vulnerable populations with food, shelter, and essential services to build stronger, more resilient communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Make a Difference?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Join our mission to create lasting positive change. Every contribution, big or small, helps transform lives.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/donate"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Donate Now
              </Link>
              <Link
                href="/volunteers"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                Become a Volunteer <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
