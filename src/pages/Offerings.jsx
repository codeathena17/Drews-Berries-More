import React, { useState } from "react";
import {
  Leaf,
  Info,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Sprout,
  GraduationCap,
} from "lucide-react";

const OFFERINGS = [
  {
    id: "1",
    name: "Seasonal Berry Harvest",
    description:
      "A voluntary exchange of freshly harvested seasonal berries from our Oregon fields, supporting sustainable food production and land stewardship.",
    creditValue: 12,
    category: "Produce",
    imageUrl:
      "https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "2",
    name: "Homestead Sourdough Starter",
    description:
      "Heritage culture shared for member kitchen cultivation, fostering shared resources, personal responsibility, and mutual aid.",
    creditValue: 5,
    category: "Pantry",
    imageUrl:
      "https://images.unsplash.com/photo-1589415392060-ad6a6a0bc912?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "3",
    name: "Beekeeping Consultation",
    description:
      "One-on-one session sharing knowledge on sustainable apiary management, environmental stewardship, and community-based learning.",
    creditValue: 45,
    category: "Education",
    imageUrl:
      "https://images.unsplash.com/photo-1587334274328-64186a80aeee?auto=format&fit=crop&q=80&w=1000",
  },
];

const CATEGORIES = ["All", "Produce", "Pantry", "Education"];

const Offerings = () => {
  const [filter, setFilter] = useState("All");

  const filteredOfferings =
    filter === "All"
      ? OFFERINGS
      : OFFERINGS.filter((item) => item.category === filter);

  return (
    <div className="bg-[#FDFBF7] min-h-screen animate-in fade-in duration-1000 pb-32 font-sans selection:bg-[#4B5320]/10 overflow-x-hidden">
      {/* Editorial Header - Reflecting Drusus Foundation Identity */}
      <section className="relative pt-10 pb-20 px-6 border-b border-stone-100 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#4B5320]"></div>
            <div className="w-16 h-px border-t border-dashed border-stone-200"></div>
            <span className="text-[#4B5320] text-[10px] font-black uppercase tracking-[0.5em]">
              The Drusus Foundation Association
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-black text-stone-900 mb-6 tracking-tighter leading-none">
            Member{" "}
            <span className=" font-light text-[#4B5320]">Participation.</span>
          </h1>
          <p className="text-stone-500 max-w-3xl mx-auto text-lg md:text-xl font-serif italic leading-relaxed">
            "A private community centered on stewardship of the land, shared
            resources, and personal responsibility."
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16">
        {/* Purpose Statement - Based on Client Context */}
        <div className="mb-24 p-10 bg-[#4B5320]/5 rounded-[40px] border border-[#4B5320]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-4 italic">
                Vision & Mission
              </h2>
              <p className="text-stone-600 font-serif leading-relaxed italic">
                Our purpose is to cultivate a values-based community centered on
                stewardship of the land, shared resources, mutual aid, and
                personal responsibility. We operate through a private membership
                structure rather than a public commercial model.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-3xl shadow-sm text-center">
                <Sprout className="mx-auto text-[#4B5320] mb-2" size={24} />
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                  Sustainability
                </span>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm text-center">
                <GraduationCap
                  className="mx-auto text-[#4B5320] mb-2"
                  size={24}
                />
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">
                  Education
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-20 justify-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border ${
                filter === cat
                  ? "bg-[#4B5320] text-white border-[#4B5320] shadow-xl shadow-[#4B5320]/20"
                  : "bg-white text-stone-400 hover:text-[#4B5320] border-stone-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Offerings Grid - Based on Credit Exchange System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredOfferings.map((item) => (
            <div key={item.id} className="group flex flex-col">
              <div className="relative aspect-4/5 rounded-[48px] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-[#4B5320]/10 border-8 border-white bg-stone-100">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover saturate-[0.6] group-hover:saturate-100 group-hover:scale-105 transition-all duration-2000 ease-out"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1500628550463-c8881a54d4d4?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-8 left-8">
                  <div className="bg-white/90 backdrop-blur-md text-[#4B5320] px-4 py-1.5 rounded-full border border-stone-100 shadow-sm">
                    <span className="text-[9px] font-black uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 px-4 grow flex flex-col">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h2 className="text-2xl md:text-3xl font-serif text-stone-900 tracking-tight leading-tight">
                    {item.name}
                  </h2>
                  <div className="text-right shrink-0">
                    <span className="text-2xl font-serif italic text-[#4B5320] block">
                      {item.creditValue}
                    </span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-stone-400">
                      Exchange Credits
                    </span>
                  </div>
                </div>
                <p className="text-stone-500 text-base leading-relaxed font-serif italic mb-8 border-l-2 border-[#4B5320]/10 pl-6 grow">
                  {item.description}
                </p>
                <button className="w-full bg-[#4B5320] text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] shadow-lg shadow-[#4B5320]/10 hover:bg-stone-900 transition-all flex items-center justify-center gap-3 group/btn">
                  Request Participation
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Association Stewardship & Hardship Notice */}
        <section className="mt-40 bg-stone-900 rounded-[64px] p-12 md:p-20 text-white relative overflow-hidden">
          <Leaf className="absolute -bottom-10 -right-10 w-64 h-64 text-[#4B5320]/10 -rotate-12" />
          <div className="max-w-4xl relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-2xl bg-[#4B5320] flex items-center justify-center">
                <HeartPulse size={20} className="text-white" />
              </div>
              <span className="text-[#4B5320] text-[10px] font-black uppercase tracking-[0.4em]">
                Stewardship & Care
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">
              Hardship Support & <br />
              <span className="italic text-stone-400">Mutual Care</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-stone-400 font-serif italic text-lg">
              <p>
                "The association seeks to support individuals and families
                facing financial hardship by offering alternative participation
                options and assistance programs, consistent with our values of
                dignity and compassion."
              </p>
              <p>
                "Credits may be acquired by members and used for farm products,
                activities, and overnight stays. All participation is voluntary
                and restricted to the private association."
              </p>
            </div>
            <div className="mt-16 flex flex-wrap gap-6">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5">
                <ShieldCheck size={16} className="text-[#4B5320]" />
                <span className="text-[10px] uppercase tracking-widest font-black text-white/60">
                  Private Membership Model
                </span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5">
                <Info size={16} className="text-[#4B5320]" />
                <span className="text-[10px] uppercase tracking-widest font-black text-white/60">
                  Rural Oregon Sanctuary
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Offerings;
