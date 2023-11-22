import React, { useState } from 'react'
import CardOption from './CardOption'
const Card = ({ word, definition, example, type, cardKey }) => {
    const [display, setDisplay] = useState(true);
    const [isShowOption, setIsShowOption] = useState(false);
    const handleShowOption = (event) => {
        event.preventDefault();
        setIsShowOption(!isShowOption);
    }
    const handleDisplay = () => {
        setDisplay(false);
    }
    return (
        <>
            <div className={`group ${!display ? 'hidden' : ''} relative rounded-xl bg-gray-200 py-4 px-6 dark:bg-secondary-dark`}>
                <div class="flex flex-col justify-between md:flex-row md:gap-x-2">
                    <div class="w-full text-right md:max-w-fit md:text-left">
                        <button type="button" class="-mt-2 -ml-2 p-2 text-lime-500 transition-all hover:scale-110 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 ">
                                <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="grid w-full grid-cols-1 gap-y-4 md:grid-cols-12 md:gap-x-4">
                        <div class="col-span-12 flex flex-col space-y-2 break-words capitalize md:col-span-3 md:flex-col ">
                            <p class="text-start text-2xl">{word}</p>
                            <div class="">
                                <p class="text-start text-sm">
                                </p>
                            </div>
                            <p class="text-sm font-medium">{type}</p>

                        </div>
                        <p class="col-span-12 md:col-span-4">{definition}</p>
                        <p class="col-span-12 md:col-span-5">{example}</p>
                    </div>
                </div>

                <div class="-mb-2 flex items-center justify-center">
                    <span onClick={handleShowOption} class="flex h-8 w-8 cursor-pointer rounded-full p-2 text-muted-dark hover:text-primary ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="false hidden transition duration-500 ease-in-out group-hover:block">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </span>
                </div>
                {isShowOption && <CardOption handleDisplay={handleDisplay} cardKey={cardKey} />}
            </div >

        </>
    )
}

export default Card