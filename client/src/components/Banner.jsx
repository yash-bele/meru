import { useState } from "react";
import { banner } from "../configs/banner";

const Banner = () => {
  const [option, setOption] = useState("outstation");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      style={{
        backgroundImage: `url(${eval(`banner.${option}.img`)})`,
      }}
      className="bg-slate-900 h-auto sm:h-[calc(100vh)] bg-cover bg-center flex items-center justify-center font-montserrat text-slate-700"
    >
      <section>
        <h1 className="text-white/75 text-7xl hidden xl:flex flex-col font-extralight w-[900px]">
          <span>Book Meru</span>
          <span>Best for {eval(`banner.${option}.option`)} rides</span>
        </h1>
      </section>
      <section className="bg-white/95 rounded-none sm:rounded-xl overflow-hidden text-sm w-full sm:w-auto">
        <div className="space-x-2.5 text-white p-5">
          <button
            onClick={() => setOption("outstation")}
            className={`border border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-3 pt-[5px] pb-1.5 rounded-md duration-200 ${
              option === "outstation" ? "bg-red-500 text-white" : ""
            }`}
          >
            Outstation
          </button>
          <button
            onClick={() => setOption("airport")}
            className={`border border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-3 pt-[5px] pb-1.5 rounded-md duration-200 ${
              option === "airport" ? "bg-red-500 text-white" : ""
            }`}
          >
            Airport
          </button>
          <button
            onClick={() => setOption("city")}
            className={`border border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-3 pt-[5px] pb-1.5 rounded-md duration-200 ${
              option === "city" ? "bg-red-500 text-white" : ""
            }`}
          >
            City
          </button>
          <button
            onClick={() => setOption("rentals")}
            className={`border border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-3 pt-[5px] pb-1.5 rounded-md duration-200 ${
              option === "rentals" ? "bg-red-500 text-white" : ""
            }`}
          >
            Rentals
          </button>
        </div>
        <form onSubmit={handleSubmit} className="px-5 pb-5 flex flex-col">
          <h3 className="text-base mb-2">Book ride!</h3>
          <div className="flex flex-col space-y-2.5">
            <input
              className="bg-transparent outline-none pt-[9px] pb-2.5 px-2.5 border border-slate-300 rounded-md"
              type="text"
              placeholder="Enter pickup location"
            />
            <input
              className="bg-transparent outline-none pt-[9px] pb-2.5 px-2.5 border border-slate-300 rounded-md"
              type="text"
              placeholder="Enter destination"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 pt-[9px] pb-2.5 rounded-md text-white mt-5 duration-200"
          >
            Book ride
          </button>
        </form>
      </section>
    </section>
  );
};

export default Banner;
