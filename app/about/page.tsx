export default function About() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-6">
            About SAYOL Foundation
          </h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-12">
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300 mb-6">
                SAYOL Foundation is a registered nonprofit organization dedicated to creating positive change in communities through education, healthcare, and social welfare initiatives. For over 25 years, we have been working tirelessly to empower individuals and transform lives.
              </p>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                Our organization was founded with a simple yet powerful belief: that every person deserves access to opportunities that enable them to thrive. We work in partnership with communities, volunteers, and supporters to create sustainable solutions that address the root causes of inequality and poverty.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Our Story</h2>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300 mb-4">
                What started as a small community initiative has grown into a movement that has impacted over 10,000 lives. Our journey began when a group of passionate individuals came together to address the pressing needs in underserved communities.
              </p>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                Today, we operate multiple programs across education, healthcare, and social welfare, supported by a network of over 500 dedicated volunteers and countless generous donors who share our vision of a more equitable world.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10K+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Lives Impacted</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-green-50 dark:bg-green-900/20">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Active Volunteers</div>
                </div>
                <div className="text-center p-6 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Active Programs</div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Our Approach</h2>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300 mb-4">
                We believe in a holistic, community-centered approach to development. Our programs are designed to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-slate-600 dark:text-slate-300 ml-4">
                <li>Address immediate needs while building long-term capacity</li>
                <li>Engage communities as partners, not just beneficiaries</li>
                <li>Create sustainable solutions that continue beyond our direct involvement</li>
                <li>Measure and learn from our impact to continuously improve</li>
                <li>Collaborate with other organizations and stakeholders</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
