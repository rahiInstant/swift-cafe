import './Banner.css'
const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[600px] background rounded-3xl mt-3">
      <div className="text-[52px] font-bold leading-[65px] text-center w-[70%]">
        Discover an exceptional cooking class tailored for you!
      </div>
      <div className="text-lg leading-[30px] mt-6 text-center w-[70%]">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ coding problems to become an exceptionally well
        world-class Programmer.
      </div>
      <div className="text-xl font-semibold mt-10">
        <button className="px-8 py-5 rounded-[50px] bg-[#0BE58A] text-black mr-6 cursor-pointer">Explore Now</button>
        <button className="px-8 py-5 rounded-[50px] border border-white text-white cursor-pointer">Our Feedback</button>
      </div>
    </div>
  );
};

export default Banner;
