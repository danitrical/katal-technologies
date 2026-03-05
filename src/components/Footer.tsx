"use client";

import Image from "next/image";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = {
  Services: ["Web Development", "Mobile Apps", "Cloud & DevOps", "AI Solutions"],
  Company: ["About", "Projects", "Process", "Tech Stack", "Contact"],
};

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-purple-brand/15 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-purple-brand/8 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Katal"
                width={200}
                height={60}
                className="h-10 w-auto"
              />
              <span className="sr-only">Katal</span>
            </div>
            <p className="text-purple-soft/50 font-dm text-sm leading-relaxed max-w-xs mb-6">
              We turn ideas into powerful software solutions. Partner with
              startups, SMEs, and enterprises worldwide.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "mailto:hello@katal.pk" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg border border-purple-brand/25 bg-purple-brand/10 flex items-center justify-center text-purple-soft/60 hover:text-white hover:border-purple-brand/50 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h5 className="font-syne font-semibold text-sm text-white mb-4 tracking-wide">
                {category}
              </h5>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-purple-soft/50 hover:text-purple-soft font-dm text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-purple-brand/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-purple-soft/35 font-dm text-xs">
            © {new Date().getFullYear()} Katal. All rights reserved.
          </p>
          <p className="text-purple-soft/35 font-dm text-xs">
            Built with passion & too much coffee ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
