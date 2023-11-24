import React, { useState, useEffect } from 'react';
import './Alert.css'
const Alert = ({ content, handleFunction }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            handleFunction();

        }, 3000);
        return () => {
            clearTimeout(timer);
        }
    }, []);

    return (
        <>
            {isVisible && (
                <div className="z-10 bg-blue-200 backdrop-blur-xl z-20 max-w-md absolute right-5 top-5 rounded-lg p-6 shadow animate-fade-in">
                    <h1 className="text-xl text-slate-700 font-medium">{content}</h1>
                    <div className="flex justify-between items-center">
                        <a
                            href="#"
                            className="text-slate-500 hover:text-slate-700 text-sm inline-flex space-x-1 items-center"
                        >
                            <span>Go to collection</span>
                            <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Alert;