import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import axiosClient from '../../ultils/AxiosClient';
import { DefaultModal } from '../../components/modal/Modal';
export default function ShadowInputs() {
    let globalResponse = null;
    const [agreeChecked, setAgreeChecked] = useState(false);
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formError, setFormError] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const handleAgreeChange = (event) => {
        setAgreeChecked(event.target.checked);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
    };
    const register = async (name, username, password) => {
        try {
            const response = await axiosClient.post('/auth/register', {
                fullname: name,
                email: username,
                password: password
            });
            console.log(response);

            // Set the response message in the component state
            setResponseMessage(response.status);
        } catch (error) {
            // Handle login error
            console.error('Register Error:', error);
            setResponseMessage(error.response.status);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!agreeChecked) {
            setFormError('Please agree to the terms and conditions.');
            return;
        }

        if (password.length < 6) {
            setPasswordError('Password should be at least 6 characters long.');
            return;
        }

        if (password !== repeatPassword) {
            setPasswordError('Passwords do not match.');
            return;
        }
        register(name, email, password)
            .then((response) => {
                setEmail('');
                setPassword('');
                setRepeatPassword('');
                setResponseMessage(response.status);
                console.log(response);
            })
            .catch((error) => {
                setResponseMessage(error);
            });

    };

    return (
        <>
            <div className="container flex flex-col mx-auto bg-transparent rounded-lg h-screen" onSubmit={handleSubmit}>
                <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                    <div className="flex items-center justify-center w-full lg:p-12">
                        <div className="flex items-center xl:p-10">
                            <form className="flex flex-col w-full h-full pb-6 text-center bg-transparent rounded-3xl">
                                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                                    Sign Up
                                </h3>
                                <p className="mb-4 text-grey-700">Enter your email and password</p>

                                <div className="flex items-center mb-3">
                                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                    <p className="mx-4 text-grey-600">or</p>
                                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                </div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 text-sm text-start text-grey-900"
                                >
                                    Fullname*
                                </label>

                                <input
                                    onChange={handleNameChange}
                                    value={name}
                                    id="name"
                                    type="text"
                                    placeholder="Enter a password"
                                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                />
                                <label
                                    htmlFor="email"
                                    className="mb-2 text-sm text-start text-grey-900"
                                >
                                    Email*
                                </label>
                                <input
                                    onChange={handleEmailChange}
                                    id="email"
                                    value={email}
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
                                    onChange={handlePasswordChange}
                                    value={password}
                                    id="password"
                                    type="password"
                                    placeholder="Enter a password"
                                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                />
                                <label
                                    htmlFor="password"
                                    className="mb-2 text-sm text-start text-grey-900"
                                >
                                    Confim Password*
                                </label>

                                <input
                                    value={repeatPassword}
                                    onChange={handleRepeatPasswordChange}
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Enter a password"
                                    className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                                />
                                <div className="flex flex-row justify-between mb-8">
                                    <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                                        <input
                                            type="checkbox"
                                            defaultChecked=""
                                            defaultValue=""
                                            className="sr-only peer"
                                            onChange={handleAgreeChange}
                                            checked={agreeChecked}
                                        />
                                        <div className="w-5 h-5 bg-white border-2 rounded-sm border-gray-500 peer peer-checked:border-0 peer-checked:bg-green-500">
                                            <img
                                                className=""
                                                src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                                                alt="tick"
                                            />
                                        </div>
                                        <span className="ml-3 text-sm font-normal text-gray-900">
                                            I agree to the Terms and Privacy Policy
                                        </span>
                                    </label>


                                </div>

                                {responseMessage == '201' && (
                                    <>
                                        <DefaultModal boolean={true} errorMessage="Register successfully" />
                                    </>
                                )}
                                <button
                                    title={!agreeChecked ? 'Please agree the Terms and Privacy Policy' : ''}
                                    disabled={!agreeChecked}
                                    className={`pointer-events-auto	 w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white bg-green-400 transition duration-300 md:w-96 rounded-2xl ${!agreeChecked ? 'bg-green-400' : 'hover:bg-green-600'
                                        }`}
                                >
                                    Sign Up
                                </button>
                                <p className="text-sm leading-relaxed text-grey-900">
                                    Already have an account?{" "}
                                    <a href="login" className="font-bold text-grey-700">
                                        Sign in
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