import React from "react";
import Card from "../card";
import InputInformation from "./InputInfo";
import { useState } from "react";
import axiosClient from "../../ultils/AxiosClient";


const CreateQuestion = (props) => {
    console.log(props.id);
    var quizId = props.id;
    const [number, setNumber] = useState(1);
    const [question, setQuestion] = useState("");
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [d, setD] = useState("");
    let correctAns = "";
    const [type, setType] = useState("");
    const handleQuestionChange = (value) => {
        setQuestion(value);
    };
    const handleAChange = (value) => {
        setA(value);
    };
    const handleBChange = (value) => {
        setB(value);
    };
    const handleCChange = (value) => {
        setC(value);
    };
    const handleDChange = (value) => {
        setD(value);
    };
    const handleCorrectAnsChange = (event) => {
        const value = event.target.value;
        setType(value);
    };
    const handleNewQuestion = (event) => {
        event.preventDefault();
        // Save question ...

        console.log("Question:", question);
        console.log("A:", a);
        console.log("B:", b);
        console.log("C:", c);
        console.log("D:", d);

        let correctAns;
        switch (type) {
            case "a":
                correctAns = a;
                break;
            case "b":
                correctAns = b;
                break;
            case "c":
                correctAns = c;
                break;
            case "d":
                correctAns = d;
                break;
            default:
                break;
        }

        console.log("Correct Answer:", type, ".", correctAns);


        const requestData = {
            questions: [question],
            correctAnswers: [correctAns],
            option1: [a],
            option2: [b],
            option3: [c],
            option4: [d]
        };

        axiosClient
            .post(`/quiz/question/create?id=${quizId}`, requestData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
                window.alert("Error occurred. Please try again.");
            });
    };

    const handleSubmit2 = (event) => {
        event.preventDefault();
        //save question ....
        console.log("Question:", question);
        console.log("A:", a);
        console.log("B:", b);
        console.log("C:", c);
        console.log("D:", d);
        switch (type) {
            case "a":
                correctAns = a;
                break;
            case "b":
                correctAns = b;

                break;
            case "c":
                correctAns = c;

                break;
            case "d":
                correctAns = d;
                break;
            default:
                break;
        }
        console.log("Correct Answer:", type, ".", correctAns);
        window.alert("Success!");
    };
    return (
        <form>
            <Card extra={"w-full p-4 h-full"}>
                {/* Project 1 */}
                <div className="flex h-full">
                    <div className=" my-5 mx-5 w-full items-center  justify-between bg-transparent">
                        <label className="text-xl font-bold text-navy-700 text-green-400 dark:text-white">
                            Question {number}: <label className="ml-2 text-red-400">*</label>
                        </label>
                        <div className="word mt-5">
                            <InputInformation
                                Children={"What is the capital city of France?"}
                                onInputChange={handleQuestionChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex h-full">
                    <div className=" mx-5 my-5 w-full items-center  justify-between bg-transparent">
                        <label className="font-medium">Answer A:</label>
                        <label className="ml-2 text-red-400">*</label>
                        <div className="mean mt-5">
                            <InputInformation
                                Children={"Paris"}
                                onInputChange={handleAChange}
                            />
                        </div>
                    </div>

                    <div className=" mx-5 my-5 w-full items-center  justify-between bg-transparent">
                        <label className="font-medium">Answer B:</label>
                        <label className="ml-2 text-red-400">*</label>
                        <div className="mean mt-5">
                            <InputInformation
                                Children={"London"}
                                onInputChange={handleBChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex h-full">
                    <div className=" mx-5 my-5 w-full items-center  justify-between bg-transparent">
                        <label className="font-medium">Answer C:</label>{" "}
                        <label className="ml-2 text-red-400">*</label>
                        <div className="mean mt-5">
                            <InputInformation
                                Children={"Rome"}
                                onInputChange={handleCChange}
                            />
                        </div>
                    </div>

                    <div className=" mx-5 my-5 w-full items-center  justify-between bg-transparent">
                        <label className="font-medium">Answer D:</label>{" "}
                        <label className="ml-2 text-red-400">*</label>
                        <div className="mean mt-5">
                            <InputInformation
                                Children={"Madrid"}
                                onInputChange={handleDChange}
                            />
                        </div>
                    </div>
                </div>

                <div className=" mx-auto my-5 w-1/3  items-center  justify-between bg-transparent">
                    <label className="font-medium">
                        Choose correct answer:{" "}
                        <label className="ml-2 text-red-400">*</label>
                    </label>
                    <div className="choosing mt-5">
                        <div className="relative  mb-4 w-full">
                            <select
                                value={type}
                                onChange={handleCorrectAnsChange}
                                class="bg-transparent w-full border-b-2 border-gray-400  required:ring-red-500 focus:border-green-500 focus:outline-none"
                            >
                                <option value="choose">-Choose-</option>
                                <option value="a">Answer A</option>
                                <option value="b">Answer B</option>
                                <option value="c">Answer C</option>
                                <option value="d">Answer D</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex h-full text-center">
                    <div className="p-10  transition-all hover:scale-105">
                        <input
                            className="rounded-full bg-green-400 py-3 px-10 text-base font-semibold text-white"
                            type="submit"
                            value={"More Question->"}
                            onClick={handleNewQuestion}
                        ></input>
                    </div>
                    <div className="p-10  transition-all hover:scale-105">
                        <input
                            className="rounded-full bg-green-400 py-3 px-10 text-base font-semibold text-white"
                            type="submit"
                            value={"Complete quiz creation"}
                            onClick={handleSubmit2}
                        ></input>
                    </div>
                </div>
            </Card>
        </form>
    );
};

export default CreateQuestion;
