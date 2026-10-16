import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPinIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  CheckCircleIcon,
  PhoneIcon,
  CurrencyRupeeIcon,
  SparklesIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import QuickInquiryCard from '@/app/components/QuickInquiryCard';

export const metadata: Metadata = {
  title: 'Properties in Gurugram (Gurgaon) | Golf Course, Dwarka Exp. & Luxury Living',
  description:
    'Explore luxury highrises, penthouses, and builder floors in Gurugram. Golf Course Extension Road, Dwarka Expressway, and SPR with verified HRERA compliance.',
  alternates: {
    canonical: '/location/gurugram',
  },
};

export default function GurugramLocationPage() {
  const zones = [
    {
      name: 'Golf Course Road & Extension (GCRE)',
      badge: 'Ultra-Luxury Billionaires Corridor',
      price: '₹18,000 - ₹38,000 / sq.ft',
      desc: 'The gold standard of luxury living in North India. Surrounded by world-class golf courses, Michelin-level fine dining, international schools, and premier Grade-A corporate towers.',
      projects: ['M3M Golfestate', 'Emaar Palm Springs', 'Smart World The Edition', 'Puri The Aravallis'],
      image: '/images/avi-waxman-f9qZuKoZYoY-unsplash.jpg',
    },
    {
      name: 'Dwarka Expressway (NH-248BB)',
      badge: 'Fastest Appreciating Corridor',
      price: '₹11,500 - ₹19,500 / sq.ft',
      desc: 'An 8-lane grade-separated access-controlled expressway offering 15-minute signal-free connectivity to IGI Airport Terminal 3, Diplomatic Enclave II, and Yashobhoomi IICC Convention Center.',
      projects: ['Sobha City', 'Godrej Meridien', 'Smart World One DXP', 'Signature Global City'],
      image: '/images/dillon-kydd-2keCPb73aQY-unsplash.jpg',
    },
    {
      name: 'Southern Peripheral Road (SPR) & New Gurgaon',
      badge: 'Emerging Corporate Hub',
      price: '₹9,800 - ₹16,000 / sq.ft',
      desc: 'Direct cloverleaf interchange linking NH-48 (Delhi-Jaipur Highway), Sohna Road, and Golf Course Extension. Rapidly transforming into Gurugram’s secondary commercial powerhouse.',
      projects: ['Tata Primanti', 'Central Park Resorts', 'Whiteland Blissville', 'DLF Alameda'],
      image: '/images/bilal-ahmad-_ua9kZBbjuw-unsplash.jpg',
    },
    {
      name: 'Cyber City & DLF Phases (1 - 5)',
      badge: 'Corporate Epicenter & High Rentals',
      price: '₹16,000 - ₹32,000 / sq.ft',
      desc: 'Home to 500+ Fortune 500 multinationals, Rapid Metro connectivity, Cyber Hub entertainment precinct, and mature freehold residential pockets.',
      projects: ['DLF Phase 2 & 5 Builder Floors', 'Belvedere Park', 'Ambience Caitriona', 'The Icon'],
      image: '/images/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg',
    },
  ];

  const faqs = [
    {
      q: 'Is Dwarka Expressway completely ready for end-user family living?',
      a: 'Yes. With the operational commissioning of the Haryana section of Dwarka Expressway, travel times to Delhi and IGI Airport have reduced drastically. Over 40,000 families are already residing in fully delivered gated societies with active schools and retail complexes.',
    },
    {
      q: 'What is the stamp duty rate in Gurugram (Haryana)?',
      a: 'In urban municipal areas of Gurugram, the stamp duty rate is 7% for male buyers and 5% for female buyers. Joint ownership with a female co-buyer is 6%. Registration fee is levied based on fixed property value slabs up to a statutory cap.',
    },
    {
      q: 'Which corridor offers higher rental yields in Gurugram?',
      a: 'Golf Course Extension Road and Southern Peripheral Road currently yield 3.5% to 5.2% gross annual rental return for residential apartments, fueled by massive corporate absorption by tech giants and financial institutions in Cyber City and Horizon Center.',
    },
    {
      q: 'How does Noida Homes assist buyers in Gurugram?',
      a: 'We maintain direct developer alliances with DLF, M3M, Godrej, Sobha, Smart World, and Signature Global. We verify HRERA approvals, unlock exclusive pre-launch allotment quotas, and offer 0% buyer brokerage on fresh developer inventory.',
    },
  ];

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-blue-50/80 via-white to-gray-50/60 pt-10 pb-16 lg:py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm font-medium text-gray-500 mb-6 space-x-2">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <span>/</span>
            <Link href="/location" className="hover:text-blue-600 transition">Locations</Link>
            <span>/</span>
            <span className="text-blue-600 font-semibold">Gurugram</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide">
                <CheckBadgeIcon className="w-4 h-4 text-blue-600" />
                2,500+ Verified Luxury Listings • HRERA Registered
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight tracking-tight">
                Luxury Real Estate in <span className="text-blue-600">Gurugram (Gurgaon)</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                The corporate capital of North India and the playground of luxury architecture.
                From private clubhouse living on <strong>Golf Course Extension Road</strong> to high-speed appreciation along the
                <strong> Dwarka Expressway</strong>, <strong>Noida Homes</strong> curates verified luxury residences and high-yield commercial assets.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="tel:+919810323414"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>Call: +91 98103 23414</span>
                </Link>
                <a
                  href="https://wa.me/919810323414?text=Hi%20Noida%20Homes,%20I%20am%20exploring%20properties%20in%20Gurugram.%20Please%20share%20shortlisted%20options."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>WhatsApp Shortlist</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">2,500+</div>
                  <div className="text-xs text-gray-500 font-medium">Verified Units</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">15 Mins</div>
                  <div className="text-xs text-gray-500 font-medium">To IGI T3 Airport</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-500 font-medium">Fortune MNC Hubs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">+18%</div>
                  <div className="text-xs text-gray-500 font-medium">YoY Capital Rise</div>
                </div>
              </div>
            </div>

            {/* Inquire Card */}
            <div className="lg:col-span-5">
              <QuickInquiryCard
                title="Gurugram Luxury Desk"
                badge="HNI Advisory"
                subtitle="Access off-market builder inventory and pre-launch pricing on leading luxury developments."
                typeLabel="Corridor"
                typeOptions={['Golf Course Extn. Road', 'Dwarka Expressway', 'Southern Peripheral Road', 'Cyber City / DLF Phases', 'Sohna Road']}
                budgetOptions={['₹1.2 Cr - ₹2.5 Cr', '₹2.5 Cr - ₹5 Cr', '₹5 Cr - ₹10 Cr', '₹10 Cr+ Ultra Luxury']}
                buttonText="Receive Gurugram Shortlist"
                serviceContext="Luxury Properties in Gurugram"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 GURUGRAM HUBS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Prime Corridors</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Key Investment & Lifestyle Corridors in Gurugram
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {zones.map((zone) => (
              <div
                key={zone.name}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={zone.image}
                    alt={zone.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {zone.badge}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg">
                    {zone.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {zone.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{zone.desc}</p>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="text-xs font-semibold uppercase text-gray-400 mb-2">Prominent Projects</div>
                      <div className="grid grid-cols-2 gap-2">
                        {zone.projects.map((proj) => (
                          <div key={proj} className="flex items-center gap-1.5 text-xs text-gray-700">
                            <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span className="truncate">{proj}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href="https://wa.me/919810323414?text=Hi,%20I%20am%20interested%20in%20Gurugram%20developments%20in%20"
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      <span>Explore Verified Units</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Gurugram Insights</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Frequently Asked Questions About Gurugram Real Estate
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl p-6 border border-gray-200 open:shadow-md transition-all"
              >
                <summary className="flex items-center justify-between font-bold text-gray-900 cursor-pointer list-none text-base">
                  <span>{faq.q}</span>
                  <span className="text-blue-600 font-bold ml-4 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed pt-3 border-t border-gray-100">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
