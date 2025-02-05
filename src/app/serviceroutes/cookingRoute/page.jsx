import Head from 'next/head';
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <Head>
        {/* Import Abeezee font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Abeezee&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="relative">
        {/* Image */}
        <Image
          src="/Rectangle 75.png"
          alt="img"
          layout="responsive"
          width={1400}
          height={400}
        />

        {/* Breadcrumb Navigation */}
        <h1 className="absolute top-20 left-[6%] text-4xl italic text-white">
          {`Accueil  >  Nos services`}{" "}
          <span className="text-black">{` > cuisiner à domicile`}</span>
        </h1>

        {/* Main Title */}
        <h1 className="absolute top-[40%] left-[15%] text-7xl text-white">
          Cuisiner à domicile
        </h1>
      </div>

      {/* Form Wrapper with 90% width */}
      <div className="max-w-[90%] mx-auto mt-8">
        <form className="space-y-8 bg-white p-8 rounded-lg ">
          {/* Top Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <label htmlFor="name" className="block text-xl font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full h-16 p-3 mt-1 text-xl border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D7D6D6]"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-xl font-semibold text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full h-16 p-3 mt-1 text-xl border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D7D6D6]"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-xl font-semibold text-gray-700">
                WhatsApp Number
              </label>
              <input
                type="text"
                id="whatsapp"
                className="w-full h-16 p-3 mt-1 text-xl border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D7D6D6]"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-xl font-semibold text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full h-16 p-3 mt-1 text-xl border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D7D6D6]"
              />
            </div>
          </div>

          {/* Description Field */}
          <div>
            <label htmlFor="description" className="block text-xl font-semibold text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows="10"
              className="w-full p-3 text-xl border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D7D6D6]"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-start w-[30%]">
            <button className="bg-[#F7BC00] w-full text-white px-6 py-4 text-3xl rounded-xl hover:bg-[#f0c022c2] focus:outline-none focus:ring-2 focus:ring-[#ffdd6d]">
              Envoyez
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page;
