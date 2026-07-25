import { MapPin, Mail, Phone, Globe, ShieldCheck, Box, Leaf, Users, Search as SearchIcon } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About Us | DNA Thrift",
  description: "Learn more about DNA Thrift, a premium shoe thrift store based in Lahore, delivering authentic thrifted footwear across Pakistan.",
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pt-20">
      
      {/* Large Visual Header */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] min-h-[400px] bg-zinc-900 overflow-hidden flex items-end">
        {/* Transparent Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-70 mix-blend-screen pointer-events-none">
          <Image 
            src="/images/about-hero.png" 
            alt="DNA Thrift Hero" 
            fill
            className="object-contain object-bottom lg:object-right-bottom scale-110 translate-y-[10%] lg:-translate-x-16 lg:translate-y-[15%] drop-shadow-2xl"
            priority
          />
        </div>
        
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent z-0"></div>
        
        <div className="relative z-10 w-full px-6 lg:px-10 max-w-7xl mx-auto pb-12 lg:pb-16 pointer-events-none">
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-zinc-400 mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-zinc-400"></span> OUR STORY
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] drop-shadow-md">
            Redefining <br /> Thrift Culture.
          </h1>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="px-6 lg:px-10 max-w-7xl mx-auto py-16 lg:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column - The Narrative (takes 7 columns) */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Intro Text */}
            <p className="text-xl sm:text-2xl text-ink/80 leading-relaxed font-medium">
              DNA Thrift is an independent, premium shoe thrift store based in the heart of Lahore. We believe that exceptional footwear shouldn't come with an unreasonable price tag, nor should it cost the earth. We curate and deliver high-quality, authentic thrifted shoes to every corner of Pakistan.
            </p>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-ink mb-5 flex items-center gap-3">
                  <Globe className="w-7 h-7" />
                  Global Sourcing
                </h2>
                <div className="space-y-4 text-ink/70 leading-relaxed text-base">
                  <p>
                    Our inventory is painstakingly curated and directly imported from major hubs in China and other international streetwear capitals. We bypass the local middlemen to ensure that every pair that lands in our store meets our strict standards for quality, condition, and style.
                  </p>
                  <p>
                    By sourcing globally, we are able to offer an incredibly diverse range of silhouettes, from rare streetwear grails to everyday essentials, bringing international sneaker culture directly to Pakistan.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-ink mb-5 flex items-center gap-3">
                  <ShieldCheck className="w-7 h-7" />
                  Independent & Authentic
                </h2>
                <div className="space-y-4 text-ink/70 leading-relaxed text-base">
                  <p>
                    <strong>Transparency is our core value.</strong> DNA Thrift operates completely independently. We are not affiliated with, endorsed by, or related to any global brand associations, official brand distributors, or franchise networks. 
                  </p>
                  <p>
                    We are a proud grassroots business built by sneaker enthusiasts, for sneaker enthusiasts. Every shoe is thoroughly inspected upon arrival. We clean, restore, and verify every pair to ensure our community receives exactly what they expect—authentic thrifted quality with absolutely no compromises.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-ink mb-5 flex items-center gap-3">
                  <SearchIcon className="w-7 h-7" />
                  The Curation Process
                </h2>
                <div className="space-y-4 text-ink/70 leading-relaxed text-base">
                  <p>
                    Thrifting shouldn't mean digging through piles of worn-out items. At DNA Thrift, we do the heavy lifting for you. Out of thousands of pairs, we hand-select only the best. 
                  </p>
                  <p>
                    We look for unique colorways, vintage silhouettes, and gently-used modern classics. Once selected, each shoe goes through a meticulous cleaning and sanitization process. The result? Premium thrifted footwear that feels fresh out of the box, ready for its second life.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-ink mb-5 flex items-center gap-3">
                  <Leaf className="w-7 h-7" />
                  Sustainable Fashion
                </h2>
                <div className="space-y-4 text-ink/70 leading-relaxed text-base">
                  <p>
                    The fashion industry is one of the largest polluters globally. By choosing to thrift, you are actively participating in the circular economy and reducing the demand for fast fashion and mass manufacturing.
                  </p>
                  <p>
                    Every pair of shoes you buy from DNA Thrift is a step towards a more sustainable future. Look good while doing good for the planet.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight uppercase text-ink mb-5 flex items-center gap-3">
                  <Box className="w-7 h-7" />
                  Nationwide Delivery
                </h2>
                <div className="space-y-4 text-ink/70 leading-relaxed text-base">
                  <p>
                    While our roots, warehouse, and physical operations are proudly based in Lahore, our vision spans the entire country. 
                  </p>
                  <p>
                    We have built a robust and fast logistics network. Whether you are walking the streets of Karachi, exploring Islamabad, or relaxing in Quetta, your next favorite pair of shoes is just a click away and will be delivered straight to your doorstep.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Contact & Location (takes 5 columns) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-10 lg:pl-10 lg:border-l border-border h-fit">
              
              {/* Contact Info Widget */}
              <div className="bg-zinc-100 rounded-3xl p-8 border border-border">
                <h3 className="text-xl font-black tracking-tight uppercase text-ink mb-8">
                  Get In Touch
                </h3>
                <ul className="space-y-6">
                  <li>
                    <a 
                      href="mailto:dnathrift.pk@gmail.com"
                      className="flex items-center gap-5 text-ink/80 hover:text-ink transition-colors group"
                    >
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-border shadow-sm group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-1">Email</p>
                        <p className="font-semibold text-base">dnathrift.pk@gmail.com</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="tel:03361474511"
                      className="flex items-center gap-5 text-ink/80 hover:text-ink transition-colors group"
                    >
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-border shadow-sm group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-1">Phone / WhatsApp</p>
                        <p className="font-semibold text-base">0336 1474511</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.instagram.com/dnathrift.pk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-5 text-ink/80 hover:text-ink transition-colors group"
                    >
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-border shadow-sm group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-1">Instagram</p>
                        <p className="font-semibold text-base">@dnathrift.pk</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.tiktok.com/@dna.thrifts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-5 text-ink/80 hover:text-ink transition-colors group"
                    >
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-border shadow-sm group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2400/svg">
                          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.43 5.92-1.58 1.51-3.66 2.37-5.88 2.25-2.22-.12-4.31-1.25-5.63-2.93-1.32-1.68-1.87-3.92-1.45-5.99.41-2.06 1.62-3.88 3.32-4.95 1.7-1.06 3.8-1.4 5.76-1.02V14.2c-1.33-.21-2.73-.08-3.91.56-1.18.64-2.07 1.73-2.4 3.01-.33 1.28-.15 2.68.51 3.82.66 1.14 1.78 1.94 3.1 2.18 1.32.24 2.72-.03 3.83-.71 1.11-.68 1.83-1.83 2.01-3.14.18-1.31.02-2.67-.44-3.89-.46-1.22-1.21-2.27-2.19-3.05-.02-3.23-.01-6.47-.02-9.7z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-1">TikTok</p>
                        <p className="font-semibold text-base">@dna.thrifts</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Location Widget */}
              <div>
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 bg-ink rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black tracking-tight uppercase text-ink mb-1 mt-1">
                      Headquarters
                    </h3>
                    <p className="text-ink/70 text-base font-medium mb-4">
                      Lahore, Pakistan<br />
                      (Online Operations)
                    </p>
                    <a 
                      href="https://maps.app.goo.gl/WbR9FTDRxbGpzMts6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-zinc-200 text-ink text-xs font-bold tracking-widest uppercase rounded-full hover:bg-zinc-300 transition-colors"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
                
                {/* Decorative Map Placeholder */}
                <div className="w-full h-48 bg-zinc-100 rounded-3xl border border-border overflow-hidden relative group mt-4">
                  <a 
                    href="https://maps.app.goo.gl/WbR9FTDRxbGpzMts6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center z-10 bg-background/0 group-hover:bg-background/10 transition-colors cursor-pointer"
                  >
                    <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
                    <div className="bg-white/95 backdrop-blur-md p-4 rounded-full shadow-xl transform group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-ink" />
                    </div>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
