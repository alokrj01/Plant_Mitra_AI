import React from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  Heart,
  ArrowUpRight,
  Sprout,
  ShieldCheck,
} from "lucide-react";

const productLinks = [
  { label: "Image Prediction", href: "#analysis" },
  { label: "Text Prediction", href: "#analysis" },
  { label: "Disease Insights", href: "#features" },
  { label: "Treatment Guidance", href: "#features" },
  { label: "Prediction History", href: "#features" },
];

const exploreLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Product Preview", href: "#product-preview" },
];

const resourceLinks = [
  { label: "Plant Care Tips", href: "#plant-care" },
  { label: "AI Limitations", href: "#ai-limitations" },
  { label: "FAQ", href: "#faq" },
];

const careTips = [
  "Monitor plants regularly for unusual symptoms",
  "Avoid overwatering and maintain proper drainage",
  "Provide sufficient air circulation around plants",
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />

        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-teal-500/5 blur-3xl" />
      </div>

      {/* Top glow */}
      <div className="absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg shadow-emerald-500/20 transition-transform duration-300 group-hover:-translate-y-0.5">
                <Leaf className="h-5 w-5 text-white" />
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight text-white">
                  PlantMitra AI
                </h2>

                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-400">
                  Plant Health Analysis
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              AI-assisted plant health analysis that helps you understand
              potential diseases, explore relevant information, and find
              practical treatment guidance.
            </p>

            {/* CTA */}
            <Link
              to="/register"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all duration-200 hover:bg-emerald-500 hover:shadow-emerald-500/20"
            >
              Start Analyzing
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            {/* Trust note */}
            <div className="mt-7 flex max-w-sm items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />

              <p className="text-xs leading-5 text-slate-500">
                PlantMitra provides AI-assisted insights and should be used as
                a supporting tool alongside your own observation.
              </p>
            </div>
          </div>

          {/* Product links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-emerald-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-emerald-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-white">
              Resources
            </h3>

            <ul className="mt-5 space-y-3">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors duration-200 hover:text-emerald-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Care tips */}
            <div className="mt-7">
              <div className="flex items-center gap-2">
                <Sprout className="h-4 w-4 text-emerald-500" />

                <span className="text-xs font-semibold text-slate-300">
                  Quick care reminders
                </span>
              </div>

              <ul className="mt-3 space-y-2.5">
                {careTips.map((tip) => (
                  <li
                    key={tip}
                    className="text-xs leading-5 text-slate-500"
                  >
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-slate-500">
            <span>© {currentYear}</span>

            <span className="font-semibold text-slate-400">
              PlantMitra AI
            </span>

            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-slate-500">
            <span>Made with</span>

            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />

            <span>for plant health</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-900 pb-8 pt-6">
          <p className="mx-auto max-w-5xl text-center text-[11px] leading-5 text-slate-600 sm:text-xs">
            <span className="font-semibold text-slate-500">
              Disclaimer:
            </span>{" "}
            PlantMitra AI provides AI-assisted plant health predictions and
            informational guidance. Results may not always be accurate and
            should not be considered a definitive diagnosis or a substitute
            for professional agricultural advice. For serious or persistent
            plant health issues, consider consulting a qualified agricultural
            professional.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;