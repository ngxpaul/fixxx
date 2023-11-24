import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import InputInformation from '../../vocab/InputInfo'
import axiosClient from '../../../ultils/AxiosClient';
export function DefaultModal({ boolean, errorMessage, handleClose }) {
    const [openModal, setOpenModal] = useState(boolean);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const changePassword = async (oldPassword, password) => {
        try {
            const response = await axiosClient.put('/users/password', {
                oldPassword: oldPassword,
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

    const handleOldPassword = (value) => {
        setOldPassword(value);
    };
    const handleNewPassword = (value) => {
        setNewPassword(value);
    }
    const closeModal = () => {
        setOpenModal(false);
        handleClose(); // Call the handleClose function from props
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        changePassword(oldPassword, newPassword)
            .then((response) => {
                console.log(response);
                if (window.confirm("Change password successfully"))
                    handleClose();
                setOpenModal(false);
                handleClose(); // Call the handleClose function from props

            })
            .catch((error) => {
                console.log(error.status);
                if (window.confirm("Wrong password"))
                    handleClose();
                console.error('Error:', error);
            });
    }
    return (
        <>
            <Modal show={openModal} size="lg" onClose={closeModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className='p-2'>
                        <div className="">
                            <InputInformation Children={"Old Password"}
                                onInputChange={handleOldPassword} />
                        </div>
                        <div className="">
                            <InputInformation Children={"New Password"}
                                onInputChange={handleNewPassword} />
                        </div>
                        <div className=''>
                            <button onClick={handleSubmit} class="mx-auto group relative h-12 w-48 overflow-hidden rounded-2xl bg-lime-500 text-lg font-bold text-white">
                                Ok
                                <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
                            </button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}