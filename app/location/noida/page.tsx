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
  HomeModernIcon,
  SparklesIcon,
  ArrowRightIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import QuickInquiryCard from '@/app/components/QuickInquiryCard';

export const metadata: Metadata = {
  title: 'Properties in Noida | Luxury Apartments, Villas & Commercial | Noida Homes',
  description:
    'Explore verified flats, luxury penthouses, and commercial spaces in Noida. Sector 150, Expressway, Sector 75, and Sector 128 with transparent pricing and RERA verification.',
  alternates: {
    canonical: '/location/noida',
  },
};

export default function NoidaLocationPage() {
  const sectors = [
    {
      name: 'Sector 150 (Green Sports City)',
      badge: 'Ultra Luxury & Low Density',
      price: '₹12,500 - ₹18,500 / sq.ft',
      desc: 'The greenest sector in NCR with 80% open recreational space, 42-acre Shaheed Bhagat Singh Park, 9-hole golf course, and signal-free connectivity to the upcoming Jewar International Airport.',
      projects: ['ATS Pristine & Le Grandiose', 'Godrej Palm Retreat', 'Tata Destination 150', 'Samridhi Daksh Avenue'],
      image: '/images/avi-waxman-f9qZuKoZYoY-unsplash.jpg',
    },
    {
      name: 'Sector 128 (Expressway Golf Corridor)',
      badge: 'Bespoke Luxury',
      price: '₹16,000 - ₹26,000 / sq.ft',
      desc: 'Home to the iconic 18-hole Jaypee Greens Golf Course, premier multi-specialty hospitals (Jaypee Hospital), and top corporate hubs. Preferred by senior corporate executives and HNIs.',
      projects: ['Kalpataru Vista', 'Jaypee Greens Pavilion Court', 'Mahagun Manorialle', 'Sultanat Villas'],
      image: '/images/dillon-kydd-2keCPb73aQY-unsplash.jpg',
    },
    {
      name: 'Central Noida (Sectors 74 - 79)',
      badge: 'Family Favorite & Metro Connected',
      price: '₹8,500 - ₹13,500 / sq.ft',
      desc: 'Fully established residential belt with 100% operational social infrastructure — walking access to Sector 76 Metro station, North Country mall, top CBSE schools, and lively markets.',
      projects: ['Supertech Capetown', 'Mahagun Moderne', 'Civitech Sampriti', 'Gaur Grandeur'],
      image: '/images/francesca-tosolini-lLDh9JppH2c-unsplash.jpg',
    },
    {
      name: 'Sector 62 & 63 (Commercial & IT Capital)',
      badge: 'High Rental Yield',
      price: '₹7,500 - ₹12,000 / sq.ft',
      desc: 'Institutional powerhouse housing multinational tech campuses, institutional universities, and Blue Line Metro connectivity. Unbeatable 5% - 7% commercial rental yields.',
      projects: ['SVG Galleria', 'Stellar IT Park', 'Logix Cyber Park', 'The Corenthum'],
      image: '/images/danist-soh-GqaOP6wsCQ0-unsplash.jpg',
    },
  ];

  const priceTrends = [
    { sector: 'Sector 150 (Sports City)', config: '3 & 4 BHK Luxury', avgPrice: '₹1.8 Cr - ₹4.5 Cr', rental: '₹35k - ₹75k/mo', growth: '+16% YoY' },
    { sector: 'Sector 128 / 137 Expressway', config: '2 & 3 BHK High-rise', avgPrice: '₹1.1 Cr - ₹2.8 Cr', rental: '₹26k - ₹55k/mo', growth: '+14% YoY' },
    { sector: 'Sector 75 / 76 / 78 Central', config: '2, 3 & 4 BHK Flats', avgPrice: '₹95 L - ₹2.2 Cr', rental: '₹22k - ₹48k/mo', growth: '+12% YoY' },
    { sector: 'Sector 143 / 144 Aqua Line', config: '2 & 3 BHK Apartments', avgPrice: '₹80 L - ₹1.7 Cr', rental: '₹18k - ₹36k/mo', growth: '+15% YoY' },
    { sector: 'Sector 107 / 104 Prime', config: 'Luxury Residences', avgPrice: '₹2.2 Cr - ₹6.5 Cr', rental: '₹45k - ₹90k/mo', growth: '+18% YoY' },
  ];

  const faqs = [
    {
      q: 'Why is Noida considered the top investment destination in Delhi NCR right now?',
      a: 'Noida benefits from unmatched planned infrastructure: 6-lane signal-free expressways, underground utilities, operational Aqua Line and Blue Line metro networks, and the upcoming Jewar Noida International Airport (operational phase 1 nearing completion). Capital appreciation along the Expressway has consistently outperformed other NCR regions over the last 3 years.',
    },
    {
      q: 'What is the land ownership structure in Noida?',
      a: 'Residential and commercial properties in Noida are generally held on a 90-year leasehold granted by the New Okhla Industrial Development Authority (NOIDA). Transfers are fully legal, registerable, and mortgageable through bank home loans. Sub-lease deeds or transfer memorandums are executed at the Sub-Registrar office.',
    },
    {
      q: 'Which sectors in Noida are best for end-use families?',
      a: 'For families seeking ready schools, local markets, and immediate metro access, Central Noida (Sectors 74 to 79) and Sector 137 offer the highest convenience. For buyers desiring low-density green living with golf courses and sports facilities, Sector 150 and Sector 128 are the top luxury picks.',
    },
    {
      q: 'How does Noida Homes help me buy safely in Noida?',
      a: 'We conduct independent authority dues checks on developer land premiums, inspect RERA completion milestones, negotiate direct-from-builder pricing with zero buyer brokerage on new projects, and coordinate your complete Sub-Registrar registry.',
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
            <span className="text-blue-600 font-semibold">Noida</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide">
                <CheckBadgeIcon className="w-4 h-4 text-blue-600" />
                1,800+ Verified Listings • Noida Authority Approved
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight tracking-tight">
                Premium Homes & Commercial Properties in <span className="text-blue-600">Noida</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                From ultra-luxury green high-rises in <strong>Sector 150</strong> to ready family townships in
                <strong> Central Noida</strong> and corporate assets along the <strong>Noida-Greater Noida Expressway</strong>.
                Discover verified properties with clean registry status, transparent price trends, and zero brokerage on new developer bookings.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="tel:+919810323414"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>Noida Expert: +91 98103 23414</span>
                </Link>
                <a
                  href="https://wa.me/919810323414?text=Hi%20Noida%20Homes,%20I%20am%20looking%20for%20verified%20properties%20in%20Noida.%20Please%20share%20shortlisted%20options."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>WhatsApp Shortlist</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">1,800+</div>
                  <div className="text-xs text-gray-500 font-medium">Verified Units</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">+14%</div>
                  <div className="text-xs text-gray-500 font-medium">Annual Capital Growth</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Aqua & Blue</div>
                  <div className="text-xs text-gray-500 font-medium">Metro Connectivity</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">30 Mins</div>
                  <div className="text-xs text-gray-500 font-medium">To Jewar Airport</div>
                </div>
              </div>
            </div>

            {/* Inquire Card */}
            <div className="lg:col-span-5">
              <QuickInquiryCard
                title="Noida Property Consultation"
                badge="Direct Connect"
                subtitle="Tell us your preferred sector and budget. Our senior Noida specialist will share a curated list of ready-to-move and new-launch units."
                typeLabel="Target Sector"
                typeOptions={['Sector 150 (Sports City)', 'Sector 128 / Expressway', 'Central Noida (74-79)', 'Sector 137 / 143 Aqua Line', 'Sector 62 IT Hub', 'Any Prime Sector']}
                budgetOptions={['₹75 Lakhs - ₹1.2 Cr', '₹1.2 Cr - ₹2.5 Cr', '₹2.5 Cr - ₹5 Cr', '₹5 Cr+']}
                buttonText="Receive Noida Shortlist"
                serviceContext="Properties in Noida"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR SPOTLIGHT */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Micro-Market Guide</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Featured Living & Investment Sectors in Noida
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Each sector in Noida carries distinct livability advantages, infrastructure density, and capital growth velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sectors.map((sec) => (
              <div
                key={sec.name}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={sec.image}
                    alt={sec.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {sec.badge}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg">
                    {sec.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {sec.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{sec.desc}</p>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="text-xs font-semibold uppercase text-gray-400 mb-2">Prominent Projects</div>
                      <div className="grid grid-cols-2 gap-2">
                        {sec.projects.map((proj) => (
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
                      href="https://wa.me/919810323414?text=Hi,%20I%20want%20to%20explore%20properties%20in%20"
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      <span>Explore Sector Listings</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contect_us"
                      className="text-xs font-medium text-gray-500 hover:text-gray-800"
                    >
                      Book Site Tour
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE BENCHMARK TABLE */}
      <section className="py-16 lg:py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Market Intelligence</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Noida Property Price & Rental Index (2026)
            </h2>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-gray-100 text-gray-900 font-bold uppercase text-xs">
                  <tr>
                    <th className="py-4 px-6">Sector / Micro-Market</th>
                    <th className="py-4 px-6">Dominant Configuration</th>
                    <th className="py-4 px-6">Average Purchase Range</th>
                    <th className="py-4 px-6">Monthly Rental Range</th>
                    <th className="py-4 px-6">Appreciation Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {priceTrends.map((row, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">{row.sector}</td>
                      <td className="py-4 px-6">{row.config}</td>
                      <td className="py-4 px-6 font-bold text-gray-900">{row.avgPrice}</td>
                      <td className="py-4 px-6 text-emerald-600 font-medium">{row.rental}</td>
                      <td className="py-4 px-6 font-semibold text-blue-600">{row.growth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Local Knowledge</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Frequently Asked Questions About Buying in Noida
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 open:shadow-md transition-all"
              >
                <summary className="flex items-center justify-between font-bold text-gray-900 cursor-pointer list-none text-base">
                  <span>{faq.q}</span>
                  <span className="text-blue-600 font-bold ml-4 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed pt-3 border-t border-gray-200">
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
