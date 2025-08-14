import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
        
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-gray-400">
            ShopSmart is your premium online store offering a luxury and modern shopping experience.
          </p>
        </div>

        {/* Stay Updated */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-2 py-1 rounded-l bg-gray-800 text-white outline-none"
            />
            <button className="px-3 py-1 bg-yellow-500 text-black rounded-r hover:bg-yellow-400">
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: info@shopsmart.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Location: Placeholder City</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-3 text-xl">
            <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400"><FaWhatsapp /></a>
            <a href="#" className="hover:text-yellow-400"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} ShopSmart. All rights reserved.
      </div>
    </footer>
  );
}
