import React from "react";
import Navbar from "./Navbar";
import img1 from "./image/shose.jpg";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:px-20">
        <div className="my-4">
          <h1 className="text-3xl font-semibold text-gray-800">
            Addidas Shose Buy:
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-4 ">
          <div className="flex flex-col ">
            <div className="">
              <img
                className="lg:h-80 shadow-indigo-400 duration-500 rounded-md transition-all shadow-sm hover:shadow-xl hover:shadow-indigo-400 cursor-pointer"
                src={img1}
                alt=""
              />
            </div>
            <div className="flex items-center my-5">
              <button className="px-4 py-3 outline-none border-none  text-xl bg-sky-700 text-white rounded-lg shadow-indigo-600 shadow-md">
                +
              </button>
              <h1 className="mx-2 font-semibold">Add to Cart</h1>
              <button className="px-4 py-3 outline-none border-none  text-xl bg-sky-700 text-white rounded-lg shadow-indigo-600 shadow-md">
                -
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="">
              <img
                className="lg:h-80 shadow-indigo-400 duration-500 rounded-md transition-all shadow-sm hover:shadow-xl hover:shadow-indigo-400 cursor-pointer"
                src="https://static-01.daraz.pk/p/5a20bbcdebb26b03f69e47db55e57688.jpg"
                alt=""
              />
            </div>
            <div className="flex items-center my-5">
              <button className="px-4 py-3 outline-none border-none  text-xl bg-sky-700 text-white rounded-lg shadow-indigo-600 shadow-md">
                +
              </button>
              <h1 className="mx-2 font-semibold">Add to Cart</h1>
              <button className="px-4 py-3 outline-none border-none  text-xl bg-sky-700 text-white rounded-lg shadow-indigo-600 shadow-md">
                -
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
