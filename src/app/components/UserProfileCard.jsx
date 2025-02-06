import React from 'react';
import { FaSignOutAlt, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons
import Image from 'next/image'; // Image component from Next.js

const UserProfileCard = () => {
  return (
    <div className="w-[70%] mx-auto bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start gap-4">
      {/* Image */}
      <div className="flex-shrink-0 w-[60%] sm:w-[40%] md:w-[20%] flex items-center justify-center">
        <Image src="/Rectangle 11.png" alt="Profile" width={200} height={200} className="rounded-xl" />
      </div>

      {/* User Info */}
      <div className="w-full sm:w-[60%] md:w-[60%] flex flex-col justify-between text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold">AKAKPOSSA Adjo kafui</h2>
        <div className="text-gray-600 text-lg mt-2">
          <div className="flex flex-col sm:flex-row md:flex-row justify-center sm:justify-start gap-4">
            {/* Email */}
            <div className="flex text-xl items-center gap-2">
              <FaEnvelope />
              <p> johndoe@example.com</p>
            </div>

            {/* Phone */}
            <div className="flex text-xl items-center gap-2">
              <FaPhoneAlt />
              <p> +123 456 789</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start text-xl items-center gap-2 mt-2">
            {/* On small screens, display icon and text in a row */}
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <p>123 Main St, City, Country</p>
            </div>
          </div>
        </div>
      </div>

      {/* Disconnect Button */}
      <div className="mt-4 flex justify-end w-full">
        <button className="bg-[#F7BC00] text-white px-6 py-2 rounded-xl flex items-center hover:bg-[#f7bd00c0]">
          <FaSignOutAlt className="mr-2" />
          Disconnect
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
