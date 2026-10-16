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
  title: 'Properties in Ghaziabad | Indirapuram, Vaishali, Kaushambi & NH-24 | Noida Homes',
  description:
    'Find verified apartments, builder floors, and gated societies in Indirapuram, Vaishali, Kaushambi, and Raj Nagar Extension. 20 mins to Central Delhi via Delhi-Meerut Expressway.',
  alternates: {
    canonical: '/location/ghaziabad',
  },
};

export default function GhaziabadLocationPage() {
  const localities = [
    {
      name: 'Indirapuram (Vaibhav & Ahinsa Khand)',
      badge: 'Crown Jewel of Ghaziabad',
      price: '₹7,200 - ₹12,500 / sq.ft',
      desc: 'The most sought-after family hub in Trans-Hindon Ghaziabad. Features the 25-acre Swarna Jayanti Park, Aditya Mall, Cambridge School, and 5-minute road connectivity to Noida Sector 62 and Blue Line Metro.',
      projects: ['Shipra Neo & Srishti', 'ATS Advantage', 'Amrapali Village', 'Gaur Green City'],
      image: '/images/avi-waxman-f9qZuKoZYoY-unsplash.jpg',
    },
    {
      name: 'Vaishali & Kaushambi',
      badge: 'Zero-Distance Delhi Border & Metro',
      price: '₹8,500 - ₹14,000 / sq.ft',
      desc: 'Direct border adjacency to East Delhi. Walking distance to Anand Vihar ISBT & Railway Station, operational Vaishali Blue Line Metro station, and Max Super Speciality Hospital.',
      projects: ['Ramprastha Greens', 'Mahagun Mosaic', 'Supertech Avantgarde', 'Express Greens'],
      image: '/images/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg',
    },
    {
      name: 'Raj Nagar Extension & NH-24',
      badge: 'Affordable High-Growth Townships',
      price: '₹4,800 - ₹7,800 / sq.ft',
      desc: 'Modern township living connected via the 14-lane Delhi-Meerut Expressway and the Namo Bharat RRTS corridor (Rapid Rail), offering 15-minute high-speed commutes into Anand Vihar and Meerut.',
      projects: ['Wave City', 'KW Srishti', 'Charms Castle', 'SVP Gulmohar'],
      image: '/images/shantanu-goyal-nhR-ALn6x-o-unsplash.jpg',
    },
    {
      name: 'Vasundhara & Surya Nagar',
      badge: 'Quiet Residential Green Pockets',
      price: '₹6,800 - ₹11,200 / sq.ft',
      desc: 'Established housing board master planning featuring independent builder floors, community parks, and direct arterial link road to Mohan Nagar and Indirapuram.',
      projects: ['Olive County', 'Ajnara Pride', 'Sikhyarthi Apartments', 'UPAVP Freehold Plots'],
      image: '/images/bilal-ahmad-_ua9kZBbjuw-unsplash.jpg',
    },
  ];

  const faqs = [
    {
      q: 'How has the 14-lane Delhi-Meerut Expressway impacted Ghaziabad property values?',
      a: 'The expressway has eliminated historical NH-24 traffic bottlenecks, cutting travel times from Indirapuram and Crossings Republik to Akshardham and Central Delhi to just 18 to 25 minutes. This has triggered strong 12% to 15% annual capital appreciation across all adjoining sectors.',
    },
    {
      q: 'Which area is better for daily Delhi commuters: Vaishali or Indirapuram?',
      a: 'Vaishali has the edge in public transit because it has an operational Blue Line Metro station right inside the sector. Indirapuram offers slightly newer, larger gated societies with richer in-house amenities and sits directly between Vaishali and Noida Sector 62.',
    },
    {
      q: 'Are properties in Ghaziabad Freehold or Leasehold?',
      a: 'Unlike Noida which is largely leasehold, vast parts of Ghaziabad (including Ghaziabad Development Authority - GDA plotted schemes, Surya Nagar, and many Trans-Hindon pockets) are Freehold. We verify the exact GDA/Awas Vikas title status before you commit.',
    },
    {
      q: 'How does the Namo Bharat RRTS Rapid Rail benefit Ghaziabad residents?',
      a: 'The operational Regional Rapid Transit System connects Ghaziabad to Sahibabad, Duhai, Modinagar, and Meerut at 160 km/h speeds, with future direct extension to Sarai Kale Khan in Central Delhi, making daily regional commuting faster than driving.',
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
            <span className="text-blue-600 font-semibold">Ghaziabad</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide">
                <CheckBadgeIcon className="w-4 h-4 text-blue-600" />
                1,100+ Verified Homes • Delhi-Meerut Expressway Advantage
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight tracking-tight">
                Flats & Builder Floors in <span className="text-blue-600">Ghaziabad</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Unbeatable road and metro connectivity to Delhi and Noida.
                Explore verified homes in <strong>Indirapuram</strong>, <strong>Vaishali</strong>, <strong>Kaushambi</strong>,
                and modern integrated townships along the <strong>Delhi-Meerut Expressway</strong> with clear legal titles and transparent pricing.
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
                  href="https://wa.me/919810323414?text=Hi%20Noida%20Homes,%20I%20am%20interested%20in%20properties%20in%20Ghaziabad%20(Indirapuram/Vaishali/NH-24)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>WhatsApp Shortlist</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">1,100+</div>
                  <div className="text-xs text-gray-500 font-medium">Verified Units</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">20 Mins</div>
                  <div className="text-xs text-gray-500 font-medium">To Akshardham</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">RRTS</div>
                  <div className="text-xs text-gray-500 font-medium">Namo Bharat Rapid Rail</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">GDA</div>
                  <div className="text-xs text-gray-500 font-medium">Approved Layouts</div>
                </div>
              </div>
            </div>

            {/* Inquire Card */}
            <div className="lg:col-span-5">
              <QuickInquiryCard
                title="Ghaziabad Property Search"
                badge="Free Consultation"
                subtitle="Get a personalized shortlist of verified 2, 3 & 4 BHK apartments in prime Ghaziabad societies."
                typeLabel="Preferred Locality"
                typeOptions={['Indirapuram', 'Vaishali', 'Kaushambi', 'Raj Nagar Extension / NH-24', 'Vasundhara']}
                budgetOptions={['₹45 Lakhs - ₹75 Lakhs', '₹75 Lakhs - ₹1.3 Cr', '₹1.3 Cr - ₹2.5 Cr', '₹2.5 Cr+']}
                buttonText="Receive Ghaziabad Shortlist"
                serviceContext="Properties in Ghaziabad"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOCALITIES SPOTLIGHT */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Top Neighborhoods</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Featured Residential Pockets in Ghaziabad
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localities.map((loc) => (
              <div
                key={loc.name}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {loc.badge}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg">
                    {loc.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {loc.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{loc.desc}</p>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="text-xs font-semibold uppercase text-gray-400 mb-2">Prominent Societies</div>
                      <div className="grid grid-cols-2 gap-2">
                        {loc.projects.map((proj) => (
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
                      href="https://wa.me/919810323414?text=Hi,%20I%20want%20to%20view%20apartments%20in%20"
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
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Ghaziabad Q&A</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Frequently Asked Questions About Buying in Ghaziabad
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
