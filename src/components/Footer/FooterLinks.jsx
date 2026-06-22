import React from "react";
import { Link } from "react-router-dom";
import footerLinksData from "../../data/footerLinksData";

// Map footer link labels to routes
const linkRouteMap = {
  "About Us": "/about",
  Careers: "/careers",
  "Press Releases": "/press-releases",
  "Amazon Science": "/amazon-science",
  Facebook: "/facebook",
  Twitter: "/twitter",
  Instagram: "/instagram",
  "Sell on Amazon": "/sell-amazon",
  "Sell under Amazon Accelerator": "/amazon-accelerator",
  "Fulfilment by Amazon": "/fulfilment",
  "Advertise Your Products": "/advertise",
  "Amazon Pay on Merchants": "/amazon-pay",
  "Your Account": "/account-settings",
  "Returns Centre": "/returns",
  "100% Purchase Protection": "/purchase-protection",
  "Amazon App Download": "/app-download",
  Help: "/help",
};

function FooterLinks() {
  return (
    <div className="bg-gray-800 text-white py-12 px-6 flex justify-center border-b border-[#3a4553]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 lg:gap-24 w-full max-w-5xl">
        {footerLinksData.map((section) => (
          <div key={section.title} className="flex flex-col space-y-2">
            <h3 className="font-bold text-[16px] mb-2">{section.title}</h3>
            {section.links.map((link) => (
              <Link
                key={link.label}
                to={linkRouteMap[link.label] || "/not-found"}
                className="text-[14px] text-gray-300 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterLinks;
