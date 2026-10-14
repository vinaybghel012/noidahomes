export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://noidahomes.com/#organization",
    "name": "Noida Homes",
    "url": "https://noidahomes.com",
    "logo": "https://noidahomes.com/images/reallogoo1.webp",
    "image": "https://noidahomes.com/images/reallogoo1.webp",
    "description": "Noida Homes is Delhi NCR's trusted real estate consultancy for buying, selling, and renting premium residential and commercial properties in Noida and Greater Noida.",
    "telephone": "+91-9810323414",
    "email": "info@noidahomes.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gaur City Center",
      "addressLocality": "Greater Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201318",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6089,
      "longitude": 77.4267
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Greater Noida" },
      { "@type": "City", "name": "Ghaziabad" },
      { "@type": "AdministrativeArea", "name": "Delhi NCR" }
    ],
    "sameAs": [
      "https://wa.me/919810323414"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://noidahomes.com/#website",
    "url": "https://noidahomes.com",
    "name": "Noida Homes",
    "publisher": {
      "@id": "https://noidahomes.com/#organization"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas in Delhi NCR do you cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cover all major areas in Delhi NCR including Gurugram (all sectors), Noida (all sectors), Greater Noida, Faridabad, Ghaziabad, and all prime locations in Delhi. Our team has extensive knowledge of both established and emerging localities across the National Capital Region."
        }
      },
      {
        "@type": "Question",
        "name": "Do you charge any brokerage fees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For buyers, we offer zero brokerage on most properties. For sellers, we charge a nominal 1% commission only after successful deal closure, which is significantly lower than the standard 2% market rate. There are no hidden charges or upfront fees."
        }
      },
      {
        "@type": "Question",
        "name": "How do you verify property documents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have a dedicated legal team that verifies all property documents including title deeds, encumbrance certificates, RERA registration, building approvals, and tax receipts. We also conduct physical site verification and ensure all documents are legally vetted before listing."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical process for buying a property through you?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our process is simple: 1) Free consultation to understand your requirements 2) Shortlisted property recommendations 3) Site visits 4) Price negotiation 5) Legal verification 6) Documentation & registration 7) Post-sales support. The entire process usually takes 15-30 days."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide home loan assistance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we have tie-ups with 20+ leading banks and NBFCs including HDFC, SBI, ICICI, and Axis Bank. Our loan experts help you get the best interest rates, quick approvals, and handle all documentation. This service is completely free for our customers."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with property valuation for selling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We provide free property valuation services considering factors like location, amenities, market trends, and recent transactions in your area. Our valuation report helps you set the right price and get the best value for your property."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
