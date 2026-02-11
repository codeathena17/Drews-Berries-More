import React from "react";
import { Link } from "react-router";

function Footer() {
  return (
    <footer className="bg-[#4b5320] text-stone-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Mission */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-serif text-white mb-6 italic">
              Drew’s Berries & More
            </h3>
            <p className="text-white max-w-md leading-relaxed">
              Stewardship of land, cultivation of community, and mutual support
              through private association."
            </p>
            <p className="mt-4 text-xs text-white">
              Operated by the Drusus Foundation, a Private Membership
              Association and Agricultural Ministry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              Explore
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/membership"
                  className="hover:text-white transition-colors"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  to="/offerings"
                  className="hover:text-white transition-colors"
                >
                  Offerings
                </Link>
              </li>
              <li>
                <Link
                  to="/cabins"
                  className="hover:text-white transition-colors"
                >
                  Cabins
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-6">
              PMA Declaration
            </h4>
            <div className="text-sm text-white leading-relaxed italic space-y-3">
              <p>
                This is a private association. Our activities are restricted to
                members and constitute voluntary exchanges within a private
                ministry context.
              </p>
              <p>We do not operate as a public commercial entity.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white">
          <p>
            © {new Date().getFullYear()} Drusus Foundation. All rights reserved
            internally.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span>Private Policy</span>
            <span>Association Bylaws</span>
            <span>Terms of Participation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
