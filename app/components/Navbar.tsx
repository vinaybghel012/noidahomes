'use client';

import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  ChevronDownIcon,
  HomeIcon,
  BuildingOffice2Icon,
  KeyIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  ScaleIcon,
  MapPinIcon,
  SparklesIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavDropdownItem {
  name: string;
  href: string;
  description: string;
  badge?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface NavItem {
  name: string;
  href: string;
  dropdown?: NavDropdownItem[];
  megaType?: 'services' | 'locations';
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    {
      name: 'Services',
      href: '/services',
      megaType: 'services',
      dropdown: [
        {
          name: 'Buy Property',
          href: '/services/buy-property',
          description: 'Verified apartments, luxury villas & plots with 0% buyer fee',
          badge: 'Popular',
          icon: HomeIcon,
        },
        {
          name: 'Sell Property',
          href: '/services/sell-property',
          description: 'CMA valuation, pre-screened buyers & maximum market price',
          badge: 'Quick Sale',
          icon: BanknotesIcon,
        },
        {
          name: 'Rent Assistance',
          href: '/services/rent-assistance',
          description: 'Corporate leasing, police verification & registered agreements',
          icon: KeyIcon,
        },
        {
          name: 'Home Loan Support',
          href: '/services/home-loan',
          description: 'Lowest rates from 8.40% across SBI, HDFC & ICICI Bank',
          badge: 'From 8.4%',
          icon: BanknotesIcon,
        },
        {
          name: 'Property Management',
          href: '/services/property-management',
          description: 'Quarterly video audits, rent escrow & maintenance for NRIs',
          badge: 'NRI Desk',
          icon: BuildingOffice2Icon,
        },
        {
          name: 'Legal Assistance',
          href: '/services/legal-assistance',
          description: '30-year title searches, RERA verification & registry execution',
          icon: ScaleIcon,
        },
      ],
    },
    {
      name: 'Locations',
      href: '/location',
      megaType: 'locations',
      dropdown: [
        {
          name: 'Noida',
          href: '/location/noida',
          description: 'Sector 150, 128, 75, Expressway & Aqua Line corridors',
          badge: '1,800+ Units',
          icon: MapPinIcon,
        },
        {
          name: 'Greater Noida',
          href: '/location/greater-noida',
          description: 'Gaur City (Ext.), Pari Chowk & Yamuna Expressway plots',
          badge: '1,200+ Units',
          icon: MapPinIcon,
        },
        {
          name: 'Gurugram',
          href: '/location/gurugram',
          description: 'Golf Course Extension, Dwarka Expressway & Cyber City',
          badge: '2,500+ Units',
          icon: MapPinIcon,
        },
        {
          name: 'Delhi',
          href: '/location/delhi',
          description: 'South Delhi luxury builder floors, Dwarka & Freehold pockets',
          badge: '3,200+ Units',
          icon: MapPinIcon,
        },
        {
          name: 'Ghaziabad',
          href: '/location/ghaziabad',
          description: 'Indirapuram, Vaishali, Kaushambi & Delhi-Meerut Expressway',
          badge: '1,100+ Units',
          icon: MapPinIcon,
        },
        {
          name: 'Faridabad',
          href: '/location/faridabad',
          description: 'Greater Faridabad, Neharpar, Sector 14-15 & Surajkund',
          badge: '900+ Units',
          icon: MapPinIcon,
        },
      ],
    },
    { name: 'Contact Us', href: '/contect_us' },
  ];

  const toggleMobileDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center" aria-label="Noida Homes - Real Estate Homepage">
              <div className="relative w-40 sm:w-44 h-14 sm:h-16">
                <Image
                  src="/images/reallogoo1.webp"
                  alt="Noida Homes - Real Estate Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP MENU WITH MEGA MENUS */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setHoveredMenu(item.name)}
                  onMouseLeave={() => item.dropdown && setHoveredMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-2 font-medium transition ${
                      hoveredMenu === item.name ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDownIcon
                        className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                          hoveredMenu === item.name ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* MEGA MENU DROPDOWN */}
                  {item.dropdown && hoveredMenu === item.name && (
                    <div
                      className={`absolute top-full -left-20 bg-white shadow-2xl rounded-2xl border border-gray-100 animate-fadeIn z-50 overflow-hidden ${
                        item.megaType === 'services' || item.megaType === 'locations'
                          ? 'w-[580px]'
                          : 'w-72'
                      }`}
                    >
                      {/* Top Header Strip */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50/40 px-6 py-3 border-b border-gray-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-800 uppercase tracking-wider flex items-center gap-1.5">
                          <SparklesIcon className="w-3.5 h-3.5 text-blue-600" />
                          {item.name === 'Services' ? 'Our Dedicated Services' : 'Explore Top NCR Cities'}
                        </span>
                        <Link
                          href={item.href}
                          onClick={() => setHoveredMenu(null)}
                          className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition flex items-center gap-1"
                        >
                          <span>{item.name === 'Services' ? 'All Services' : 'All 15+ Locations'}</span>
                          <ArrowRightIcon className="w-3 h-3" />
                        </Link>
                      </div>

                      {/* 2-Column Grid */}
                      <div className="p-3 grid grid-cols-2 gap-2">
                        {item.dropdown.map((sub) => {
                          const Icon = sub.icon || HomeIcon;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setHoveredMenu(null)}
                              className="p-3 rounded-xl hover:bg-blue-50/80 transition-all group flex items-start gap-3 border border-transparent hover:border-blue-100"
                            >
                              <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                                    {sub.name}
                                  </span>
                                  {sub.badge && (
                                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                                      {sub.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
                                  {sub.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Bottom Quick Advice CTA */}
                      <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex items-center justify-between text-xs">
                        <span className="text-gray-600">
                          Need customized assistance?
                        </span>
                        <Link
                          href="tel:+919810323414"
                          className="text-blue-700 font-bold hover:underline flex items-center gap-1"
                        >
                          <PhoneIcon className="w-3.5 h-3.5" />
                          <span>Call: +91 98103 23414</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="tel:+919810323414"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 text-sm font-semibold transition"
              >
                <PhoneIcon className="h-4 w-4 text-blue-600" />
                <span>+91 98103 23414</span>
              </Link>
              <Link
                href="/contect_us"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-700 shadow-sm transition"
              >
                Get Consultation
              </Link>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU ACCORDION */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-gray-100 pb-2">
                  <div className="flex justify-between items-center py-2">
                    <Link
                      href={item.href}
                      onClick={() => !item.dropdown && setIsOpen(false)}
                      className="font-semibold text-gray-800 text-base"
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="p-1.5 text-gray-500 hover:text-blue-600"
                        aria-label={`Toggle ${item.name} dropdown menu`}
                      >
                        <ChevronDownIcon
                          className={`h-5 w-5 transition-transform ${
                            activeDropdown === item.name ? 'rotate-180 text-blue-600' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.dropdown && activeDropdown === item.name && (
                    <div className="ml-2 mt-2 space-y-1.5 border-l-2 border-blue-500 pl-3">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm text-gray-700 hover:text-blue-600 font-medium"
                        >
                          <div className="flex items-center justify-between">
                            <span>{sub.name}</span>
                            {sub.badge && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                                {sub.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-gray-400 mt-0.5 line-clamp-1">{sub.description}</div>
                        </Link>
                      ))}
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="inline-block py-1.5 text-xs font-bold text-blue-600 hover:underline"
                      >
                        View All {item.name} →
                      </Link>
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Direct Call & WhatsApp */}
              <div className="pt-4 space-y-2">
                <Link
                  href="tel:+919810323414"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>Call: +91 98103 23414</span>
                </Link>
                <a
                  href="https://wa.me/919810323414"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* FADE ANIMATION */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.18s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </>
  );
}
