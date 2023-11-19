// import React, { useState } from "react";
// import { Sidebar } from 'flowbite-react';
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
// import CreateQuiz from './CreateQuiz'
// import './Sidebar.css'
// export default function ParentSidebar() {
//     const [activeSection, setActiveSection] = useState(null);

//     const handleSectionClick = (section) => {
//         setActiveSection(section);
//     };

//     const renderContent = () => {
//         if (activeSection === 'vocabulary') {
//             return <CreateQuiz />;
//         }
//         else if (activeSection === 'grammar') {
//             return <Grammar />
//         }

//         // Add more conditions for other sections if needed

//         // Default content when no section is active
//         return null;
//     };

//     return (
//         <div className="flex custom_sidebar h-screen">
//             <Sidebar aria-label="Sidebar with logo branding example ">
//                 <Sidebar.Logo
//                     href="#"
//                     img="https://www.flowbite-react.com/favicon.svg"
//                     imgAlt="Flowbite logo"
//                 >
//                     <p>
//                         Vocatel
//                     </p>
//                 </Sidebar.Logo>
//                 <Sidebar.Items>
//                     <Sidebar.ItemGroup>
//                         <Sidebar.Item
//                             href="#"
//                             icon={HiChartPie}
//                             onClick={() => handleSectionClick('dashboard')}
//                         >
//                             <p>
//                                 Dashboard
//                             </p>
//                         </Sidebar.Item>
//                         <Sidebar.Item
//                             href="#"
//                             icon={HiViewBoards}
//                             onClick={() => handleSectionClick('learn')}
//                         >
//                             <p>
//                                 Learn
//                             </p>
//                         </Sidebar.Item>
//                         <Sidebar.Item
//                             href="#"
//                             icon={HiInbox}
//                             onClick={() => handleSectionClick('vocabulary')}
//                         >
//                             <p>
//                                 Create Quiz
//                             </p>
//                         </Sidebar.Item>
//                         <Sidebar.Item
//                             href="#"
//                             icon={HiUser}
//                             onClick={() => handleSectionClick('grammarCheck')}
//                         >
//                             <p>
//                                 Grammar check
//                             </p>
//                         </Sidebar.Item>
//                         <Sidebar.Item
//                             href="#"
//                             icon={HiArrowSmRight}
//                             onClick={() => handleSectionClick('profile')}
//                         >
//                             <p>
//                                 Profile
//                             </p>
//                         </Sidebar.Item>
//                         <Sidebar.Item
//                             href="#"
//                             icon={HiTable}
//                             onClick={() => handleSectionClick('signUp')}
//                         >
//                             <p>
//                                 Sign Up
//                             </p>
//                         </Sidebar.Item>
//                     </Sidebar.ItemGroup>
//                 </Sidebar.Items>
//             </Sidebar>

//             <div className="container mx-auto mt-12">
//                 {renderContent()}
//             </div>
//         </div>
//     );
// }
import React from 'react'

