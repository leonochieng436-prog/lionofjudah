"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  <>FREE DELIVERY ON ORDERS ABOVE <span className="text-brand-blue">KSh 5,000</span></>,
  <>WE DELIVER <span className="text-brand-blue">COUNTRYWIDE</span></>,
  <><span className="text-brand-blue">100% AUTHENTIC</span> BEAUTY PRODUCTS</>,
  <>ORDER DIRECTLY VIA <span className="text-brand-blue">WHATSAPP</span></>,
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-white py-2.5 text-center text-[11px] font-semibold tracking-[0.15em] text-black sm:text-xs">
      <div key={index} className="animate-fadeIn">
        {MESSAGES[index]}
      </div>
    </div>
  );
}
