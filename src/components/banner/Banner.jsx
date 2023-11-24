import React from "react";
import { Card } from "flowbite-react";
const Banner = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-2xl mb-32 mt-16">
        <div className="relative w-full rounded-3xl bg-green-400">
          <div className=" mx-auto flex max-w-lg flex-col items-center justify-center px-6 py-12 text-center">
            <div className="space-y-8">
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Explore a better way to learn and memorize new words
              </h1>
              <div className="transition-all hover:scale-105">
                <a
                  href="/"
                  className=" rounded-full bg-white py-3 px-6 text-base font-semibold text-green-400 "
                >
                  Let's started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
