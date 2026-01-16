export default function Mission() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-6">
            Our Mission & Vision
          </h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300 mb-4">
                To empower communities and transform lives through sustainable education, healthcare, and social welfare initiatives that create lasting positive change.
              </p>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                We believe that every individual deserves access to quality education, healthcare, and essential services regardless of their background or circumstances. Our mission is to bridge gaps, build capacity, and foster self-reliance in the communities we serve.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300 mb-4">
                A world where every community thrives with access to quality education, healthcare, and social support systems that enable individuals to reach their full potential.
              </p>
              <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                We envision a future where inequality is reduced, opportunities are accessible to all, and communities are empowered to drive their own development and prosperity.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Integrity</h3>
                  <p className="text-slate-600 dark:text-slate-300">We operate with transparency, honesty, and accountability in all our actions.</p>
                </div>
                <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Compassion</h3>
                  <p className="text-slate-600 dark:text-slate-300">We serve with empathy and understanding, treating everyone with dignity and respect.</p>
                </div>
                <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Excellence</h3>
                  <p className="text-slate-600 dark:text-slate-300">We strive for the highest standards in all our programs and initiatives.</p>
                </div>
                <div className="p-6 rounded-lg bg-slate-50 dark:bg-slate-800">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Sustainability</h3>
                  <p className="text-slate-600 dark:text-slate-300">We create solutions that are long-lasting and community-driven.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
