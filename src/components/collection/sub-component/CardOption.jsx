import React, { useState } from 'react'
import axiosClient from '../../../ultils/AxiosClient';
const CardOption = ({ handleDisplay, cardKey }) => {
    const [result, setResult] = useState('');
    const deleteVocab = async (id) => {
        try {
            const response = await axiosClient.delete('/vocab', { params: { id } });
            return response.data;
        } catch (error) {
            // Handle error
            throw error;
        }
    };

    const handleDeleteVocab = () => {
        console.log("clicked");
        deleteVocab(cardKey)
            .then((response) => {
                setResult(response);
                console.log(response);
                if (response == 'true') {
                    window.location.reload();
                }
                handleDisplay();
            })
            .catch((error) => {
                setResult(error);
            });
    };
    return (
        <>

            <div className="pt-2" style={{ opacity: 1, transform: "none" }}>
                <div>
                    <div className="borer-t-dark-xs flex items-start justify-between border-t text-secondary-dark dark:border-t-light-xs dark:text-secondary-light">
                        <div className="flex w-full flex-col justify-start space-y-4 pt-4 sm:space-y-0 md:flex-row md:justify-between">
                            <div className="flex flex-col text-sm sm:flex-row sm:items-center sm:space-x-6 ">
                            </div>
                            <div className="relative -mr-2 flex items-center justify-end space-x-4 sm:justify-start">
                                <button
                                    type="button"
                                    className=" rounded-full p-2 transition-all hover:bg-primary/10 hover:text-lime-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-5 "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleDeleteVocab}
                                    type="button"
                                    className=" -mr-2 rounded-full p-2 transition-all hover:bg-danger/10 hover:text-lime-500"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-5 "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className=" rounded-full p-2 transition-all hover:text-lime-500  "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardOption