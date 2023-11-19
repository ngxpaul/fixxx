import React, { useState } from 'react';
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import InputInformation from '../InputInfo';
import Input from '../../grammar/sub-component/Input';

export function DefaultModal({ boolean, handleClose }) {
    const [openModal, setOpenModal] = useState(boolean);
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const closeModal = () => {
        setOpenModal(false);
        handleClose();
    };

    const handleInput = (value) => {
        setInput(value);
    };

    const handleGenerate = () => {
        setResult(`
            Vocabulary 1:
            Word: example
            Definition: an instance serving as a representative or illustrating a rule
            Example: This is an example sentence.
            Type: noun
            Pronunciation: ɪɡˈzæmpəl
            Image URL: Image
        
            Vocabulary 2:
            Word: cat
            Definition: a small domesticated carnivorous mammal
            Example: The cat curled up on the sofa.
            Type: noun
            Pronunciation: kæt
            Image URL: Image
        `);
    };

    return (
        <>
            <Modal show={openModal} size="6xl" onClose={closeModal} popup>
                <Modal.Header />
                <Modal.Body>
                    {!result && (
                        <div className='p-2'>
                            <InputInformation Children={"Subject"} onInputChange={handleInput} />
                            <div className='text-center'>
                                <button onClick={handleGenerate} type="button" class=" py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">

                                    Generate
                                </button>
                            </div>
                        </div>
                    )}
                    {result && (
                        <div className='p-2'>
                            <Input placeholder={result} disabled={true} />
                            <div className='text-center gap-4'>
                                <button onClick={handleGenerate} type="button" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                                    New
                                </button>
                                <button onClick={handleGenerate} type="button" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                                    Store
                                </button>
                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}