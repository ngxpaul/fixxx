import CreateVocab from "../../components/vocab/CreateVocab"
import React, { useState } from 'react'

const Header = () => {
    const [searchValue, setSearchValue] = useState('');
    const handleLogin = (e) => {
        // fake log out
        e.preventDefault();
        localStorage.removeItem("ACCESS_TOKEN");
        location.reload();
    }
    const handleSearchValue = (event) => {
        setSearchValue(event.target.value);
    };
    const handleSearch = (event) => {
        event.preventDefault();
    }
    return (
        <>
            <header class="z-40 items-center w-full h-16 bg-transparent shadow-lg dark:bg-gray-700 rounded-2xl">
                <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center bg-transparent">
                    <div class="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
                        <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                            <div class="relative flex items-center w-full h-full lg:w-64 group">
                                <div class="absolute z-50 flex items-center justify-center block w-auto h-10 p-3 pr-2 text-sm text-gray-500 uppercase cursor-pointer sm:hidden">
                                    <svg fill="none" class="relative w-5 h-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z">
                                        </path>
                                    </svg>
                                </div>
                                <svg class="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">
                                    </path>
                                </svg>
                                <input onChange={handleSearchValue} type="text" class="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-100 dark:bg-gray-800 text-gray-400 aa-input" placeholder="Search" />
                                <div onClick={handleSearch} class="hover:cursor-pointer absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                                    +
                                </div>
                            </div>
                        </div>
                        <div class="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
                            <a href="#" class="relative block flex" onClick={handleLogin}>
                                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 15">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header