
import React from 'react';
import { Link } from 'react-router';

const Home = () => {
  return (
    <div className="space-y-24">
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Oregon Stewardship Farm" 
            className="w-full h-full object-cover brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#2D3E2F]/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <span className="uppercase tracking-[0.4em] text-xs font-bold mb-6 block opacity-90">Rural Oregon Association</span>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight serif">Stewardship of the Land & Mutual Care</h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto opacity-95 italic">
            "Cultivating a values-driven community that supports sustainable agriculture and personal responsibility."
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/membership" className="bg-white text-earth-green px-12 py-5 rounded-full font-bold text-lg hover:bg-earth-cream transition-all shadow-xl">
              Join the Association
            </Link>
            <Link to="/exchange" className="bg-earth-green/40 backdrop-blur-md border border-white/30 text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-earth-green/60 transition-all">
              Farm Bounty
            </Link>
          </div> */}
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-earth-deep serif leading-tight">A Strong Foundation <br/>for Community</h2>
            <div className="w-20 h-1 bg-earth-sage"></div>
            <p className="text-earth-muted text-lg leading-relaxed">
              Drusus Foundation, operating as **Drews Berries & More**, is a private membership ministry and agricultural association. We focus on sustainable food production, shared resources, mutual aid, and stewardship of the land.
            </p>
            <p className="text-earth-muted text-lg leading-relaxed italic">
              "The association operates under a private membership model rather than a public commercial structure."
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-earth-cream p-4 rounded-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-earth-sage mb-2">Legal Identity</p>
                <p className="text-earth-deep font-semibold serif">Drusus Foundation</p>
                <p className="text-[10px] text-earth-muted uppercase">"Strong Foundation"</p>
              </div>
              <div className="bg-earth-cream p-4 rounded-2xl">
                <p className="text-xs font-bold uppercase tracking-widest text-earth-sage mb-2">DBA Name</p>
                <p className="text-earth-deep font-semibold serif">Drews Berries & More</p>
                <p className="text-[10px] text-earth-muted uppercase">Farm-Oriented Branding</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-4/5 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=800" 
                alt="Agricultural Stewardship" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="bg-earth-sand/30 py-32 border-y border-earth-tan">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-earth-deep mb-4 serif">Association Participation</h2>
            <p className="text-earth-sage font-medium uppercase tracking-[0.2em] text-xs">Our Core Stewardship Offerings</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Sustainable Production', desc: 'Fruits, vegetables, and small livestock raised with organic, natural methods.', icon: '🌱' },
              { title: 'Credit Exchange', desc: 'Private member access to farm bounty via a credit-based voluntary system.', icon: '⚖️' },
              { title: 'Educational Opportunities', desc: 'On-site experiences, training, and community-based learning for stewards.', icon: '📖' },
              { title: 'Simple Cabin Stays', desc: 'Overnight rest and reflection in our modest, on-site cabins.', icon: '🛖' },
              { title: 'Training & Consulting', desc: 'Professional guidance in sustainable practices and community resilience.', icon: '🤝' },
              { title: 'Hardship Assistance', desc: 'Support programs aligned with our values of dignity and mutual aid.', icon: '❤️' }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-earth-tan hover:border-earth-sage transition-colors">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-earth-deep mb-3 serif">{item.title}</h3>
                <p className="text-sm text-earth-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
