import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  BanknotesIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  PhoneIcon,
  CurrencyRupeeIcon,
  CalculatorIcon,
  BuildingLibraryIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import EmiCalculator from '@/app/components/Emicalculator';
import QuickInquiryCard from '@/app/components/QuickInquiryCard';

export const metadata: Metadata = {
  title: 'Home Loan Support in Noida & Delhi NCR | Lowest Interest Rates & Fast Sanction',
  description:
    'Compare home loan interest rates from SBI, HDFC, ICICI, and Bank of Baroda. Free eligibility check, APF verification, balance transfer, and zero-hassle documentation.',
  alternates: {
    canonical: '/services/home-loan',
  },
};

export default function HomeLoanPage() {
  const bankPartners = [
    { bank: 'State Bank of India (SBI)', roi: '8.40% onwards', fee: 'Nil to 0.35%', tenure: 'Up to 30 Yrs', maxFunding: 'Up to 90%' },
    { bank: 'HDFC Bank', roi: '8.45% onwards', fee: 'Up to ₹3,000 + GST', tenure: 'Up to 30 Yrs', maxFunding: 'Up to 85%' },
    { bank: 'ICICI Bank', roi: '8.50% onwards', fee: '0.50% or ₹11,000', tenure: 'Up to 30 Yrs', maxFunding: 'Up to 85%' },
    { bank: 'Bank of Baroda', roi: '8.40% onwards', fee: 'Waived in special offers', tenure: 'Up to 30 Yrs', maxFunding: 'Up to 90%' },
    { bank: 'PNB Housing Finance', roi: '8.55% onwards', fee: 'Competitive', tenure: 'Up to 30 Yrs', maxFunding: 'Up to 80%' },
  ];

  const loanChecklist = [
    {
      category: 'For Salaried Professionals',
      docs: [
        'Last 3 months salary slips with company seal',
        'Last 6 months updated bank statement showing salary credits',
        'Form 16 & ITR for the last 2 financial years',
        'PAN Card, Aadhaar Card & Current Address Proof',
      ],
    },
    {
      category: 'For Self-Employed & Business Owners',
      docs: [
        'Last 3 years audited balance sheet & P&L statements with CA seal',
        'Last 3 years ITR with computation of income',
        'Last 12 months current and savings bank account statements',
        'Business registration (GST, MSME, Shop Act or Partnership Deed)',
      ],
    },
  ];

  const faqs = [
    {
      q: 'What is an APF (Approved Project Financial) number and why does it matter?',
      a: 'An APF code is issued by a bank after verifying the builder’s legal title, environmental clearances, and sanctioned building plans. If a project has an APF code from top banks like SBI or HDFC, individual loan sanction happens within 3 to 5 working days with minimal legal scrutiny.',
    },
    {
      q: 'Can I get a home loan if the project registry is delayed or pending?',
      a: 'Yes. If the builder has an active tripartite agreement with the lending bank, loans can be disbursed in milestones based on construction progress or under ready-to-move builder sub-lease structures. Our finance desk matches you with banks that permit this.',
    },
    {
      q: 'What are the income tax benefits available on home loans?',
      a: 'Under Section 24(b), you can claim up to ₹2 Lakhs per financial year as deduction against interest paid on a self-occupied property. Under Section 80C, you can claim up to ₹1.5 Lakhs on principal repayment, plus additional stamp duty deductions in the year of purchase.',
    },
    {
      q: 'What minimum CIBIL score is needed for the lowest interest rate?',
      a: 'A CIBIL credit score of 750 or above unlocks the most competitive interest rates (typically 8.40% - 8.50%). Borrowers with scores between 700 and 749 may face an interest surcharge of 0.25% to 0.50% depending on bank policy.',
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
            <span className="text-blue-600 font-semibold">Home Loan Support</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide">
                <CheckBadgeIcon className="w-4 h-4 text-emerald-600" />
                Interest Rates Starting at 8.40%* • Multi-Bank Approval
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 leading-tight tracking-tight">
                Unlock the Best <span className="text-blue-600">Home Loan Deal</span> Without Branch Runarounds
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
                Securing a home loan shouldn&apos;t feel like a full-time job. <strong>Noida Homes</strong> partners directly with
                India&apos;s leading PSU and private lending institutions to provide fast APF verification, doorstep document collection,
                and transparent rate comparisons tailored to your exact profile.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="tel:+919810323414"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <PhoneIcon className="w-5 h-5" />
                  <span>Loan Advisor: +91 98103 23414</span>
                </Link>
                <a
                  href="https://wa.me/919810323414?text=Hi%20Noida%20Homes,%20I%20need%20assistance%20with%20a%20Home%20Loan%20(New%20Sanction%20/%20Balance%20Transfer)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-2xl font-bold text-gray-900">₹350Cr+</div>
                  <div className="text-xs text-gray-500 font-medium">Loans Facilitated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">7 Days</div>
                  <div className="text-xs text-gray-500 font-medium">Avg. Sanction Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">8.40%*</div>
                  <div className="text-xs text-gray-500 font-medium">Starting ROI</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Doorstep</div>
                  <div className="text-xs text-gray-500 font-medium">Document Collection</div>
                </div>
              </div>
            </div>

            {/* Quick Loan Eligibility Form */}
            <div className="lg:col-span-5">
              <QuickInquiryCard
                title="Check Loan Eligibility"
                badge="Free Assessment"
                subtitle="Get your maximum borrowing limit and estimated monthly EMI calculated in minutes from our finance desk."
                typeLabel="Employment Type"
                typeOptions={['Salaried (MNC/Govt/Pvt)', 'Self-Employed Professional', 'Business Owner / Trader', 'NRI Borrower']}
                budgetOptions={[]}
                customFieldLabel="Net Monthly Income"
                customFieldPlaceholder="e.g. ₹1.2 Lakhs"
                customFieldName="monthly_income"
                buttonText="Check Best Bank Offers"
                serviceContext="Home Loan Sanction & Rate Comparison"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EMI CALCULATOR SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <EmiCalculator />
          </div>
        </div>
      </section>

      {/* BANK COMPARISON TABLE */}
      <section className="py-16 lg:py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Comparative Rates</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Leading Bank Home Loan Comparison (2026)
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Rates fluctuate based on RBI repo adjustments and individual CIBIL scores. Here is an overview of current competitive benchmarks.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-gray-100 text-gray-900 font-bold uppercase text-xs">
                  <tr>
                    <th className="py-4 px-6">Lending Institution</th>
                    <th className="py-4 px-6">Interest Rate (P.A.)</th>
                    <th className="py-4 px-6">Processing Fee</th>
                    <th className="py-4 px-6">Max Tenure</th>
                    <th className="py-4 px-6">Max LTV Funding</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {bankPartners.map((item, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">{item.bank}</td>
                      <td className="py-4 px-6 text-emerald-600 font-bold">{item.roi}</td>
                      <td className="py-4 px-6">{item.fee}</td>
                      <td className="py-4 px-6">{item.tenure}</td>
                      <td className="py-4 px-6 font-medium text-gray-900">{item.maxFunding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENT CHECKLIST SECTION */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Hassle-Free Checklist</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2">
              Documents Required for Instant Pre-Approval
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {loanChecklist.map((group) => (
              <div key={group.category} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.docs.map((doc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Loan Guidance</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">
              Frequently Asked Questions on Home Loans
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
