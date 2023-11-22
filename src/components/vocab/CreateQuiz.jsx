import React, { useState } from "react";
import Card from "../card";
import InputInformation from "../vocab/InputInfo";
import CreateQuestion from "../vocab/CreateQuestion";
import Alert from "../alert/Alert";
const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [difficult, setDifficult] = useState("");
  const [step, setStep] = useState(1);
  const [quiz, setQuiz] = useState({
    title: "",
    difficultyLevel: "",
    maxTime: "",
  });
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
    if (!isNaN(parseInt(time))) {
      console.log("Title:", title);
      console.log("DifficultLevel:", difficult);
      console.log("Time:", time);
      const requestData = {
        title: title,
        difficultyLevel: difficult,
        maxTime: time,
      };
      setQuiz(requestData);
      setStep(step + 1);
    } else {
      alert("Time is a number!!");
      return;
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
              <div className=" my-5 mx-5 w-full items-center  justify-between bg-transparent">
                <label className="font-medium"></label>
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
                <label className="font-medium"></label>
                <div className="choosing mt-5">
                  <div className="relative  mb-4 w-full bg-transparent">
                    <select
                      value={difficult}
                      onChange={handleDifficultChange}
                      className="block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peeblock py-2.5 px-0w-full text-base text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200"
                    >
                      <option value="" disabled hidden>
                        Difficult-level
                      </option>

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
        return <CreateQuestion quiz={quiz} />;

      // Add more cases for additional steps/components

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card extra={"w-full p-4 h-full"}>{renderComponent()}</Card>
    </form>
  );
};

export default CreateQuiz;
