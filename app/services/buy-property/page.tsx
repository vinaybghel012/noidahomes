import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  HomeIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  PhoneIcon,
  CurrencyRupeeIcon,
  DocumentCheckIcon,
  BuildingOffice2Icon,
  SparklesIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import QuickInquiryCard from '@/app/components/QuickInquiryCard';

export const metadata: Metadata = {
  title: 'Buy Property in Noida & Delhi NCR | Verified Homes & Plots',
  description:
    'Find your ideal home in Noida, Greater Noida, and Delhi NCR with verified RERA documentation, zero brokerage on new projects, and transparent price negotiations.',
  alternates: {
    canonical: '/services/buy-property',
  },
};

export default function BuyPropertyPage() {
  const buyingCategories = [
    {
      title: 'Luxury High-Rise Apartments',
      badge: 'Most Popular',
      price: '₹95 Lakhs - ₹4.5 Crore',
      description:
        'Spacious 2, 3, and 4 BHK residences in gated communities with modern clubhouses, multi-tier security, and panoramic green views along the Expressway.',
      features: ['Sector 150, 128, 75, 137', 'Loaded with 30+ amenities', '80% open green space', 'RERA compliant projects'],
      image: '/images/francesca-tosolini-lLDh9JppH2c-unsplash.jpg',
    },
    {
      title: 'Low-Rise & Independent Floors',
      badge: 'High Privacy',
      price: '₹75 Lakhs - ₹2.8 Crore',
      description:
        'Exclusive floor-wise living for families who value private lift access, reserved stilt parking, and low-density neighborhood charm.',
      features: ['Greater Noida West & Noida', 'Dedicated terrace or stilt rights', 'Lower monthly maintenance', 'Faster possession timelines'],
      image: '/images/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg',
    },
    {
      title: 'Luxury Independent Villas',
      badge: 'Ultra Luxury',
      price: '₹2.2 Crore - ₹8.5 Crore',
      description:
        'Expansive standalone residences and duplex villas nestled within golf communities and private enclaves for distinguished lifestyle living.',
      features: ['Jaypee Greens, Pari Chowk', 'Private lawns & plunge pools', 'Personalized architectural layouts', 'High long-term capital safety'],
      image: '/images/bilal-ahmad-_ua9kZBbjuw-unsplash.jpg',
    },
    {
      title: 'Freehold & Authority Plots',
      badge: 'Custom Build',
      price: '₹45 Lakhs - ₹3 Crore',
      description:
        'Clear-title residential and commercial plots approved by NOIDA, GNIDA, and YEIDA authorities for bespoke construction and generational wealth.',
      features: ['Yamuna Expressway & Greater Noida', '100 - 500 sq. yard options', 'Clear master-plan roads', 'Highest historical appreciation'],
      image: '/images/land.jpg',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Requirement & Budget Alignment',
      description:
        'We sit down with you to understand your real lifestyle needs — school proximity, commute corridors, budget ceiling, and whether you need ready possession or flexible construction-linked payment plans.',
    },
    {
      number: '02',
      title: 'Curated Shortlist & Site Visits',
      description:
        'Instead of taking you to 20 random sites, we filter out 3-4 top verified properties that precisely match your criteria, and arrange private chauffeur-driven visits with floor-plan walkthroughs.',
    },
    {
      number: '03',
      title: 'Legal & Authority Due Diligence',
      description:
        'Our legal team verifies the RERA registration number, Occupancy Certificate (OC), Completion Certificate (CC), and checks whether the developer has cleared all authority land dues.',
    },
    {
      number: '04',
      title: 'Fair Price Negotiation & Booking',
      description:
        'We negotiate directly with developers and owners to unlock competitive price per square foot rates, waiver on car parking, or better payment milestones on your behalf.',
    },
    {
      number: '05',
      title: 'Registry, Banking & Handover',
      description:
        'From home loan sanction coordination to Sub-Registrar office documentation and final key handover, our property consultant stands right beside you till you move in.',
    },
  ];

  const buyerChecklist = [
    {
      title: 'RERA UP/Haryana Verification',
      desc: 'Never commit a rupee before checking the registered project delivery date and approved sanctioned layout on the official RERA portal.',
    },
    {
      title: 'Carpet Area vs Super Area',
      desc: 'Understand the exact loading factor (typically 28% to 35% in NCR) so you know the exact usable private floor area you are paying for.',
    },
    {
      title: 'Authority Land Dues Status',
      desc: 'Particularly in Noida & Greater Noida, we verify whether the builder has settled authority land payments to avoid registry delays later.',
    },
    {
      title: 'Hidden Move-In Charges',
      desc: 'We map out all upcoming expenses upfront: IFMS (Interest Free Maintenance Security), power backup connection, club charges, and dual electricity meter costs.',
    },
  ];

  const faqs = [
    {
      q: 'Do you charge buyers any brokerage fee on new developer projects?',
      a: 'No. On all new developer bookings and pre-launch projects, our consultation, site visits, and purchase guidance are 100% free for buyers. We are paid directly by the developer, and we pass along exclusive negotiated rates and inventory discounts to you.',
    },
    {
      q: 'How do you verify whether a property in Noida is safe to purchase?',
      a: 'We conduct a stringent 4-point verification: (1) RERA active compliance check, (2) Local authority (NOIDA/GNIDA/YEIDA) dues clearance certificate, (3) Encumbrance check confirming title ownership without unauthorized mortgages, and (4) Structural inspection of the society maintenance and water drainage.',
    },
    {
      q: 'Can I get a home loan on properties where builder registry is pending?',
      a: 'Yes, provided the project is approved by major banks (such as SBI, HDFC, ICICI) under an APF (Approved Project Financial) tripartite agreement. Our in-house loan desk guides you through the exact banking criteria to ensure smooth approval.',
    },
    {
      q: 'What is the current stamp duty rate in Uttar Pradesh?',
      a: 'In Uttar Pradesh, the standard stamp duty is 7% of the circle rate or sale agreement value (whichever is higher), plus a 1% registration fee. Women buyers receive a 1% concession on stamp duty up to a property valuation of ₹10 Lakhs.',
    },
  ];

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-blue-50/80 via-white to-gray-50/60 pt-10 pb-16 lg:py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm font-medium text-gray-500 mb-6 space-x-2">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
            <span>/</span>
            <span className="text-blue-600 font-semibold">Buy Property</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide">
                <CheckBadgeIcon className="w-4 h-4 text-blue-600" />
                Zero Brokerage on Builder Projects • 100% RERA Verified
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight tracking-tight">
                Find Your Dream Home in <span className="text-blue-600">Noida & Delhi NCR</span> with Real Peace of Mind
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Buying a home is one of the most emotional and financially significant milestones of your life.
                At <strong>Noida Homes</strong>, we cut through developer marketing jargon, verify legal clear-titles,
                and help you buy verified flats, villas, and plots with transparent pricing and zero surprises at registration.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="tel:+919810323414"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>Call: +91 98103 23414</span>
                </Link>
                <a
                  href="https://wa.me/919810323414?text=Hi%20Noida%20Homes,%20I%20am%20looking%20to%20buy%20a%20property%20in%20Noida/NCR.%20Please%20share%20verified%20options."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">1,500+</div>
                  <div className="text-xs text-gray-500 font-medium">Families Settled</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-xs text-gray-500 font-medium">RERA Compliant</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">₹0</div>
                  <div className="text-xs text-gray-500 font-medium">Buyer Fee on New Homes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">15+ Yrs</div>
                  <div className="text-xs text-gray-500 font-medium">Field Experience</div>
                </div>
              </div>
            </div>

            {/* Right Quick Inquiry Card */}
            <div className="lg:col-span-5">
              <QuickInquiryCard
                title="Request Property Shortlist"
                badge="Instant Callback"
                subtitle="Tell us what you are looking for. Our senior area advisor will curate a handpicked shortlist of 3 verified options within 2 hours."
                typeLabel="Property Type"
                typeOptions={['2 / 3 BHK Flat', '4 BHK Luxury Apartment', 'Independent Villa', 'Plot / Land', 'Commercial Space']}
                budgetOptions={['₹50 Lakhs - ₹80 Lakhs', '₹80 Lakhs - ₹1.5 Crore', '₹1.5 Crore - ₹3 Crore', '₹3 Crore+']}
                buttonText="Get Personalized Shortlist"
                serviceContext="Buying Property in Noida/NCR"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY BUYING CATEGORIES */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Curated Portfolios</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Popular Home Categories in Delhi NCR
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Every home buyer has unique priorities. Here are the four primary property types we actively represent across Noida, Greater Noida, and surrounding hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {buyingCategories.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {item.badge}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-gray-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg">
                    {item.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.description}</p>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="text-xs font-semibold uppercase text-gray-400 mb-2">Key Highlights</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-gray-700">
                            <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      href="https://wa.me/919810323414?text=Hi,%20I%20am%20interested%20in%20exploring%20options%20for%20"
                      className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      <span>Explore Verified Listings</span>
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

      {/* THE 5-STEP SAFE BUYING PROCESS */}
      <section className="py-16 lg:py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Transparent Advisory</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Our 5-Step Safe Home Buying Framework
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              We eliminate the chaos and guesswork from property hunting. Here is how we ensure you buy with complete legal safety and maximum financial efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((st) => (
              <div
                key={st.number}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-blue-600/30 mb-3 font-mono">{st.number}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{st.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{st.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-semibold text-blue-600">
                  <span>Step {st.number} Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYER DUE DILIGENCE CHECKLIST */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
            <div className="max-w-3xl mb-12">
              <span className="bg-blue-500/20 text-blue-300 text-xs font-bold uppercase px-3 py-1 rounded-full border border-blue-400/30">
                Critical Buyer Advisory
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-4">
                What Most Agents Won&apos;t Tell You About Buying in NCR
              </h2>
              <p className="text-blue-200/80 mt-3 text-sm sm:text-base leading-relaxed">
                We believe total transparency creates lifelong trust. When evaluating properties in Noida or Greater Noida, our team conducts stringent audits on these 4 critical parameters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {buyerChecklist.map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheckIcon className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed pl-9">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-300 text-center sm:text-left">
                Want a free legal check on a property you are considering?
              </div>
              <Link
                href="tel:+919810323414"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-md"
              >
                Request Free Title Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Frequently Asked Questions on Buying Property
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

      {/* BOTTOM CTA BANNER */}
      <section className="py-14 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Find Your Perfect Home in Noida?</h2>
          <p className="text-blue-100 mt-2 text-sm sm:text-base">
            Speak directly with our senior consultant today. Get realistic market advice, zero-obligation shortlisted units, and full pricing clarity.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              href="tel:+919810323414"
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all"
            >
              Call +91 98103 23414
            </Link>
            <Link
              href="/contect_us"
              className="bg-blue-800/80 hover:bg-blue-900 text-white font-semibold px-7 py-3.5 rounded-xl border border-blue-400/40 transition-all"
            >
              Visit Our Office
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
