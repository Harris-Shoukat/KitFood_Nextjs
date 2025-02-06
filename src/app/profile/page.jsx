import Image from "next/image";
import MyOrderBtn from "../components/MyOrderBtn";
import HorizontalLine from "../components/HorizontalLine";
import UserProfileCard from "../components/UserProfileCard";

const Page = () => {
  return (
    <>
      <div className="relative">
        {/* Image */}
        <Image
          src="/MyorderImg.png"
          alt="img"
          layout="responsive"
          width={1200}
          height={400}
        />

        {/* Breadcrumb Navigation */}
        <h1 className="absolute top-20 left-[6%] text-4xl italic text-white">
          {`Accueil`} <span className="text-black">{` > Profil`}</span>
        </h1>

        {/* Main Title */}
        <h1 className="absolute top-[40%] left-[15%] text-7xl text-white">
          Profil
        </h1>
      </div>
      <div className="w-[80%] mx-auto h-auto mt-16 mb-5">
        <MyOrderBtn />
        <HorizontalLine />
      </div>
      <div className="h-[70vh] md:h-[80vh]">
      <UserProfileCard/>
      </div>
      
    </>
  );
};

export default Page;
