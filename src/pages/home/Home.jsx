import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Sidebar from '../../components/sidebar/SideBar';
import Header from '../../components/header-admin/Header';
import CreateVocab from '../../components/vocab/CreateVocab';
const Home = () => {
    return (
        <main className="relative h-full overflow-hidden bg-transparent dark:bg-gray-800 rounded-2xl">
            <div className="flex items-start justify-between">
                <Sidebar className="bg-transparent" />
                <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                    <Header />
                    <div className="h-full pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
                        <Routes>
                            <Route path="/home/vocab" element={<CreateVocab />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;