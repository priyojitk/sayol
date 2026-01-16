export default function Gallery() {
  const images = [
    { id: 1, category: "Education", description: "Students learning in our education program" },
    { id: 2, category: "Healthcare", description: "Health camp providing free checkups" },
    { id: 3, category: "Community", description: "Community members at an event" },
    { id: 4, category: "Volunteers", description: "Our dedicated volunteer team" },
    { id: 5, category: "Events", description: "Annual fundraising gala" },
    { id: 6, category: "Education", description: "Scholarship distribution ceremony" },
    { id: 7, category: "Healthcare", description: "Medical camp in rural area" },
    { id: 8, category: "Community", description: "Community cleanup drive" },
    { id: 9, category: "Events", description: "Youth sports tournament" },
    { id: 10, category: "Volunteers", description: "Volunteer training session" },
    { id: 11, category: "Education", description: "Digital learning resources distribution" },
    { id: 12, category: "Healthcare", description: "Vaccination drive" }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
            Gallery
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A glimpse into our work and the impact we're creating in communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-100/10 hover:shadow-md transition-shadow"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-white/20 dark:bg-white/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">
                    {image.category}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {image.description}
                  </p>
                </div>
              </div>
              <div className="absolute top-2 right-2">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Want to see more? Follow us on social media for regular updates.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a href="#" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.25c5.385 0 9.75 4.365 9.75 9.75S17.385 21.75 12 21.75 2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 1.5c-4.557 0-8.25 3.693-8.25 8.25S7.443 20.25 12 20.25s8.25-3.693 8.25-8.25-3.693-8.25-8.25-8.25zm3.75 8.25c0 2.07-1.68 3.75-3.75 3.75S8.25 14.07 8.25 12 9.93 8.25 12 8.25s3.75 1.68 3.75 3.75z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
