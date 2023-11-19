import React, { useState } from "react";
import Card from "../card";
import InputInformation from "../vocab/InputInfo";
import CreateQuestion from "../vocab/CreateQuestion";
import axiosClient from "../../ultils/AxiosClient";
const CreateQuiz = () => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [difficult, setDifficult] = useState("");
    const [step, setStep] = useState(1);
    // Empty dependency array ensures the effect runs only once
    const [quizId, setQuizId] = useState(-1);
    const [quizIdSet, setQuizIdSet] = useState(false);

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
        const requestData = {
            title: title,
            difficultyLevel: difficult,
            maxTime: time
        };

        if (!quizIdSet) {
            axiosClient
                .post("/quiz/create", requestData)
                .then(response => {
                    // Handle the API response here
                    console.log(response.data.id);
                    setQuizId(response.data.id);
                    setQuizIdSet(true);
                    setStep(step + 1);
                })
                .catch(error => {
                    // Handle error if the API request fails
                    console.error(error);
                });
        }

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
                            <div className=" my-5 mx-5 w-full items-center  justify-between bg-white">
                                <label className="font-medium">
                                    Title <label className="ml-2 text-red-400">*</label>
                                </label>
                                <div className="word mt-5">
                                    <InputInformation
                                        Children={"Mini test"}
                                        onInputChange={handleTitleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex h-full">
                            <div className=" mx-5 my-5 w-full items-center  justify-between bg-white">
                                <label className="font-medium">
                                    Difficult-Level <label className="ml-2 text-red-400">*</label>
                                </label>
                                <div className="choosing mt-5">
                                    <div className="relative  mb-4 w-full">
                                        <select
                                            value={difficult}
                                            onChange={handleDifficultChange}
                                            className="w-full border-b-2 border-gray-400  required:ring-red-500 focus:border-green-500 focus:outline-none"
                                        >
                                            <option value="choose">-Choose level-</option>
                                            <option value="easy">Easy</option>
                                            <option value="medium">Medium</option>
                                            <option value="difficult">Difficult</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className=" mx-5 my-5 w-full items-center  justify-between bg-white">
                                <label className="font-medium">Time (minutes)</label>
                                <div className="mean mt-5">
                                    <InputInformation
                                        Children={""}
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
                return <CreateQuestion id={quizId} />

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