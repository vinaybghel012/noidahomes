import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  BuildingOfficeIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
  VideoCameraIcon,
  BanknotesIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import QuickInquiryCard from '@/app/components/QuickInquiryCard';

export const metadata: Metadata = {
  title: 'Property Management Services in Noida & NCR | NRI Asset Care',
  description:
    'Complete end-to-end property management for NRIs and outstation landlords in Noida & Delhi NCR. Regular video audits, tenant handling, maintenance, and timely rent escrow.',
  alternates: {
    canonical: '/services/property-management',
  },
};

export default function PropertyManagementPage() {
  const servicePillars = [
    {
      title: 'Tenant Lifecycle & Screening',
      icon: ShieldCheckIcon,
      desc: 'We manage everything from advertising vacant units and vetting corporate tenant profiles to drafting registered agreements and enforcing prompt monthly rent remittance.',
    },
    {
      title: 'Quarterly Video & Photographic Audits',
      icon: VideoCameraIcon,
      desc: 'Living miles away in Dubai, Singapore, or the US? Receive detailed high-definition 360-degree video inspection reports every quarter documenting your asset condition.',
    },
    {
      title: 'Routine Maintenance & Emergency Repairs',
      icon: WrenchScrewdriverIcon,
      desc: 'From plumbing seepage and electrical faults to AC servicing and deep repainting, our vetted team of licensed technicians resolves repairs with transparent vendor bills.',
    },
    {
      title: 'Society Dues & Utility Bill Custody',
      icon: BanknotesIcon,
      desc: 'Never worry about power disconnections or penalty notices. We ensure society maintenance charges, electricity bills, and annual municipal property taxes are paid on time.',
    },
  ];

  const packages = [
    {
      name: 'Vacant Property Care',
      ideal: 'For owners holding vacant units for capital appreciation',
      price: '₹2,499 / month',
      features: [
        'Monthly physical key inspection',
        'Dusting, ventilation & pest-watch check',
        'Electricity, water & maintenance bill management',
        'Representation at society owner meetings / AGMs',
        'Quarterly photo & video status report',
      ],
    },
    {
      name: 'Full Rental Management',
      ideal: 'For landlords seeking passive, hands-off monthly rental income',
      price: '8.33% of Monthly Rent (1 Month Brokerage/Yr)',
      featured: true,
      features: [
        'Zero vacancy marketing on premium channels',
        'Rigorous corporate background & police verification',
        'Registered 11-month agreement execution',
        'Automated monthly rent collection & tracking',
        'On-demand repair coordination (up to ₹5,000 auto-approved)',
        'Move-in & move-out photographic inventory audit',
      ],
    },
    {
      name: 'NRI Turnkey Custodianship',
      ideal: 'Comprehensive care for high-value villas & penthouses',
      price: 'Custom Annual Retainer',
      features: [
        'Dedicated senior property manager',
        'Tax & Repatriation assistance (Form 15CA/15CB coordination)',
        'Legal title audit & local authority liaison',
        'Full interior upkeep, deep cleaning & air conditioning care',
        'Tenant dispute resolution & legal eviction protection',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How do you transfer rent to NRI bank accounts?',
      a: 'Rents are collected via direct bank transfer into the landlord’s designated Indian NRE or NRO bank account. We can also coordinate with qualified chartered accountants for Form 15CA/15CB certificates if you wish to repatriate funds abroad.',
    },
    {
      q: 'What happens if a repair is needed at my property while I am away?',
      a: 'For minor repairs below ₹2,000, our team handles it immediately and attaches the genuine vendor bill to your monthly statement. For repairs exceeding ₹2,000, we send you photos, video footage, and a transparent quote for your prior approval before commencing work.',
    },
    {
      q: 'How quickly can you find a new tenant when my flat falls vacant?',
      a: 'We begin marketing 30 days prior to the current tenant’s notice expiry. In popular high-demand sectors (such as Sector 137, 75, 78, 150, or Gaur City), we typically secure a verified replacement tenant within 15 to 25 days of vacancy.',
    },
    {
      q: 'Do you attend society builder meetings or RWA AGMs on my behalf?',
      a: 'Yes. Under our property management mandate, we can represent you at society Annual General Meetings (AGMs) or collect official society correspondence and update you immediately.',
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
            <span className="text-blue-600 font-semibold">Property Management</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide">
                <GlobeAltIcon className="w-4 h-4 text-blue-600" />
                Trusted by 500+ NRI & Outstation Landlords
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight tracking-tight">
                Complete Peace of Mind for <span className="text-blue-600">NRI & Absentee Landlords</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Holding prime real estate in Noida or Delhi NCR while living in another city or abroad shouldn&apos;t mean sleepless nights.
                <strong> Noida Homes</strong> acts as your dedicated local custodian — protecting your keys, maintaining your home,
                and ensuring flawless rental returns without you having to travel.
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
                  href="https://wa.me/919810323414?text=Hi%20Noida%20Homes,%20I%20am%20an%20NRI/Outstation%20owner.%20I%20need%20property%20management%20services%20for%20my%20home%20in%20NCR."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-xs text-gray-500 font-medium">Homes Managed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-xs text-gray-500 font-medium">On-Time Rent Escrow</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Quarterly</div>
                  <div className="text-xs text-gray-500 font-medium">Video Walkthroughs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-500 font-medium">Emergency Repair Desk</div>
                </div>
              </div>
            </div>

            {/* Inquire Card */}
            <div className="lg:col-span-5">
              <QuickInquiryCard
                title="Asset Management Consultation"
                badge="NRI Desk"
                subtitle="Tell us about your property location and current status (Vacant / Tenanted) to receive a customized management proposal."
                typeLabel="Asset Status"
                typeOptions={['Vacant Property (Need Care/Monitoring)', 'Tenanted (Need Rent & Tenant Care)', 'Furnished Villa / Penthouse', 'Commercial Asset']}
                budgetOptions={[]}
                customFieldLabel="Your City/Country & Property Sector"
                customFieldPlaceholder="e.g. Dubai, UAE • ATS Dolce, Greater Noida"
                customFieldName="owner_details"
                buttonText="Request Management Plan"
                serviceContext="NRI Property Management in NCR"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">End-to-End Asset Care</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              How We Safeguard Your High-Value Real Estate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicePillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-16 lg:py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Transparent Plans</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Flexible Management Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-2xl p-8 border ${
                  pkg.featured ? 'border-blue-600 ring-2 ring-blue-600 shadow-xl' : 'border-gray-200 shadow-sm'
                } flex flex-col justify-between relative`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Selected
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{pkg.ideal}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-2xl font-extrabold text-gray-900">{pkg.price}</div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100">
                  <Link
                    href="tel:+919810323414"
                    className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center transition-all ${
                      pkg.featured
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    Select Plan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">NRI & Owner FAQs</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Frequently Asked Questions
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
