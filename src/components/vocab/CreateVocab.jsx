import React from "react";
import InputInformation from "./InputInfo";
import { useState } from "react";
import Card from '../card'
import Alert from "../alert/Alert";
import axiosClient from "../../ultils/AxiosClient";
import { DefaultModal } from "./sub-component/DefaultModal";

const CreateVocab = () => {
    const [word, setWord] = useState("");
    const [mean, setMean] = useState("");
    const [example, setExample] = useState("");
    const [pronounce, setPronounce] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [type, setType] = useState("");
    const [responseMessage, setResponseMessage] = useState('');
    const [isModalShow, setIsModalShow] = useState(false);
    const handleWordChange = (value) => {
        setWord(value);
    };

    const handleMeanChange = (value) => {
        setMean(value);
    };

    const handleExampleChange = (value) => {
        setExample(value);
    };

    const handlePronounceChange = (value) => {
        setPronounce(value);
    };

    const handleImageUrlChange = (value) => {
        setImageUrl(value);
    };

    const handleTypeChange = (event) => {
        const value = event.target.value;
        setType(value);
    };

    const resetResponse = () => {
        setResponseMessage('');
    };

    const handleAIGenerator = () => {
        console.log("clicked")
        setIsModalShow(true);
    }
    const handleClose = () => {
        setIsModalShow(false);
    }
    const createVocab = async (word, definition, example, type, pronounce, imageURL) => {
        try {
            const response = await axiosClient.post('/vocab', {
                word: word,
                definition: definition,
                example: example,
                type: type,
                pronounce: pronounce,
                imageURL: imageURL,
                userId: '-1'
            });

            console.log(response);
            return response;
        } catch (error) {
            console.error('Create Vocab Error:', error);
            throw error;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Word:", word);
        console.log("Mean:", mean);
        console.log("Example:", example);
        console.log("Pronounce:", pronounce);
        console.log("Image URL:", imageUrl);
        console.log("Type:", type);

        createVocab(word, mean, example, type, pronounce, imageUrl)
            .then((response) => {
                setResponseMessage(response.status);
                console.log(response);

                // Reset the input fields
                setWord('');
                setMean('');
                setExample('');
                setPronounce('');
                setImageUrl('');
                setType('');
            })
            .catch((error) => {
                setResponseMessage(error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-transparent">
            <Card extra={"w-full p-2 h-full bg-transparent"}>
                <div className="mx-5 w-full bg-transparent">
                    <h4 className="text-2xl font-bold text-navy-700 text-green-400 dark:text-white">
                        Create vocabulary
                    </h4>
                </div>
                <div className="flex h-full">
                    <div className="my-5 mx-5 w-full items-center justify-between bg-transparent">
                        <div className="word mt-5">
                            <InputInformation
                                value={word}
                                Children={"New word"}
                                onInputChange={handleWordChange}
                            />
                        </div>
                    </div>
                    <div className="mx-5 my-5 w-full items-center justify-between bg-transparent">
                        <div className="mean mt-5">
                            <InputInformation
                                value={mean}
                                Children={"Meaning"}
                                onInputChange={handleMeanChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex h-full">
                    <div className="mx-5 my-5 w-full items-center justify-between bg-transparent">
                        <div className="example mt-5">
                            <InputInformation
                                value={example}
                                Children={"Example"}
                                onInputChange={handleExampleChange}
                            />
                        </div>
                    </div>
                    <div className="mx-5 my-5 w-full items-center justify-between bg-transparent">
                        <div className="choosing mt-5">
                            <div className="relative mb-4 w-full">
                                <select
                                    value={type}
                                    onChange={handleTypeChange}
                                    id="underline_select"
                                    className="block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peeblock py-2.5 px-0w-full text-base text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200"
                                >
                                    <option value="" disabled hidden>
                                        Type
                                    </option>
                                    <option value="noun">Noun</option>
                                    <option value="verb">Verb</option>
                                    <option value="adjective">Adjective</option>
                                    <option value="adverb">Adverb</option>
                                    <option value="preposition">Preposition</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex h-full">
                    <div className="mx-5 my-5 w-full items-center justify-between bg-transparent">
                        <div className="pronounce mt-5">
                            <InputInformation
                                value={pronounce}
                                Children={"Pronunciation"}
                                onInputChange={handlePronounceChange}
                            />
                        </div>
                    </div>
                    <div className="mx-5 my-5 w-full items-center justify-between bg-transparent">
                        <div className="image mt-5">
                            <InputInformation
                                value={imageUrl}
                                Children={"Image URL"}
                                onInputChange={handleImageUrlChange}
                            />
                        </div>
                    </div>
                </div>
                {responseMessage == '200' && (
                    <Alert content="Create vocabulary successfully" handleFunction={resetResponse} />
                )}
                {responseMessage !== '200' && responseMessage !== '' && (
                    <Alert content="Create vocabulary successfully" handleFunction={resetResponse} />
                )}
                <div className="flex mx-auto gap-8">
                    <div className="text-center transition-all hover:scale-105">
                        <input
                            className="py-2 px-4 w-32  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                            type="submit"
                            value={"Create"}
                        ></input>
                    </div>
                    <div className="text-center transition-all hover:scale-105">
                        <button onClick={handleAIGenerator} type="button" class=" py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">

                            AI Generator
                        </button>
                    </div>
                    {isModalShow && <DefaultModal boolean={true} handleClose={handleClose} />}
                </div>
            </Card>
        </form >
    );
};

export default CreateVocab;