import React from 'react'
import Collection from './sub-component/Collection';
import Task from './sub-component/Task';
import Review from './sub-component/Review';
import Footer from '../footer/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
    }, [location.pathname]);
    return (
        <>
            <div className="grid grid-cols-2 gap-2">
                <div className="col-span-2 sm:col-span-1 p-2">
                    <div className="flex flex-col h-full">
                        <div className="h-1/2 mb-2">
                            <Collection />
                        </div>
                        <div className="h-1/2">
                            <Review />
                        </div>
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-1 p-2">
                    <div className="h-full">
                        <Task />
                    </div>
                </div>
                <div className="col-span-2 sm:col-span-1 p-2">
                    <div className="h-full">
                        <Task />
                    </div>
                </div>   <div className="col-span-2 sm:col-span-1 p-2">
                    <div className="h-full">
                        <Task />
                    </div>
                </div>   <div className="col-span-2 sm:col-span-1 p-2">
                    <div className="h-full">
                        <Task />
                    </div>
                </div>   <div className="col-span-2 sm:col-span-1 p-2">
                    <div className="h-full">
                        <Task />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Dashboard