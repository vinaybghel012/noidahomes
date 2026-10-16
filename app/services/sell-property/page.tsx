import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  BanknotesIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  PhoneIcon,
  ChartBarIcon,
  EyeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ClockIcon,
  SparklesIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import QuickInquiryCard from '@/app/components/QuickInquiryCard';

export const metadata: Metadata = {
  title: 'Sell Property in Noida & Delhi NCR | Maximum Valuation & Fast Closures',
  description:
    'Sell your flat, villa, or commercial property in Noida & Delhi NCR at the highest market price. Verified buyers, zero unsolicited spam, and end-to-end documentation.',
  alternates: {
    canonical: '/services/sell-property',
  },
};

export default function SellPropertyPage() {
  const pillars = [
    {
      title: 'Scientific Market Valuation',
      icon: ChartBarIcon,
      desc: 'We don&apos;t guess prices. We analyze recent registered sale deeds in your specific sector, floor rise factor, park-facing premium, and demand trends to determine your maximum achievable selling price.',
    },
    {
      title: 'Pre-Screened, Genuine Buyers',
      icon: UserGroupIcon,
      desc: 'No endless casual window-shoppers disturbing your family. We pre-qualify buyer budgets, verify home loan eligibility, and only schedule serious, ready-to-commit families.',
    },
    {
      title: 'Targeted High-Impact Marketing',
      icon: EyeIcon,
      desc: 'Your property is showcased with professional wide-angle photography, video walk-throughs, and featured promotion across our high-intent buyer database of 20,000+ investors.',
    },
    {
      title: 'Complete Authority & Legal Care',
      icon: DocumentTextIcon,
      desc: 'From applying for Noida/GNIDA Authority Transfer Memorandum (TM) to obtaining society No-Dues, drafting the Agreement to Sell, and handling Sub-Registrar execution — we manage it all.',
    },
  ];

  const resaleDocs = [
    { name: 'Original Allotment & Possession Letter', status: 'Mandatory' },
    { name: 'Tripartite Agreement / Sub-Lease Deed', status: 'Mandatory' },
    { name: 'Society Maintenance & Electricity No-Dues (NOC)', status: 'Required' },
    { name: 'Bank Foreclosure / No-Objection (if home loan active)', status: 'If Applicable' },
    { name: 'Transfer Memorandum (TM) from Authority', status: 'Authority Process' },
    { name: 'PAN Card & Aadhaar of all Co-Owners', status: 'Identity Proof' },
  ];

  const sellSteps = [
    {
      step: '01',
      title: 'Property Inspection & Pricing Strategy',
      text: 'Our senior valuation specialist visits your property, notes custom upgrades, assesses interior condition, and provides an authoritative Comparative Market Analysis (CMA) report.',
    },
    {
      step: '02',
      title: 'HD Media Staging & Digital Launch',
      text: 'We shoot high-resolution photos and a crisp walk-through video, highlighting USP points like open corner views, modular woodwork, and sunlight orientation to make your listing pop.',
    },
    {
      step: '03',
      title: 'Private Buyer Showings & Negotiation',
      text: 'We conduct organized site visits at your convenient time slots. When offers come in, our negotiation experts protect your price floor and secure strong earnest money tokens.',
    },
    {
      step: '04',
      title: 'Sub-Registrar Registry & Secure Fund Receipt',
      text: 'We coordinate the final registry appointment at the Sub-Registrar office, verify full RTGS/bank draft fund clearance before signing, and oversee smooth physical key transfer.',
    },
  ];

  const faqs = [
    {
      q: 'How long does it typically take to sell an apartment in Noida?',
      a: 'If priced realistically according to prevailing market rates, an apartment in prime corridors (such as Sector 137, 75, 78, 128, or Greater Noida West) typically sells within 30 to 60 days. Overpriced properties often stagnate for months, which is why our initial scientific valuation is so critical.',
    },
    {
      q: 'What is a Transfer Memorandum (TM) in Noida/Greater Noida Authority?',
      a: 'In leasehold authority properties in Noida and Greater Noida, the Authority issues a Transfer Memorandum permitting the seller to transfer the leasehold rights to the buyer upon payment of prescribed transfer charges. Our team handles the complete documentation and authority liaison.',
    },
    {
      q: 'How does TDS under Section 194-IA work on property sales?',
      a: 'If the property transaction value exceeds ₹50 Lakhs, the buyer is legally obligated to deduct 1% TDS from the sale consideration and deposit it with the Income Tax Department against the seller’s PAN. We provide clear guidance to ensure proper Form 16B credit receipt.',
    },
    {
      q: 'Can I sell my flat if I still have an ongoing home loan on it?',
      a: 'Yes, this is very common. The buyer’s bank or self-funding will directly clear your outstanding loan balance against a foreclosure letter from your bank, after which original property documents are safely released for the new registry.',
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
            <span className="text-blue-600 font-semibold">Sell Property</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide">
                <CheckBadgeIcon className="w-4 h-4 text-emerald-600" />
                Verified Buyer Network • Maximum Market Price • 0 Hassle
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight tracking-tight">
                Sell Your Property Faster at the <span className="text-blue-600">Right Market Value</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Selling a home shouldn&apos;t mean fielding hundreds of random broker phone calls or dealing with non-serious buyers.
                At <strong>Noida Homes</strong>, we combine data-backed pricing, HD visual marketing, and strict buyer pre-qualification
                to get your property sold smoothly at its peak market valuation.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="tel:+919810323414"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>Call to List: +91 98103 23414</span>
                </Link>
                <a
                  href="https://wa.me/919810323414?text=Hi%20Noida%20Homes,%20I%20want%20to%20sell%20my%20property%20in%20Noida/NCR.%20Please%20guide%20me%20on%20valuation%20and%20process."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">45 Days</div>
                  <div className="text-xs text-gray-500 font-medium">Avg. Closure Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">20,000+</div>
                  <div className="text-xs text-gray-500 font-medium">Active HNI Buyers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-xs text-gray-500 font-medium">Target Price Realized</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-xs text-gray-500 font-medium">Safe Fund Transfer</div>
                </div>
              </div>
            </div>

            {/* Valuation Request Card */}
            <div className="lg:col-span-5">
              <QuickInquiryCard
                title="Request Free Valuation"
                badge="No Obligation"
                subtitle="Get a realistic Comparative Market Analysis (CMA) for your flat, villa, or commercial space from our senior advisor."
                typeLabel="Configuration"
                typeOptions={['2 BHK Flat', '3 BHK Flat', '4 BHK / Penthouse', 'Independent Villa / Kothi', 'Commercial Shop/Office', 'Plot / Land']}
                budgetOptions={[]}
                customFieldLabel="Society / Sector / Location"
                customFieldPlaceholder="e.g. ATS Pristine, Sector 150 Noida"
                customFieldName="seller_location"
                buttonText="Get Free Property Valuation"
                serviceContext="Selling Property in Noida/NCR"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4 PILLARS OF SELLING */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">The Noida Homes Edge</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Why Discerning Sellers Trust Us Over Local Brokers
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Traditional brokers paste your number on random portals, leading to endless nuisance calls. We run an organized, professional campaign for your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-STAGE SELLING ROADMAP */}
      <section className="py-16 lg:py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Execution Process</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              How We Take Your Property from Listing to Bank Credit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sellSteps.map((st) => (
              <div
                key={st.step}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="text-3xl font-black text-blue-600/30 font-mono mb-3">{st.step}</div>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{st.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{st.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENT CHECKLIST */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Documentation Checklist</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
                Paperwork You Need for a Seamless Resale
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Having your paperwork in order speeds up closures and prevents buyers from negotiating price drops based on documentation delays. Our legal team assists in procuring missing NOCs or TM approvals.
              </p>
              <div className="pt-2">
                <Link
                  href="tel:+919810323414"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>Need help getting Authority TM or Society NOC? Talk to us</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-3">
                {resaleDocs.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-gray-100 shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-800">{doc.name}</span>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                      {doc.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Seller FAQs</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Common Questions About Selling Property in Noida
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

      {/* BOTTOM CTA */}
      <section className="py-14 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Get the Best Price for Your Property?</h2>
          <p className="text-blue-100 mt-2 text-sm sm:text-base">
            List your property with Noida Homes today. Experience organized showings, serious offers, and prompt fund settlement.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              href="tel:+919810323414"
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all"
            >
              Call Us: +91 98103 23414
            </Link>
            <Link
              href="/contect_us"
              className="bg-blue-900/60 hover:bg-blue-900 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/20 transition-all"
            >
              Book Evaluation Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
