import { useState } from "react";
import ModalConfirmOrder from "./ModalConfirmOrder";

const Map = () => {
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!location || !time) {
      setErrorMessage("Please fill in both delivery location and time.");
      return; // Prevent form submission if data is missing
    }

    setErrorMessage(""); // Clear error message if validation passes
    openModal(); // Open the modal after form validation
  };

  return (
    <div className="h-auto flex justify-center items-start p-5">
      <div className="flex flex-col sm:flex-row w-full max-w-7xl gap-5">
        {/* Map Section */}
        <div className="w-full">
          <div className="relative text-right w-full h-96">
            <iframe
              className="w-full h-full"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Lahore, Punjab, Pakistan&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              title="Map"
            ></iframe>
          </div>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="w-full h-auto sm:w-1/2 p-5 border rounded-lg bg-gray-50 shadow-md"
        >
          <h2 className="text-2xl font-semibold text-center mb-5">
            Delivery Information
          </h2>

          <div className="mb-4">
            <label htmlFor="location" className="block text-lg mb-2">
              Delivery Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter delivery location"
              required
              className="w-full p-3 border border-gray-300 rounded-md text-lg"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="time" className="block text-lg mb-2">
              Delivery Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={handleTimeChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-lg"
            />
          </div>
          <div>
            {/* Show error message if validation fails */}
            {errorMessage && (
              <p className="text-red-500 text-center mb-4">{errorMessage}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white text-lg rounded-md hover:bg-green-600 transition duration-300"
          >
            Confirm Order
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Note: We deliver only in Lahore, Punjab, Pakistan.
          </p>
        </form>
      </div>

      {/* ModalConfirmOrder component with props */}
      <ModalConfirmOrder
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Map;
