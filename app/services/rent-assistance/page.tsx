import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  KeyIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  PhoneIcon,
  HomeModernIcon,
  DocumentCheckIcon,
  UserGroupIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import QuickInquiryCard from '@/app/components/QuickInquiryCard';

export const metadata: Metadata = {
  title: 'Rental Assistance in Noida & Delhi NCR | Verified Tenants & Quality Homes',
  description:
    'Find premium rental homes or reliable corporate tenants in Noida, Greater Noida, and NCR. Complete police verification, legal agreement drafting, and inventory handover.',
  alternates: {
    canonical: '/services/rent-assistance',
  },
};

export default function RentAssistancePage() {
  const rentalCorridors = [
    {
      corridor: 'Sector 137 & Expressway Corridor',
      desc: 'Prime choice for corporate professionals working in Advant Navis, Candor TechSpace, and Oxygen Park. Excellent Aqua Line connectivity and high-end societies.',
      rentRange: '₹22,000 - ₹55,000/mo',
      types: '1 BHK, 2 BHK, 3 BHK Furnished',
    },
    {
      corridor: 'Sector 74 - 79 Central Noida',
      desc: 'Family-friendly central zone with established markets, top schools, sports complexes, and walking access to Sector 76 metro station.',
      rentRange: '₹20,000 - ₹48,000/mo',
      types: '2 BHK, 3 BHK, 4 BHK Penthouses',
    },
    {
      corridor: 'Greater Noida West (Gaur City)',
      desc: 'Budget-friendly, high-amenity township living with vibrant retail centers, CBSE schools, and express connectivity to NH-24 and Noida.',
      rentRange: '₹14,000 - ₹32,000/mo',
      types: '2 BHK, 3 BHK High-rise',
    },
    {
      corridor: 'Sector 62 & 63 Institutional Zone',
      desc: 'Walking distance to major IT headquarters, university campuses, and Blue Line Metro stations. High demand for executive bachelor and couple pads.',
      rentRange: '₹16,000 - ₹38,000/mo',
      types: 'Studio, 1 BHK, 2 BHK Builder Floors',
    },
  ];

  const landlordBenefits = [
    {
      title: 'Stringent Tenant Screening',
      desc: 'We verify corporate employment credentials (work email, ID, company offer letter) and reference checks to protect your home and society reputation.',
    },
    {
      title: 'Police Verification Assistance',
      desc: 'We coordinate the online/offline UP Police tenant verification portal compliance so you stay 100% compliant with local law enforcement regulations.',
    },
    {
      title: 'Registered 11-Month Agreements',
      desc: 'Watertight legal drafting covering lock-in period, annual escalation clauses, painting liabilities, and wear-and-tear definitions to avoid future disputes.',
    },
    {
      title: 'Detailed Inventory Checklist',
      desc: 'We document every light fixture, AC, appliance, and wall condition at move-in and cross-verify during move-out before security deposit settlement.',
    },
  ];

  const faqs = [
    {
      q: 'What is the standard security deposit norm in Noida?',
      a: 'The prevailing standard in residential societies across Noida and Greater Noida is 1 to 2 months of monthly rent as refundable security deposit. High-end fully-furnished apartments may occasionally require 2 to 3 months depending on appliance inventory value.',
    },
    {
      q: 'Is tenant police verification compulsory in Noida/NCR?',
      a: 'Yes, mandatory under police guidelines. Failing to complete tenant verification can invite legal notices from local police authorities. Our team handles the entire documentation and portal filing for our landlords.',
    },
    {
      q: 'Who pays the society move-in and move-out charges?',
      a: 'Most gated societies charge a nominal one-time move-in/move-out shifting charge (usually ₹1,000 - ₹3,000). By standard NCR market practice, this fee is paid directly by the tenant upon shifting.',
    },
    {
      q: 'What is the standard rent agreement tenure and escalation rate?',
      a: 'Residential lease agreements are typically drafted for 11 months with an option to renew. The standard annual rent escalation clause in Delhi NCR is 5% to 10% upon mutual consent.',
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
            <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
            <span>/</span>
            <span className="text-blue-600 font-semibold">Rent Assistance</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide">
                <CheckBadgeIcon className="w-4 h-4 text-blue-600" />
                Verified Tenants • Police Verification • Registered Agreements
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight tracking-tight">
                Hassle-Free <span className="text-blue-600">Rental Assistance</span> for Tenants & Landlords
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Whether you are an IT professional looking for a spotless furnished flat near your office,
                or an apartment owner seeking dignified families who take care of your home like their own,
                <strong> Noida Homes</strong> delivers seamless rental matchmaking with end-to-end legal support.
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
                  href="https://wa.me/919810323414?text=Hi%20Noida%20Homes,%20I%20am%20looking%20for%20rental%20assistance%20(Finding%20a%20home%20/%20Renting%20out%20my%20property)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">3,000+</div>
                  <div className="text-xs text-gray-500 font-medium">Rental Closures</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24-48 Hrs</div>
                  <div className="text-xs text-gray-500 font-medium">Agreement Drafting</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-xs text-gray-500 font-medium">Police Verified</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">0 Disputes</div>
                  <div className="text-xs text-gray-500 font-medium">Solid Legal Clauses</div>
                </div>
              </div>
            </div>

            {/* Quick Rental Request Form */}
            <div className="lg:col-span-5">
              <QuickInquiryCard
                title="Rental Quick Inquiry"
                badge="Direct Connect"
                subtitle="Are you looking to rent a home or rent out your property? Share your basic requirement for an immediate response."
                typeLabel="I Am A"
                typeOptions={['Tenant looking for a flat/home', 'Property Owner wanting to rent out', 'Corporate HR seeking employee housing']}
                budgetOptions={['₹15k - ₹25k / month', '₹25k - ₹40k / month', '₹40k - ₹60k / month', '₹60k+ Luxury']}
                customFieldLabel="Preferred Sector / Notes"
                customFieldPlaceholder="e.g. 2 BHK Furnished in Sec 137"
                customFieldName="rental_notes"
                buttonText="Connect with Rental Specialist"
                serviceContext="Rental Assistance in Noida/NCR"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TOP RENTAL CORRIDORS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Prime Localities</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Top Rental Corridors in Noida & NCR
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Average rentals, connectivity advantages, and typical configurations across key living hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rentalCorridors.map((c) => (
              <div
                key={c.corridor}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {c.corridor}
                  </h3>
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
                    {c.rentRange}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{c.desc}</p>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
                  <span>Available: {c.types}</span>
                  <Link
                    href="https://wa.me/919810323414?text=Hi,%20I%20want%20to%20check%20rental%20flats%20in%20"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    View Available Units →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANDLORD PROTECTION */}
      <section className="py-16 lg:py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">For Property Owners</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              How We Protect Landlords & Eliminate Rental Stress
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {landlordBenefits.map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:shadow-md transition-shadow"
              >
                <ShieldCheckIcon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-base font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Rental Insights</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Frequently Asked Questions About Renting
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
