import React from 'react';

const ProfileForm = () => {
  return (
    <div className="w-[80%] mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center mb-6">Update Profile</h2>
      <form className="space-y-6">
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7BC00]"
            placeholder="Your Name"
            required
          />
        </div>

        {/* Email and Telephone Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7BC00]"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Telephone Field */}
          <div className="flex flex-col">
            <label htmlFor="telephone" className="text-lg font-semibold mb-2">Telephone</label>
            <input
              type="tel"
              id="telephone"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7BC00]"
              placeholder="Your Telephone"
              required
            />
          </div>
        </div>

        {/* Password and Confirm Password Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7BC00]"
              placeholder="Your Password"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-lg font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7BC00]"
              placeholder="Confirm Your Password"
              required
            />
          </div>
        </div>

        {/* Address Field */}
        <div className="flex flex-col">
          <label htmlFor="address" className="text-lg font-semibold mb-2">Address</label>
          <input
            type="text"
            id="address"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F7BC00]"
            placeholder="Your Address"
            required
          />
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-[#F7BC00] text-white px-6 py-3 rounded-lg hover:bg-[#f7bd00c0] w-full sm:w-auto"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
