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
  HomeModernIcon,
  SparklesIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import QuickInquiryCard from '@/app/components/QuickInquiryCard';

export const metadata: Metadata = {
  title: 'Properties in Delhi | Luxury Builder Floors, DDA & South Delhi Living',
  description:
    'Discover verified freehold luxury builder floors, DDA flats, and prime plots in South Delhi, Dwarka, and West Delhi. Complete title clearance and MCD approval verification.',
  alternates: {
    canonical: '/location/delhi',
  },
};

export default function DelhiLocationPage() {
  const delhiZones = [
    {
      name: 'South Delhi Luxury Enclaves',
      badge: 'Ultra-Prime Freehold Living',
      price: '₹22,000 - ₹55,000 / sq.ft',
      desc: 'Exclusive, wide-avenue residential colonies including Greater Kailash (GK 1 & 2), Defence Colony, Vasant Vihar, and Panchsheel. Featuring high-end stilt+4 independent builder floors with private elevators, Italian marble finishes, and terrace gardens.',
      types: '3, 4 & 5 BHK Builder Floors, Kothis',
      image: '/images/francesca-tosolini-lLDh9JppH2c-unsplash.jpg',
    },
    {
      name: 'Dwarka Sub-City (Sectors 6, 10, 12, 22)',
      badge: 'Asia’s Largest Planned Sub-City',
      price: '₹9,500 - ₹16,500 / sq.ft',
      desc: 'Master-planned residential heaven with over 10 operational metro stations, wide sector grids, DDA sports complexes, and walking distance to the upcoming Diplomatic Enclave II and Bharat Vandana Park.',
      types: 'CGHS Cooperative Societies, DDA MIG/HIG',
      image: '/images/danist-soh-GqaOP6wsCQ0-unsplash.jpg',
    },
    {
      name: 'West & North Delhi Established Belts',
      badge: 'High Commercial & Family Footfall',
      price: '₹14,000 - ₹28,000 / sq.ft',
      desc: 'Vibrant legacy residential pockets like Punjabi Bagh, Rajouri Garden, and Model Town. Famous for independent bungalows, modern multi-generational builder floors, and thriving retail high-streets.',
      types: 'Independent Floors, Freehold Plots',
      image: '/images/bilal-ahmad-_ua9kZBbjuw-unsplash.jpg',
    },
    {
      name: 'East Delhi & Mayur Vihar / IP Extension',
      badge: 'Border Living with Instant Noida Access',
      price: '₹8,500 - ₹15,000 / sq.ft',
      desc: 'Strategically located along the Delhi-Meerut Expressway and Blue/Pink Metro lines, offering rapid 10-minute connectivity to Central Delhi (CP, ITO) and Noida Sector 18.',
      types: 'Cooperative Group Housing, DDA Flats',
      image: '/images/jason-dent-w3eFhqXjkZE-unsplash.jpg',
    },
  ];

  const faqs = [
    {
      q: 'Are stilt+4 builder floors in Delhi completely legal and registerable?',
      a: 'Yes, provided the building plan is sanctioned by MCD (Municipal Corporation of Delhi) and has an approved structural safety certificate and valid Occupancy/Completion certificate. Our legal team cross-checks the sanctioned architectural map at the MCD zonal office before advising any client.',
    },
    {
      q: 'What is the stamp duty rate in Delhi?',
      a: 'In Delhi, the stamp duty on property registration is 4% for female buyers and 6% for male buyers. Joint ownership with a woman buyer enjoys a blended rate of 5%. The registration fee is a flat 1% of the circle rate or transaction value.',
    },
    {
      q: 'What is the procedure to convert a DDA leasehold property to freehold?',
      a: 'DDA allows conversion of residential plots and flats from leasehold to freehold upon payment of prescribed conversion charges. Once the Conveyance Deed is executed and registered at the Sub-Registrar office, the property becomes fully freehold with unrestricted transfer rights.',
    },
    {
      q: 'Why should I consult Noida Homes for Delhi properties?',
      a: 'Delhi real estate is plagued by title complexities, unauthorized ground floor extensions, and disputed family partitions. We conduct rigorous 30-year Sub-Registrar title searches and only represent 100% dispute-free freehold properties.',
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
            <span className="text-blue-600 font-semibold">Delhi</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide">
                <CheckBadgeIcon className="w-4 h-4 text-blue-600" />
                Freehold Title Guarantee • 3,200+ Verified Delhi Properties
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight tracking-tight">
                Luxury Builder Floors & Homes in <span className="text-blue-600">Delhi</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                The heartbeat of the national capital. From bespoke stilt+4 luxury builder floors in
                <strong> South Delhi</strong> to planned cooperative societies in <strong>Dwarka</strong> and prime freehold
                properties across established colonies. <strong>Noida Homes</strong> delivers unmatched legal due diligence and authentic market pricing.
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
                  href="https://wa.me/919810323414?text=Hi%20Noida%20Homes,%20I%20am%20looking%20for%20properties%20in%20Delhi%20(South%20Delhi%20/%20Dwarka%20/%20Builder%20Floors)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">3,200+</div>
                  <div className="text-xs text-gray-500 font-medium">Verified Units</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-xs text-gray-500 font-medium">Freehold Scrutiny</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">MCD</div>
                  <div className="text-xs text-gray-500 font-medium">Sanctioned Plans</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Zero</div>
                  <div className="text-xs text-gray-500 font-medium">Title Ambiguity</div>
                </div>
              </div>
            </div>

            {/* Inquire Card */}
            <div className="lg:col-span-5">
              <QuickInquiryCard
                title="Delhi Property Inquiry"
                badge="Priority Desk"
                subtitle="Specify your preferred pocket in Delhi and budget for a handpicked selection of clear-title options."
                typeLabel="Location in Delhi"
                typeOptions={['South Delhi (GK/Vasant Vihar)', 'Dwarka Sub-City', 'West Delhi (Punjabi Bagh)', 'East Delhi / Mayur Vihar']}
                budgetOptions={['₹1 Cr - ₹2.5 Cr', '₹2.5 Cr - ₹5 Cr', '₹5 Cr - ₹10 Cr', '₹10 Cr+']}
                buttonText="Receive Delhi Shortlist"
                serviceContext="Properties in Delhi"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ZONES SPOTLIGHT */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Territorial Guide</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Featured Residential Zones Across Delhi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {delhiZones.map((z) => (
              <div
                key={z.name}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={z.image}
                    alt={z.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {z.badge}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg">
                    {z.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {z.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{z.desc}</p>
                    <div className="mt-4 pt-3 border-t border-gray-100 text-xs text-gray-500 font-medium">
                      Typical Assets: {z.types}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href="https://wa.me/919810323414?text=Hi,%20I%20want%20to%20view%20verified%20builder%20floors%20in%20"
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      <span>Explore Verified Floors</span>
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
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Delhi Property FAQs</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Frequently Asked Questions About Delhi Real Estate
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
