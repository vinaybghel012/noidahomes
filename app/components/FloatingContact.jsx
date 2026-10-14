'use client';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Call Button */}
      <a
        href="tel:+919810323414"
        title="Call +91 98103 23414"
        aria-label="Call Noida Homes at +91 98103 23414"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z"
          />
        </svg>

        {/* Hover label */}
        <span className="hidden sm:group-hover:inline-block absolute right-16 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow whitespace-nowrap">
          Call: +91 98103 23414
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919810323414?text=Hi,%20I'm%20interested%20in%20properties%20in%20Noida"
        target="_blank"
        rel="noopener noreferrer nofollow"
        title="Chat on WhatsApp +91 98103 23414"
        aria-label="Chat with Noida Homes on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 animate-bounce-subtle"
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.201-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.634-.929-2.238-.245-.588-.494-.509-.678-.518-.176-.009-.377-.01-.578-.01s-.527.075-.803.377c-.276.301-1.054 1.03-1.054 2.512s1.079 2.914 1.23 3.115c.15.201 2.124 3.243 5.146 4.549.719.311 1.281.497 1.719.636.723.23 1.38.198 1.9-.12.58-.356 1.78-1.045 2.032-2.056.251-1.011.251-1.876.176-2.056-.075-.18-.276-.281-.577-.431zM12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.95.56 3.77 1.53 5.32L2 22l4.82-1.51c1.5 1.02 3.3 1.63 5.22 1.63 5.53 0 10.02-4.49 10.02-10.02C22.06 6.49 17.57 2 12.04 2zm0 18.25c-1.67 0-3.23-.49-4.55-1.34l-.33-.21-3.37 1.06 1.07-3.28-.23-.36c-.95-1.47-1.47-3.19-1.47-5.1 0-4.69 3.82-8.51 8.51-8.51 4.69 0 8.51 3.82 8.51 8.51 0 4.69-3.82 8.51-8.51 8.51z" />
        </svg>

        {/* Hover label */}
        <span className="hidden sm:group-hover:inline-block absolute right-16 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow whitespace-nowrap">
          Chat on WhatsApp: +91 98103 23414
        </span>
      </a>
    </div>
  );
}
