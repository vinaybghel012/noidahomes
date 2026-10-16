import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  DocumentCheckIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  PhoneIcon,
  ScaleIcon,
  ExclamationTriangleIcon,
  FolderOpenIcon,
  ArrowRightIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import QuickInquiryCard from '@/app/components/QuickInquiryCard';

export const metadata: Metadata = {
  title: 'Real Estate Legal Assistance in Noida & NCR | Title Search, RERA & Registry',
  description:
    'Protect your investment with experienced property advocates. 30-year title searches, builder-buyer agreement vetting, authority dues clearance, and registry execution in Noida & Delhi NCR.',
  alternates: {
    canonical: '/services/legal-assistance',
  },
};

export default function LegalAssistancePage() {
  const legalServices = [
    {
      title: '30-Year Title Search & Due Diligence',
      icon: FolderOpenIcon,
      desc: 'We trace the historical lineage of ownership back 30 years through the Sub-Registrar records to ensure zero disputed co-owners, unresolved family partitions, or illegal transfers.',
    },
    {
      title: 'Builder-Buyer Agreement (BBA) Vetting',
      icon: ScaleIcon,
      desc: 'Builders often slip unfair clauses into pre-printed contracts. We review penalty parity for delays, escalation liabilities, force majeure terms, and super area loading disclosures.',
    },
    {
      title: 'Authority Land Dues & TM Verification',
      icon: DocumentCheckIcon,
      desc: 'We independently verify whether the builder has paid developmental land dues to NOIDA, GNIDA, or YEIDA, preventing painful registry freezes after you have committed funds.',
    },
    {
      title: 'Sub-Registrar Registry & Biometric Execution',
      icon: CheckBadgeIcon,
      desc: 'Our legal coordinators handle online stamp duty e-challan generation, sub-registrar token booking, document drafting, witness management, and physical registration day presence.',
    },
  ];

  const redFlags = [
    {
      title: 'Unsettled Authority Land Dues',
      desc: 'Many high-profile towers in Noida & Greater Noida face delayed registries because developers owe billions in overdue authority lease premiums.',
    },
    {
      title: 'Active NCLT or Consumer Court Cases',
      desc: 'We cross-verify corporate insolvency petitions (IBC) and group consumer litigation against the promoter before you release booking tokens.',
    },
    {
      title: 'Missing Environmental & Fire NOCs',
      desc: 'Units delivered without formal Occupancy Certificates (OC) often lack final fire safety or pollution control board clearances, risking future sealing.',
    },
    {
      title: 'Unapproved Architectural Layout Changes',
      desc: 'We cross-check whether the tower you are purchasing was built strictly according to the sanctioned architectural map approved by local authorities.',
    },
  ];

  const faqs = [
    {
      q: 'What is an Encumbrance Certificate (Bar-Mukti Praman Patra)?',
      a: 'An Encumbrance Certificate (EC) proves that the property is completely free from mortgages, unpaid legal liens, or registered court attachments. It is the primary legal shield verifying that the seller holds undisputed right to transfer title.',
    },
    {
      q: 'What is the key difference between Freehold and Leasehold property in NCR?',
      a: 'In Delhi, most established colonies and DDA plots are Freehold (perpetual ownership). In Noida and Greater Noida, the authorities lease the land for 90 or 99 years under a lease deed. Both are fully registerable, but leasehold transfers require Authority Transfer Memorandum (TM) compliance.',
    },
    {
      q: 'Can a builder change the layout or unit number without my consent?',
      a: 'Under Section 14 of the RERA Act, a promoter cannot make any major structural changes, alterations in sanctioned plans, or common amenities without the prior written consent of at least two-thirds of the allottees.',
    },
    {
      q: 'How long does a comprehensive legal title search report take?',
      a: 'A thorough 30-year title search with search receipts from the Sub-Registrar office typically takes 3 to 5 business days, providing you with a signed legal opinion from a practicing property advocate.',
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
            <span className="text-blue-600 font-semibold">Legal Assistance</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold tracking-wide">
                <ShieldCheckIcon className="w-4 h-4 text-blue-600" />
                Senior High Court & Property Advocates • 100% Due Diligence
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight tracking-tight">
                Protect Your Life&apos;s Savings with <span className="text-blue-600">Expert Legal Title Verification</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Property litigation in Delhi NCR is almost always preventable with rigorous upfront scrutiny.
                <strong> Noida Homes</strong> works with veteran real estate lawyers to audit title deeds,
                uncover hidden authority liabilities, vet builder contracts, and ensure your registry is 100% ironclad.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="tel:+919810323414"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>Legal Desk: +91 98103 23414</span>
                </Link>
                <a
                  href="https://wa.me/919810323414?text=Hi%20Noida%20Homes,%20I%20need%20legal%20assistance%20for%20property%20due%20diligence%20/%20agreement%20vetting%20in%20NCR."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">30 Years</div>
                  <div className="text-xs text-gray-500 font-medium">Title Lineage Search</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">2,500+</div>
                  <div className="text-xs text-gray-500 font-medium">Agreements Vetted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">0 Surprises</div>
                  <div className="text-xs text-gray-500 font-medium">Pre-Registry Audits</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-xs text-gray-500 font-medium">RERA & Sub-Registrar Sync</div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Form */}
            <div className="lg:col-span-5">
              <QuickInquiryCard
                title="Book Legal Verification"
                badge="Confidential"
                subtitle="Have a property document or builder agreement you want our legal counsel to review? Share your details."
                typeLabel="Service Needed"
                typeOptions={['30-Year Title Search & Encumbrance Check', 'Builder-Buyer Agreement (BBA) Clause Review', 'Sub-Registrar Registry & Stamp Duty Assistance', 'Authority Transfer Memorandum (TM) Support', 'Succession, Mutation & Will Execution']}
                budgetOptions={[]}
                customFieldLabel="Property Name / Sector / Notes"
                customFieldPlaceholder="e.g. Buying resale flat in Sector 120 Noida"
                customFieldName="legal_notes"
                buttonText="Request Legal Consultation"
                serviceContext="Real Estate Legal Assistance in NCR"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CORE LEGAL OFFERINGS */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Expertise You Can Bank On</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Comprehensive Real Estate Legal Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legalServices.map((serv) => {
              const Icon = serv.icon;
              return (
                <div
                  key={serv.title}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{serv.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{serv.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RED FLAGS WE CATCH */}
      <section className="py-16 lg:py-24 bg-red-50/40 border-y border-red-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-red-600 font-bold text-xs uppercase tracking-wider">Risk Prevention</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              4 Dangerous Red Flags We Uncover Before You Pay
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Once money is handed over to an unscrupulous builder or seller, recovering it through courts can take a decade. We ensure you never step into a trap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {redFlags.map((flag) => (
              <div key={flag.title} className="bg-white rounded-2xl p-6 border border-red-200 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <ExclamationTriangleIcon className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <h3 className="text-base font-bold text-gray-900">{flag.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-9">{flag.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Legal Clarity</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Frequently Asked Legal Questions
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
