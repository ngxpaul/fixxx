import React, { useRef, useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import axiosClient from '../../ultils/AxiosClient';
import { redirect } from 'react-router-dom';
export default function DefaultForm() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isError, setIsError] = useState(false);
    const login = async (username, password) => {
        try {
            const response = await axiosClient.post('/auth/login', {
                email: username,
                password: password
            });

            // Handle the successful login response

            // Do something with the data, such as storing tokens or user information
            const data = response;
            return data; // Return any relevant data from the response
        } catch (error) {
            // Handle login error
            throw error;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        // Access the input field values using the refs
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;

        // Perform any necessary actions with the input field values
        console.log('Email:', emailValue);
        console.log('Password:', passwordValue);
        login(emailValue, passwordValue)
            .then((response) => {
                console.log(response);
                const token = response.data.accessToken;
                const role = response.data.role;
                // Use the access token as needed
                if (token) {
                    localStorage.setItem('ACCESS_TOKEN', token);
                    localStorage.setItem('ROLE', role);
                    window.location.href = '/';
                }
            })
            .catch((error) => {
                // Handle login error
                setIsError(true);
                console.error('Login Error:', error);
            });
        // Reset the form if needed
        emailRef.current.value = '';
        passwordRef.current.value = '';
    };

    return (
        <>
            <div className="container flex flex-col mx-auto bg-transparent rounded-lg h-full">
                <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                    <div className="flex items-center justify-center w-full lg:p-12">
                        <div className="flex items-center xl:p-10">
                            <form className="flex flex-col w-full h-full pb-6 text-center bg-transparent rounded-3xl" onSubmit={handleSubmit}>
                                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                                    Sign In
                                </h3>
                                <p className="mb-4 text-grey-700">Enter your email and password</p>
                                <a className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300 cursor-pointer">
                                    <img
                                        className="h-5 mr-2"
                                        src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                                        alt=""
                                    />
                                    Sign in with Google
                                </a>
                                <div className="flex items-center mb-3">
                                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                    <p className="mx-4 text-grey-600">or</p>
                                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                </div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 text-sm text-start text-grey-900"
                                >
                                    Email*
                                </label>
                                <input
                                    ref={emailRef}
                                    id="email"
                                    type="email"
                                    placeholder="mail@loopple.com"
                                    className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                />
                                <label
                                    htmlFor="password"
                                    className="mb-2 text-sm text-start text-grey-900"
                                >
                                    Password*
                                </label>
                                <input
                                    ref={passwordRef}
                                    id="password"
                                    type="password"
                                    placeholder="Enter a password"
                                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                />
                                {isError && (
                                    <div className="bg-red-500 text-white p-3 mb-4 rounded-md">
                                        Login error occurred. Please try again.
                                    </div>
                                )}
                                <div className="flex flex-row justify-between mb-8">
                                    <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                                        <input
                                            type="checkbox"
                                            defaultChecked=""
                                            defaultValue=""
                                            className="sr-only peer"
                                        />
                                        <div className="w-5 h-5 bg-white border-2 rounded-sm border-gray-500 peer peer-checked:border-0 peer-checked:bg-green-500">
                                            <img
                                                className=""
                                                src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                                                alt="tick"
                                            />
                                        </div>
                                        <span className="ml-3 text-sm font-normal text-gray-900">
                                            Keep me logged in
                                        </span>
                                    </label>
                                    <a
                                        href="/forget"
                                        className="mr-4 text-sm font-medium text-blue-500"
                                    >
                                        Forget password?
                                    </a>
                                </div>
                                <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-green-600 focus:ring-4 focus:ring-purple-100 bg-green-400">
                                    Sign In
                                </button>
                                <p className="text-sm leading-relaxed text-grey-900">
                                    Not registered yet?{" "}
                                    <a href="register" className="font-bold text-grey-700">
                                        Create an Account
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}