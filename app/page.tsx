"use client";
import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Scanning website: ${url}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-green-50 text-green-900">
      {
        url
      }{/* NAVBAR */}
      <nav className="w-full bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-green-700">Shieldify</h1>
          <ul className="flex items-center gap-6 text-green-700 font-medium">
            <li>
              <a href="#features" className="hover:text-green-600 transition">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-6 bg-green-100">
        <h2 className="text-5xl font-bold text-green-700 mb-4">
          Secure Your Website Instantly
        </h2>
        <p className="text-lg text-green-600 max-w-2xl">
          Shieldify helps you scan your website for malware, vulnerabilities, and
          security issues-quickly and easily.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-3 mt-10 w-full max-w-lg"
        >
          <Input
            type="url"
            placeholder="Enter your website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 border-green-400 focus:ring-green-500 focus:border-green-500"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
          >
            Scan
          </button>
        </form>
      </header>

      {/* FEATURES SECTION */}
      <section id="features" className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-10">
            Why Choose Shieldify?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-green-100 border border-green-200 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-green-700 mb-3">
                Fast Scanning
              </h4>
              <p className="text-green-600 text-sm">
                Scan your site for vulnerabilities in seconds using intelligent
                methods.
              </p>
            </div>

            <div className="p-8 bg-green-100 border border-green-200 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-green-700 mb-3">
                Reliable Results
              </h4>
              <p className="text-green-600 text-sm">
                Get accurate, up-to-date security reports you can trust.
              </p>
            </div>

            <div className="p-8 bg-green-100 border border-green-200 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-xl font-semibold text-green-700 mb-3">
                Easy to Use
              </h4>
              <p className="text-green-600 text-sm">
                No coding needed. Enter your website and click “Scan”.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-green-200 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-green-700 mb-6">About Shieldify</h3>
          <p className="text-green-800 max-w-2xl mx-auto leading-relaxed">
            Shieldify is a beginner-friendly vulnerability assessment tool that helps
            you identify common website security issues. Designed with simplicity
            and clarity in mind, it's perfect for learners and small projects.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-green-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-green-700 mb-6">Get In Touch</h3>
          <p className="text-green-700 mb-8">
            Questions or feedback? Let’s connect!
          </p>
          <a
            href="#contact"
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-700 text-white py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-3">Shieldify</h4>
            <p className="text-sm text-green-100">
              Making website security simple and accessible for everyone.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm text-green-100">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-3">Follow Us</h5>
            <p className="text-sm text-green-100">
              Stay updated with new features and improvements.
            </p>
          </div>
        </div>

        <div className="text-center text-green-100 text-sm mt-10 border-t border-green-600 pt-4">
          © {new Date().getFullYear()} Shieldify. Built with 💚 by a beginner.
        </div>
      </footer>
    </div>
  );
}
