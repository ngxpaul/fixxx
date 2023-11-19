/*
import CardWithList from "../../components/card/CardPricing";
import "./Pricing.css";
import ButtonGroup from "../../components/btnGroup/BtnGroup";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";

const Pricing = () => {
  return (
    <>
      <div className="container mx-auto p-6 md:p-16">
        <div className="banner mb-20">
          <h1 className="text-center text-4xl md:text-6xl font-bold leading-tight text-green-400">
            Pricing Plans <br />
          </h1>
          <h1 className="text-center text-4xl md:text-2xl leading-tight text-slate-500 mt-6 tracking-wide">
            Choose from our plans to access tailored features
          </h1>
          <h1 className="text-center text-4xl md:text-2xl leading-tight text-slate-500 tracking-wide">
            and resources that fit your learning goals.
          </h1>
        </div>

        <ButtonGroup />

        <div className="grid grid-cols-1 gap-y-20 sm:grid-cols-2 sm:gap-10 md:gap-12 lg:grid-cols-3 mt-20">
          <CardWithList />
          <CardWithList />
          <CardWithList />
        </div>
        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default Pricing;*/
import React, { useState } from 'react'
import Question from "../../components/question/Question"
import Footer from "../../components/footer/Footer"
import './Pricing.css'
const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  return (
    <>
      <div className='text-center'>
        <h1 className='text-gradient mx-auto h-full w-fit text-4xl font-bold sm:text-center sm:text-5xl p-8'>Pricing Plans </h1>
        <p className='text-zinc-500 mx-auto mt-6 max-w-xl text-xl text-secondary-dark opacity-80 dark:text-secondary-light sm:text-center sm:text-2xl'> Choose from our plans to access tailored features and resources that fit your learning goals.</p>
      </div>
      <div className="relative font-inter antialiased button-group">
        <div className="relative  flex flex-col justify-center bg-slate-50 overflow-hidden button-group">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-14 ">
            <div x-data="{ isAnnual: true }">
              <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
                <div className="relative flex w-full p-1 dark:bg-slate-900 rounded-full">
                  <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                    <span
                      className={`absolute inset-0 w-1/2 bg-green-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${isAnnual ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    ></span>
                  </span>
                  <button
                    className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'
                      }`}
                    name={isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'}
                    onClick={() => setIsAnnual(true)}
                    aria-pressed={isAnnual}
                  >
                    Yearly{' '}
                    <span className={isAnnual ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'}>
                      -20%
                    </span>
                  </button>
                  <button
                    className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-slate-500 dark:text-slate-400' : 'text-white'
                      }`}
                    name={isAnnual ? 'text-slate-500 dark:text-slate-400' : 'text-white'}
                    onClick={() => setIsAnnual(false)}
                    aria-pressed={!isAnnual}
                  >
                    Monthly
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid gap-6 lg:grid-cols-3 items-start ">
        <div className="h-full">
          <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
            <div className="mb-5">
              <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">Essential</div>
              <div className="inline-flex items-baseline mb-2">
                <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
                <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl" x-text="isAnnual ? '29' : '35'"></span>
                <span className="text-slate-500 font-medium">/mo</span>
              </div>
              <div className="text-sm text-slate-500 mb-5">There are many variations available, but the majority have suffered.</div>
              <a className="w-full card-price inline-flex justify-center whitespace-nowrap  border-2 rounded-3xl px-3.5 py-2.5 text-md font-medium text-green-400 shadow-sm shadow-indigo-950/10 border-2 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                Purchase Plan
              </a>
            </div>
            <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
            <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Unlimited placeholder texts</span>
              </li>
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Consectetur adipiscing elit</span>
              </li>
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Excepteur sint occaecat cupidatat</span>
              </li>
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Officia deserunt mollit anim</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-emerald-300 card-price h-full border-2	">
          <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
            <div className="absolute top-0 right-0 mr-6 -mt-4">
              <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
            </div>
            <div className="mb-5">
              <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">Perform</div>
              <div className="inline-flex items-baseline mb-2">
                <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
                <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl" x-text="isAnnual ? '49' : '55'"></span>
                <span className="text-slate-500 font-medium">/mo</span>
              </div>
              <div className="text-sm text-slate-500 mb-5">There are many variations available, but the majority have suffered.</div>
              <a className="w-full inline-flex justify-center whitespace-nowrap rounded-2xl	 bg-emerald-400	 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-green-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                Purchase Plan
              </a>
            </div>
            <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
            <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Unlimited placeholder texts</span>
              </li>
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Consectetur adipiscing elit</span>
              </li>
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Excepteur sint occaecat cupidatat</span>
              </li>
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Officia deserunt mollit anim</span>
              </li>
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Predefined chunks as necessary</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-full">
          <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
            <div className="mb-5">
              <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">Essential</div>
              <div className="inline-flex items-baseline mb-2">
                <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
                <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl" x-text="isAnnual ? '29' : '35'"></span>
                <span className="text-slate-500 font-medium">/mo</span>
              </div>
              <div className="text-sm text-slate-500 mb-5">There are many variations available, but the majority have suffered.</div>
              <a className="w-full card-price inline-flex justify-center whitespace-nowrap  border-2 rounded-3xl px-3.5 py-2.5 text-md font-medium text-green-400 shadow-sm shadow-indigo-950/10 border-2 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                Purchase Plan
              </a>
            </div>
            <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
            <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Unlimited placeholder texts</span>
              </li>
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Consectetur adipiscing elit</span>
              </li>
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Excepteur sint occaecat cupidatat</span>
              </li>
              <li className="flex items-center">
                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Officia deserunt mollit anim</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Question className="container mx-auto p-6 md:p-16 w-2/3 mb-7" />
      <Footer />




    </>
  )
}

export default Pricing
