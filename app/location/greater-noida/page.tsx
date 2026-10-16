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
  ChartBarIcon,
  SparklesIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import QuickInquiryCard from '@/app/components/QuickInquiryCard';

export const metadata: Metadata = {
  title: 'Properties in Greater Noida & Noida Extension | Noida Homes',
  description:
    'Discover verified 2, 3 & 4 BHK apartments, luxury villas, and plots in Greater Noida & Noida Extension. Gaur City, Pari Chowk, and Yamuna Expressway developments.',
  alternates: {
    canonical: '/location/greater-noida',
  },
};

export default function GreaterNoidaPage() {
  const hubs = [
    {
      name: 'Greater Noida West (Noida Extension)',
      badge: 'Unbeatable Affordability & Family Living',
      price: '₹5,800 - ₹9,500 / sq.ft',
      desc: 'The most vibrant residential corridor for middle-class and young corporate families. Home to sprawling self-sustained townships like Gaur City, international schools, multi-specialty hospitals, and bustling retail boulevards.',
      projects: ['Gaur City 1 & 2', 'ATS Rhapsody & Nobility', 'Mahagun Mywoods', 'Ace City'],
      image: '/images/shantanu-goyal-nhR-ALn6x-o-unsplash.jpg',
    },
    {
      name: 'Pari Chowk & Established Sectors (Alpha, Gamma, Omega)',
      badge: 'Lush Green Institutional Masterplan',
      price: '₹6,500 - ₹11,000 / sq.ft',
      desc: 'Greater Noida’s foundational hub featuring expansive 60-meter avenues, Grand Venice Mall, Knowledge Park educational zone (50+ universities), and direct interchange to the Yamuna Expressway.',
      projects: ['Jaypee Greens Sun Court', 'Purvanchal Royal City', 'Godrej Golf Links', 'Eldeco Green Meadows'],
      image: '/images/jason-dent-w3eFhqXjkZE-unsplash.jpg',
    },
    {
      name: 'Yamuna Expressway & YEIDA Sectors',
      badge: 'Next Mega Growth Corridor',
      price: '₹4,800 - ₹8,500 / sq.ft',
      desc: 'The gateway to the upcoming Jewar Noida International Airport. Rapid infrastructure development including the F1 Buddh International Circuit, upcoming International Film City, and mega electronic manufacturing clusters.',
      projects: ['Gaur Yamuna City', 'Supertech Upcountry', 'ATS Allure', 'YEIDA Authority Plots'],
      image: '/images/land.jpg',
    },
    {
      name: 'Knowledge Park & Commercial Corridors',
      badge: 'High Student & Corporate Footfall',
      price: '₹6,200 - ₹12,500 / sq.ft',
      desc: 'Over 100,000 students and tech professionals make this corridor a goldmine for studio apartments, student co-living, and high-yield retail shops.',
      projects: ['Gaur City Center', 'Grand Venice Commercial', 'Bhutani City Center', 'Galaxy Blue Sapphire'],
      image: '/images/webaliser-_TPTXZd9mOo-unsplash.jpg',
    },
  ];

  const faqs = [
    {
      q: 'What is the current registry status in Greater Noida West (Noida Extension)?',
      a: 'Following the UP Government’s adoption of the Amitabh Kant Committee recommendations, developers are settling revised authority land dues, resulting in thousands of long-pending registries being unlocked across societies like Gaur City, Ace, and Mahagun. Our legal team cross-checks the exact registry eligibility of each specific tower before you book.',
    },
    {
      q: 'How far is Greater Noida from the upcoming Jewar International Airport?',
      a: 'Pari Chowk is approximately 38 km (about 30-35 minutes via the 6-lane Yamuna Expressway) from the airport terminal. Greater Noida West is approximately 48 km away, easily accessible via the operational Eastern Peripheral Expressway.',
    },
    {
      q: 'Is Greater Noida safe and suitable for young families?',
      a: 'Extremely safe. Greater Noida features modern gated societies with 24/7 CCTV surveillance, boom-barrier access, in-house shopping complexes, power backup, and top schools like DPS, Ryan International, and Lotus Valley operating within the township boundaries.',
    },
    {
      q: 'What are the metro connectivity plans for Greater Noida West?',
      a: 'The Aqua Line extension from Sector 51 Noida to Knowledge Park V (passing through Gaur City, Sector 4, and Sector 12) has received central and state approval, which will provide a direct, seamless metro link to Central Delhi and Noida.',
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
            <span className="text-blue-600 font-semibold">Greater Noida</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide">
                <CheckBadgeIcon className="w-4 h-4 text-emerald-600" />
                Affordable Luxury • Wide Green Planning • 1,200+ Verified Homes
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight tracking-tight">
                Flats, Villas & Commercial Properties in <span className="text-blue-600">Greater Noida & West</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Experience high-quality urban living without the sky-high price tags.
                Whether you want ready-to-move family highrises in <strong>Gaur City</strong>,
                green low-density golf homes near <strong>Pari Chowk</strong>, or strategic plots on the
                <strong> Yamuna Expressway</strong>, <strong>Noida Homes</strong> brings you verified options with zero broker pressure.
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
                  href="https://wa.me/919810323414?text=Hi%20Noida%20Homes,%20I%20am%20interested%20in%20properties%20in%20Greater%20Noida%20/%20Noida%20Extension."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">1,200+</div>
                  <div className="text-xs text-gray-500 font-medium">Verified Units</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">₹45L+</div>
                  <div className="text-xs text-gray-500 font-medium">Starting Price</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">105 Mtr</div>
                  <div className="text-xs text-gray-500 font-medium">Master Road Grids</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">25 Mins</div>
                  <div className="text-xs text-gray-500 font-medium">To Central Noida</div>
                </div>
              </div>
            </div>

            {/* Callback Card */}
            <div className="lg:col-span-5">
              <QuickInquiryCard
                title="Greater Noida Shortlist"
                badge="Free Consultation"
                subtitle="Get verified options with clear registry status and direct developer discounts."
                typeLabel="Preferred Pocket"
                typeOptions={['Greater Noida West (Ext.)', 'Pari Chowk & Alpha/Gamma', 'Yamuna Expressway Corridor', 'Knowledge Park']}
                budgetOptions={['Under ₹50 Lakhs', '₹50 Lakhs - ₹90 Lakhs', '₹90 Lakhs - ₹1.8 Cr', '₹1.8 Cr+']}
                buttonText="Get Greater Noida Shortlist"
                serviceContext="Properties in Greater Noida & West"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REGIONAL HUBS SPOTLIGHT */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Growth Epicenters</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Key Localities in Greater Noida
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hubs.map((hub) => (
              <div
                key={hub.name}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={hub.image}
                    alt={hub.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {hub.badge}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg">
                    {hub.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {hub.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{hub.desc}</p>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="text-xs font-semibold uppercase text-gray-400 mb-2">Prominent Societies</div>
                      <div className="grid grid-cols-2 gap-2">
                        {hub.projects.map((proj) => (
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
                      href="https://wa.me/919810323414?text=Hi,%20I%20want%20to%20know%20more%20about%20properties%20in%20"
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      <span>Explore Verified Flats</span>
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
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Buyer Insights</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Frequently Asked Questions About Greater Noida
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
