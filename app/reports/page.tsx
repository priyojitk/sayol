export default function Reports() {
  const reports = [
    {
      year: "2023",
      title: "Annual Impact Report 2023",
      description: "Comprehensive overview of our programs, impact metrics, and financial transparency for the year 2023.",
      download: "#"
    },
    {
      year: "2022",
      title: "Annual Impact Report 2022",
      description: "Detailed report covering our achievements, challenges, and future plans from 2022.",
      download: "#"
    },
    {
      year: "2023",
      title: "Financial Report Q4 2023",
      description: "Quarterly financial statement showing income, expenses, and program allocations.",
      download: "#"
    },
    {
      year: "2023",
      title: "Education Program Evaluation",
      description: "In-depth analysis of our education initiatives and their impact on student outcomes.",
      download: "#"
    },
    {
      year: "2023",
      title: "Healthcare Impact Assessment",
      description: "Evaluation of healthcare programs and their effectiveness in improving community health.",
      download: "#"
    },
    {
      year: "2022",
      title: "Annual Impact Report 2022",
      description: "Complete annual report documenting all activities and outcomes from 2022.",
      download: "#"
    }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
              Reports & Transparency
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              We believe in transparency and accountability. Access our annual reports, financial statements, and program evaluations.
            </p>
          </div>

          <div className="space-y-6">
            {reports.map((report, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-100/10 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-3">
                        {report.year}
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {report.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                      {report.description}
                    </p>
                    <a
                      href={report.download}
                      className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Download PDF
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Financial Transparency
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
              We are committed to maintaining the highest standards of financial transparency. All our financial reports are audited annually and available for public review.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">85%</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">Program Expenses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">10%</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">Administrative</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">5%</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">Fundraising</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
