import { createBrowserRouter, Navigate, Routes } from "react-router-dom";
import Navbar from './components/header/Navbar'
import Hero from "./pages/hero/Hero";
import Pricing from "./pages/pricing/Pricing";
import Login from "./pages/login/Login"
import Register from './pages/register/Register'
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header-admin/Header";
import CreateVocab from "./components/vocab/CreateVocab";
import CreateQuiz from "./components/vocab/CreateQuiz";
import Dashboard from "./components/dashboard/Dashboard";
import Grammar from "./components/grammar/Grammar";
import Profile from "./components/profile/Profile";
import Chat from "./components/chat/Chat";
import Forget from "./pages/recover-password/Forget";
import Collection from "./components/collection/Collection";
const isAuthenticated = () => {
    // Check if the access token exists in the localStorage
    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    return accessToken !== null;
};

const PrivateRoute = ({ path, element }) => {
    if (isAuthenticated()) {
        return element;
    } else {
        return <Navigate to="/login" />;
    }
};
const HomeLayout = ({ children }) => {
    return (
        <>
            <main className="font- relative h-screen overflow-hidden bg-transparent dark:bg-gray-800 rounded-2xl">
                <div className="flex items-start justify-between">
                    <Sidebar className="bg-transparent" />
                    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                        <Header />
                        <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Navbar />
                <Hero />
            </>

        )
    },
    {
        path: '/pricing',
        element: (
            <>
                <Navbar />
                <Pricing />
            </>

        )
    },
    {
        path: '/login',
        element: (
            <>
                <Login />
            </>
        )
    },
    {
        path: '/register',
        element: (
            <>
                <Register />
            </>
        )
    },
    {
        path: '/forget',
        element: (
            <>
                <Forget />
            </>
        )
    },
    {
        path: '/home',
        element: (
            <HomeLayout>
                <PrivateRoute path="/home" element={<Dashboard />} />
            </HomeLayout>
        )
    },
    {
        path: '/home/vocab',
        element: (
            <HomeLayout>
                <PrivateRoute path="/home/vocab" element={<CreateVocab />} />
            </HomeLayout>
        )
    },
    {
        path: '/home/quiz',
        element: (
            <HomeLayout>
                <PrivateRoute path="/home/quiz" element={<CreateQuiz />} />
            </HomeLayout>
        )
    },
    {
        path: '/home/grammar',
        element: (
            <HomeLayout>
                <PrivateRoute path="/home/grammar" element={<Grammar />} />
            </HomeLayout>
        )
    },
    {
        path: '/home/profile',
        element: (
            <HomeLayout>
                <PrivateRoute path="/home/profile" element={<Profile />} />
            </HomeLayout>
        )
    },
    {
        path: '/home/chat',
        element: (
            <HomeLayout>
                <PrivateRoute path="/home/chat" element={<Chat />} />
            </HomeLayout>
        )
    },
    {
        path: '/home/collection',
        element: (
            <HomeLayout>
                <PrivateRoute
                    path="/home/collection"
                    element={<Collection />}
                />
            </HomeLayout>
        )
    }

])

export default router;
