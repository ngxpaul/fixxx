import React, { useState, useEffect } from 'react';

const Forget = () => {
    const [phone, setPhone] = useState('');
    const [isValidPhone, setIsValidPhone] = useState(false);
    const [showOTPInput, setShowOTPInput] = useState(false);
    const [otpCode, setOtpCode] = useState('');
    const handlePhoneChange = (event) => {
        var phoneNumber = event.target.value;
        const phoneRegex = /^(\+84|0)(1\d{9}|9\d{8}|[2-8]\d{8})$/;
        setPhone(phoneNumber);
        setIsValidPhone(phoneRegex.test(phoneNumber));
    };
    const handleOTPChange = (event) => {
        setOtpCode(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();



        const render = () => {
            window.recaptchaVerifier = new fb.auth.RecaptchaVerifier('recaptcha-container')
            recaptchaVerifier.verify();
        };
        render();


        // function for send message
        const phoneAuth = () => {
            const auth = getAuth(app);
            const phoneNumber = phone;
            if (phoneNumber.charAt(0) === '0') {
                phoneNumber = '+84' + phoneNumber.substr(1);
            }
            signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
                .then((confirmationResult) => {
                    window.confirmationResult = confirmationResult;
                    coderesult = confirmationResult;
                })
                .catch((error) => {
                    alert(error.message);
                });
        };


    };

    // Firebase configuration


    // Main component

    return (
        <>
            <div className="container flex flex-col mx-auto bg-transparent rounded-lg h-screen" onSubmit={handleSubmit}>
                <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                    <div className="flex items-center justify-center w-full lg:p-12">
                        <div className="flex items-center xl:p-10">
                            <form className="flex flex-col w-full h-full pb-6 text-center bg-transparent rounded-3xl">
                                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                                    Recover Password
                                </h3>
                                <p className="mb-4 text-grey-700">Enter your phone number</p>

                                <div className="flex items-center mb-3">
                                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                    <p className="mx-4 text-grey-600">or</p>
                                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                                </div>

                                {!showOTPInput && (
                                    <>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 text-sm text-start text-grey-900"
                                        >
                                            Phone number*
                                        </label>
                                        <input
                                            id="otp"
                                            type="text"
                                            placeholder="+84 789..."
                                            className={`flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 mb-7 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl ${!isValidPhone ? 'border-red-500' : ''
                                                }`}
                                            value={phone}
                                            onChange={handlePhoneChange}
                                        />
                                        <div id="recaptcha-container"></div>
                                        <button
                                            disabled={!isValidPhone}
                                            className={`w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl ${!isValidPhone ? 'bg-green-400' : 'hover:bg-green-600'
                                                } focus:ring-4 focus:ring-purple-100 bg-green-400`}
                                            type="submit"
                                        >
                                            Send OTP
                                        </button>
                                    </>
                                )}
                                {showOTPInput && (
                                    <>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 text-sm text-start text-grey-900"
                                        >
                                            OTP Code*
                                        </label>
                                        <input
                                            id="otp"
                                            type="text"
                                            placeholder="Enter OTP code"
                                            className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-gray-400 mb-7 placeholder:text-gray-700 bg-gray-200 text-dark-gray-900 rounded-2xl"
                                            value={otpCode}
                                            onChange={handleOTPChange}
                                        />
                                        <button
                                            className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-green-600 focus:ring-4 focus:ring-purple-100 bg-green-400"
                                            type="submit"
                                        >
                                            Verify OTP
                                        </button>
                                    </>
                                )}
                                <p className="text-sm leading-relaxed text-grey-900">
                                    Already have an account?{" "}
                                    <a href="login" className="font-bold text-grey-700">
                                        Sign in
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )

}
export default Forget