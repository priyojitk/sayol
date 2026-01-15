import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg"></div>
              <span className="text-lg font-bold text-white">SAYOL</span>
            </div>
            <p className="text-sm text-slate-400">Creating positive change in communities through education, healthcare, and social welfare initiatives.</p>
          </div>

          {/* About & Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Organization</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/mission" className="text-sm text-slate-400 hover:text-blue-400 transition">Mission & Vision</Link></li>
              <li><Link href="/programs" className="text-sm text-slate-400 hover:text-blue-400 transition">Programs</Link></li>
              <li><Link href="/reports" className="text-sm text-slate-400 hover:text-blue-400 transition">Reports</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link href="/donate" className="text-sm text-slate-400 hover:text-blue-400 transition">Donate</Link></li>
              <li><Link href="/volunteers" className="text-sm text-slate-400 hover:text-blue-400 transition">Volunteer</Link></li>
              <li><Link href="/events" className="text-sm text-slate-400 hover:text-blue-400 transition">Events</Link></li>
              <li><Link href="/gallery" className="text-sm text-slate-400 hover:text-blue-400 transition">Gallery</Link></li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm text-slate-400 hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-slate-400 hover:text-blue-400 transition">Terms & Conditions</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8">
          <div>
            <p className="text-sm text-slate-400">© {year} SAYOL Foundation. All rights reserved.</p>
            <p className="text-xs text-slate-500 mt-1">Registered NGO | Tax Exempted under Section 80G</p>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition" title="Facebook">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition" title="Twitter">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.565 3.751 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition" title="LinkedIn">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition" title="Instagram">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.25c5.385 0 9.75 4.365 9.75 9.75S17.385 21.75 12 21.75 2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 1.5c-4.557 0-8.25 3.693-8.25 8.25S7.443 20.25 12 20.25s8.25-3.693 8.25-8.25-3.693-8.25-8.25-8.25zm3.75 8.25c0 2.07-1.68 3.75-3.75 3.75S8.25 14.07 8.25 12 9.93 8.25 12 8.25s3.75 1.68 3.75 3.75z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
