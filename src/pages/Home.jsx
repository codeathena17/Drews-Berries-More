import React from "react";
import { Link } from "react-router"; // Fixed import for standard consistency
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#fdfcf9]">
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=2000"
            alt="Drews Berries Oregon Farm"
            className="w-full h-full object-cover brightness-[0.5] saturate-[0.8] blur-[2px] scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <div className="relative inline-flex items-center mb-8 group">
              {/* The "Anchor" - A vertical brand-colored bar that adds architectural interest */}
              <div className="absolute -left-2 w-0.75 h-full bg-[#4B5320] rounded-full"></div>

              {/* The Badge - Glass effect with a very light border */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-5 py-2 rounded-r-lg">
                <div className="flex items-center gap-3">
                  {/* A small, steady "status" pulse to catch the eye */}
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4B5320] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4B5320]"></span>
                  </span>

                  <span className="text-stone-200 text-[10px] md:text-xs font-sans font-black uppercase tracking-[0.4em] leading-none">
                    A Private Membership Association
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-white text-5xl md:text-7xl font-serif font-black mb-8 leading-[1.1] tracking-tight">
              Rooted in Faith, <br />
              <span className="font-black text-stone-200/90">
                Grounded in Soil.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-stone-300/90 mb-12 leading-relaxed font-sans font-normal max-w-xl">
              We are a community-focused ministry stewardship association based
              in the rural heart of Oregon, dedicated to land and community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/membership"
                className="bg-[#4B5320] text-white px-10 py-4 rounded-[10px] font-sans font-bold uppercase tracking-widest hover:bg-[#3d441a] transition-all text-center shadow-2xl active:scale-95 border border-[#4B5320]"
              >
                Apply for Participation
              </Link>
              <Link
                to="/offerings"
                className="border-2 border-white/30 text-white backdrop-blur-md px-10 py-4 rounded-[10px] font-sans font-bold uppercase tracking-widest hover:bg-white hover:text-stone-900 transition-all text-center"
              >
                View Our Offerings
              </Link>
            </div>

            <p className="mt-10 text-xs text-stone-400 font-serif italic tracking-wide">
              Private member participation via a credit-based exchange system.
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden border-b border-stone-100">
        {/* Background Texture Layers */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=60&w=2000"
            alt="Texture"
            className="w-full h-full object-cover opacity-[0.04] select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#fdfcf9]"></div>
        </div>
        <div
          className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none"
          style={{
            backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8 leading-tight tracking-tight">
              A private foundation built on <br />
              <span className="italic text-[#4B5320] font-medium">
                voluntary exchange
              </span>
            </h2>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#4B5320]/20"></div>
              <div className="text-[#4B5320]/40 text-xs">◆</div>
              <div className="h-px w-12 bg-[#4B5320]/20"></div>
            </div>

            <p className="text-xl md:text-2xl text-stone-600 mb-20 font-serif italic font-light leading-relaxed">
              "Providing a strong foundation for a sustainable and spiritually
              grounded community."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="group relative bg-white/60 backdrop-blur-sm border border-white p-10 rounded-3xl shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-white">
                <div className="w-16 h-16 bg-[#4B5320]/10 text-[#4B5320] rounded-2xl flex items-center justify-center mx-auto mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#4B5320] group-hover:text-white">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-stone-800 mb-4 tracking-wide">
                  Land Stewardship
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed font-sans">
                  Practicing regenerative techniques to honor the earth and its
                  Creator.
                </p>
              </div>

              <div className="group relative bg-white/60 backdrop-blur-sm border border-white p-10 rounded-3xl shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-white">
                <div className="w-16 h-16 bg-[#4B5320]/10 text-[#4B5320] rounded-2xl flex items-center justify-center mx-auto mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#4B5320] group-hover:text-white">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-stone-800 mb-4 tracking-wide">
                  Private Association
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed font-sans">
                  Exclusively for members, bypassing public commercial
                  structures.
                </p>
              </div>

              <div className="group relative bg-white/60 backdrop-blur-sm border border-white p-10 rounded-3xl shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-white">
                <div className="w-16 h-16 bg-[#4B5320]/10 text-[#4B5320] rounded-2xl flex items-center justify-center mx-auto mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#4B5320] group-hover:text-white">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-stone-800 mb-4 tracking-wide">
                  Member Aid
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed font-sans">
                  A voluntary mutual support network for members facing
                  hardships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fdfcf9] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* The Card Container with Background Image */}
          <div className="relative overflow-hidden rounded-4xl shadow-2xl">
            {/* 1. Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000"
                alt="Harvest Background"
                className="w-full h-full object-cover"
              />
              {/* Modern Gradient: Darks on the left for text, fades to reveal image on the right */}
              <div className="absolute inset-0 bg-linear-to-r from-stone-900 via-stone-900/80 to-transparent md:to-stone-900/20"></div>
            </div>

            {/* 2. Content Layer */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 md:p-20">
              <div className="mb-10 md:mb-0 text-center md:text-left max-w-xl">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight tracking-tight">
                  Join Our <br className="hidden md:block" />
                  <span className="italic text-stone-200">Private Harvest</span>
                </h2>
                <p className="text-stone-300 text-lg md:text-xl font-sans leading-relaxed">
                  Exclusive access to our seasonal offerings, land-shares, and
                  private member exchanges.
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <Link
                  to="/offerings"
                  className="bg-[#4B5320] text-white px-12 py-5 rounded-[14px] font-sans font-bold uppercase tracking-widest hover:bg-[#5a632a] transition-all shadow-xl active:scale-95 text-center border border-[#6a7430]"
                >
                  Enter the Member Pantry
                </Link>
                <span className="text-stone-400 text-xs font-serif italic tracking-widest">
                  Members Only Portal
                </span>
              </div>
            </div>

            {/* 3. Subtle Decorative Flare */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
