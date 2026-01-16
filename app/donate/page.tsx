import Link from "next/link";

export default function Donate() {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
              Make a Difference
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Your contribution helps us create lasting positive change in communities. Every donation, big or small, makes a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">One-Time Donation</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Make a single contribution to support our programs and initiatives.
              </p>
              <div className="space-y-3 mb-6">
                <button className="w-full px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  $25
                </button>
                <button className="w-full px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  $50
                </button>
                <button className="w-full px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  $100
                </button>
                <button className="w-full px-6 py-3 rounded-lg border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  Custom Amount
                </button>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Monthly Donation</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Become a monthly supporter and help us plan for long-term impact.
              </p>
              <div className="space-y-3 mb-6">
                <button className="w-full px-6 py-3 rounded-lg border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold hover:bg-green-600 hover:text-white transition-colors">
                  $10/month
                </button>
                <button className="w-full px-6 py-3 rounded-lg border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold hover:bg-green-600 hover:text-white transition-colors">
                  $25/month
                </button>
                <button className="w-full px-6 py-3 rounded-lg border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold hover:bg-green-600 hover:text-white transition-colors">
                  $50/month
                </button>
                <button className="w-full px-6 py-3 rounded-lg border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold hover:bg-green-600 hover:text-white transition-colors">
                  Custom Amount
                </button>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-white dark:bg-slate-800 shadow-sm ring-1 ring-slate-900/5 dark:ring-slate-100/10 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Other Ways to Give</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Corporate Sponsorship</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                  Partner with us for corporate social responsibility initiatives.
                </p>
                <Link href="/contact" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Learn more →
                </Link>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In-Kind Donations</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                  Donate goods, services, or resources that support our programs.
                </p>
                <Link href="/contact" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Contact us →
                </Link>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Legacy Giving</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                  Include SAYOL Foundation in your estate planning.
                </p>
                <Link href="/contact" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
            <div className="flex items-start">
              <svg className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Tax Benefits</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  SAYOL Foundation is a registered NGO and donations are tax-exempted under Section 80G. You will receive a receipt for all donations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
