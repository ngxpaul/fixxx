import React, { useState } from "react";

import InputInformation from "./InputInfo";
import CreateQuestion from "./CreateQuestion";

const CreateQuiz = () => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [difficult, setDifficult] = useState("");
    const [step, setStep] = useState(1);

    const handleTitleChange = (value) => {
        setTitle(value);
    };

    const handleDifficultChange = (event) => {
        const value = event.target.value;
        setDifficult(value);
    };

    const handleTimeChange = (value) => {
        setTime(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Title:", title);
        console.log("DifficultLevel:", difficult);
        console.log("Time:", time);

        // Proceed to the next step
        setStep(step + 1);
    };

    const renderComponent = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <div className="mx-5 mb-8 w-full">
                            <h4 className="text-xl font-bold text-navy-700 text-green-400 dark:text-white">
                                Create new quiz
                            </h4>
                            <p className="mt-2 text-base text-gray-600">
                                This is where you can create a new quiz.
                            </p>
                        </div>
                        <div className="flex h-full">
                            {/* Project 1 */}
                            <div className=" my-5 mx-5 w-full items-center  justify-between bg-transparent">
                                <label className="font-medium">
                                </label>
                                <div className="word mt-5">
                                    <InputInformation
                                        Children={"Title"}
                                        onInputChange={handleTitleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex h-full">
                            <div className=" mx-5 my-5 w-full items-center  justify-between bg-transparent">

                                <div className="choosing mt-5">
                                    <div className="relative  mb-4 w-full">
                                        <select
                                            value={difficult}
                                            onChange={handleDifficultChange}
                                            className="bg-transparent w-full border-b-2 border-gray-400  required:ring-red-500 focus:border-green-500 focus:outline-none"
                                        >
                                            <option value="choose">-Choose level-</option>
                                            <option value="easy">Easy</option>
                                            <option value="medium">Medium</option>
                                            <option value="difficult">Difficult</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className=" mx-5 my-5 w-full items-center  justify-between bg-transparent">
                                <label className="font-medium"></label>
                                <div className="mean mt-5">
                                    <InputInformation
                                        Children={"Time (minutes)"}
                                        onInputChange={handleTimeChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="text-center transition-all hover:scale-105">
                            <input
                                className="rounded-full bg-green-400 py-3 px-10 text-base font-semibold text-white"
                                type="submit"
                                value={"Next->"}
                            ></input>
                        </div>
                    </div>
                );

            case 2:
                return <CreateQuestion />

            // Add more cases for additional steps/components

            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Card extra={"w-full p-4 h-full"}>
                {renderComponent()}
            </Card>
        </form>
    );
};

export default CreateQuiz;