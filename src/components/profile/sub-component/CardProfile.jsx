import React, { useState } from 'react';
import { DefaultModal } from './Modal';

const CardProfile = ({ name, email }) => {
    const [changeEmail, setChangeEmail] = useState(false);

    const handleChangeEmail = () => {
        setChangeEmail(true);
    };

    const handleCloseModal = () => {
        setChangeEmail(false);
    };

    return (
        <div className="m-auto my-8 w-full max-w-3xl bg-white rounded-xl bg-primary-light p-4 dark:bg-secondary-dark sm:p-8">
            <div className="flex justify-between">
                <div className="flex w-full flex-1 flex-col space-y-4">
                    <div>
                        <div className="group relative flex h-[70px] w-[70px] items-center justify-center rounded-full">
                            <img
                                src="https://lh3.googleusercontent.com/a/AAcHTte0aGiedNRm44agJ_w-Do0SF0fPw55WzKpgngTK=s96-c"
                                alt="avatar"
                                className="h-full w-full cursor-pointer rounded-full object-cover group-hover:brightness-90"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex gap-2">
                            <p className="text-lg font-medium">{name}</p>
                        </div>
                        <div className="flex gap-2">
                            <p>{email}</p>
                            <svg
                                className="w-[19px] h-[19px] cursor-pointer text-gray-800 dark:text-white my-auto"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 18"
                                onClick={handleChangeEmail}
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z"
                                />
                            </svg>
                        </div>
                        <p>Joined in May 2023</p>
                    </div>
                </div>
            </div>
            {changeEmail && <DefaultModal boolean={true} errorMessage='' handleClose={handleCloseModal} />}
        </div>
    );
};

export default CardProfile;