'use client';

import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface QuickInquiryCardProps {
  title?: string;
  badge?: string;
  subtitle?: string;
  typeLabel?: string;
  typeOptions?: string[];
  budgetOptions?: string[];
  customFieldLabel?: string;
  customFieldPlaceholder?: string;
  customFieldName?: string;
  buttonText?: string;
  serviceContext?: string;
}

export default function QuickInquiryCard({
  title = 'Request Property Shortlist',
  badge = 'Instant Callback',
  subtitle = 'Tell us what you are looking for. Our senior area advisor will curate a handpicked shortlist within 2 hours.',
  typeLabel = 'Property Type',
  typeOptions = ['2 / 3 BHK Flat', '4 BHK Luxury Apartment', 'Independent Villa', 'Plot / Land', 'Commercial Space'],
  budgetOptions = ['Under ₹50 Lakhs', '₹50 Lakhs - ₹90 Lakhs', '₹90 Lakhs - ₹1.8 Cr', '₹1.8 Cr - ₹3 Cr', '₹3 Cr+'],
  customFieldLabel,
  customFieldPlaceholder,
  customFieldName = 'custom_note',
  buttonText = 'Get Personalized Shortlist',
  serviceContext = 'General Inquiry',
}: QuickInquiryCardProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('user_name') as HTMLInputElement)?.value || '';
    const phone = (form.elements.namedItem('user_phone') as HTMLInputElement)?.value || '';
    const type = (form.elements.namedItem('user_type') as HTMLSelectElement)?.value || '';
    const budget = (form.elements.namedItem('user_budget') as HTMLSelectElement)?.value || '';
    const custom = customFieldLabel
      ? (form.elements.namedItem(customFieldName) as HTMLInputElement)?.value || ''
      : '';

    let text = `Hi Noida Homes, I am ${name} (${phone}). Inquiry regarding ${serviceContext}.`;
    if (type) text += ` Type: ${type}.`;
    if (budget) text += ` Budget: ${budget}.`;
    if (custom) text += ` Note: ${custom}.`;

    const url = `https://wa.me/919810323414?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
          {badge}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 mb-6 leading-relaxed">
        {subtitle}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name</label>
          <input
            name="user_name"
            required
            type="text"
            placeholder="e.g. Rahul Sharma"
            className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number (WhatsApp)</label>
          <input
            name="user_phone"
            required
            type="tel"
            placeholder="e.g. 98103 23414"
            className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>

        {customFieldLabel && (
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">{customFieldLabel}</label>
            <input
              name={customFieldName}
              required
              type="text"
              placeholder={customFieldPlaceholder}
              className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          {typeOptions && typeOptions.length > 0 && (
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">{typeLabel}</label>
              <select
                name="user_type"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white font-medium"
              >
                {typeOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}

          {budgetOptions && budgetOptions.length > 0 && (
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Budget / Limit</label>
              <select
                name="user_budget"
                className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white font-medium"
              >
                {budgetOptions.map((bud) => (
                  <option key={bud} value={bud}>
                    {bud}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>{buttonText}</span>
          <ArrowRightIcon className="w-4 h-4" />
        </button>

        <p className="text-[11px] text-gray-500 text-center">
          🔒 100% Privacy Guaranteed. No spam calls or unsolicited broker pitches.
        </p>
      </form>
    </div>
  );
}