const SideBar = () => {

    const role = localStorage.getItem('ROLE');
    const currentPath = window.location.pathname;
    return (
        <>
            <div class="relative hidden h-screen my-4 ml-4  lg:block w-72 ">
                <div class="h-full bg-transparent rounded-2xl dark:bg-gray-700">
                    <div class="flex items-center justify-center pt-6">
                        <img src='https://www.flowbite-react.com/favicon.svg'></img>
                    </div>
                    <nav class="mt-6 relative h-full">
                        <div class="pl-6">
                            <a class={`${currentPath === '/home' ? 'text-lime-500' : ''} flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 hover:text-lime-500`} href="/home">
                                <div className='flex justify-start'>
                                    <span class="text-left">
                                        <svg class="w-[20px] h-[20px] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h14M1 6h14M1 11h7" />
                                        </svg>
                                    </span>
                                    <span class="mx-4 text-sm font-semibold">
                                        Dashboard
                                    </span>
                                </div>
                            </a>
                            {role == '[USER]' && (
                                <>

                                    <a className={`${currentPath === '/home/collection' ? 'text-lime-500' : ''} flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 hover:text-lime-500`} href="/home/collection">
                                        <div className='flex justify-start'>
                                            <span class="text-left">
                                                <svg width="20" height="20" fill="currentColor" class="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span class="mx-4 text-sm font-semibold">
                                                Collection
                                            </span>
                                        </div>
                                    </a>
                                    <a class={`${currentPath === '/home/vocab' ? 'text-lime-500' : ''} flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 hover:text-lime-500`} href="/home/vocab">
                                        <div className='flex justify-start'>

                                            <span class="text-left">
                                                <svg class="w-[20px] h-[20px] text--800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z" />
                                                </svg>
                                            </span>
                                            <span class="mx-4 text-sm font-semibold">
                                                VOCAB
                                            </span>
                                        </div>
                                    </a>
                                    <a class={`${currentPath === '/home/grammar' ? 'text-lime-500' : ''} flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 hover:text-lime-500`} href="/home/grammar">
                                        <div className='flex justify-start'>
                                            <span class="text-left">
                                                <svg class="w-[20px] h-[20px] text--800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
                                                </svg>
                                            </span>
                                            <span class="mx-4 text-sm font-semibold">
                                                Grammar
                                            </span>
                                        </div>
                                    </a>
                                    <a class={`${currentPath === '/home/chat' ? 'text-lime-500' : ''} flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 hover:text-lime-500`} href="/home/chat">
                                        <div className='flex justify-start'>
                                            <span class="text-left">
                                                <svg class="w-[20px] h-[20px] text--800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.5 6.5h.01m4.49 0h.01m4.49 0h.01M18 1H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                                                </svg>
                                            </span>
                                            <span class="mx-4 text-sm font-semibold">
                                                Chat
                                            </span>
                                        </div>
                                    </a>
                                </>
                            )}


                            {role == '[ADMIN]' && (
                                <>
                                    <a class={`${currentPath === '/home/user' ? 'text-lime-500' : ''} flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 hover:text-lime-500`} href="/home/quiz">
                                        <div className='flex'>
                                            <span class="text-left">
                                                <svg width="20" height="20" fill="currentColor" class="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span class="mx-4 text-sm font-semibold">
                                                USER
                                            </span>
                                        </div>
                                    </a>
                                    <a class={`${currentPath === '/home/quiz' ? 'text-lime-500' : ''} flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 hover:text-lime-500`} href="/home/quiz">
                                        <div className='flex'>
                                            <span class="text-left">
                                                <svg width="20" height="20" fill="currentColor" class="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span class="mx-4 text-sm font-semibold">
                                                QUIZ
                                            </span>
                                        </div>
                                    </a>
                                </>
                            )}






                            {/* <a class={`${currentPath === '/home' ? 'text-lime-500' : ''} flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 hover:text-lime-500`} href="#">
                                <span class="text-left">
                                    <svg width="20" height="20" fill="currentColor" class="m-auto" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z">
                                        </path>
                                    </svg>
                                </span>
                                <span class="mx-4 text-sm font-semibold">
                                    Reports
                                </span>
                            </a>
                            <a class={`${currentPath === '/home' ? 'text-lime-500' : ''} flex items-center justify-start w-full p-4 my-2 font-thin text-gray-500 uppercase transition-colors duration-200 hover:text-lime-500`} href="#">
                                <span class="text-left">
                                    <svg width="20" fill="currentColor" height="20" class="w-5 h-5" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z">
                                        </path>
                                    </svg>
                                </span>
                                <span class="mx-4 text-sm font-semibold">
                                    Settings
                                </span>
                            </a> */}
                        </div>
                        <div className="pt-3 mt-12" style={{ opacity: 1, display: 'block' }}>
                            <a className="m-auto bg-gradient-to-r from-orange-400 to-orange-500 w-5/6 h-12 flex items-center justify-center space-x-2 rounded-lg p-2 text-white transition-all hover:scale-95" href="/pricing">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6 sm:h-6 sm:w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
                                </svg>
                                <span className="text-xs font-medium sm:text-sm md:font-bold md:uppercase">Upgrade plan</span>
                            </a>
                        </div>
                        <div className="absolute bottom-[15%] w-full flex items-end justify-between rounded-full p-2 hover:bg-dark-xs hover:dark:bg-secondary-dark" >
                            <a href='/home/profile' className="hover:cursor-pointer w-2/3 rounded-full mx-auto relative flex max-w-full  p-2 items-center bg-gray-200 mt-2 bottom-0">
                                <span className="h-[36px] w-[36px]">
                                    <img
                                        alt=""
                                        src='https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-cute-bear-avatar-with-a-yellow-background-png-image_1770297.jpg'
                                        width="36"
                                        height="36"
                                        decoding="async"
                                        data-nimg="1"
                                        className="h-full w-full rounded-full object-cover"
                                        loading="lazy"
                                        style={{ color: "transparent" }}
                                    />
                                </span>
                                <p className="max-w-[100px] truncate pl-2 font-semibold">Three</p>
                            </a>
                        </div>
                    </nav>
                </div >
            </div >
        </>
    )
}

export default SideBar