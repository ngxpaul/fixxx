import React from "react";
import Card from "../card/Index";
import InputInformation from "./InputInfo";
import { useState } from "react";
import axiosClient from "../../ultils/AxiosClient";
import CreateQuiz from "./CreateQuiz";
import Alert from "../alert/Alert";
import axios from "axios";

const CreateQuestion = (props) => {
  const { quiz } = props;

  const [quizIdSet, setQuizIdSet] = useState(false);
  const [number, setNumber] = useState(0);

  //current question
  const [question, setQuestion] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");

  const [type, setType] = useState(""); //type chỉ là abcd

  //list questions
  const [listquestion, setListQuestion] = useState([]);
  const [listA, setListA] = useState([]);
  const [listB, setListB] = useState([]);
  const [listC, setListC] = useState([]);
  const [listD, setListD] = useState([]);
  const [listcorrectAns, setListCorrectAns] = useState([]);
  const [listType, setListType] = useState([]);

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

  const handleNextQuestion = (event) => {
    event.preventDefault();

    if (
      question === "" ||
      a === "" ||
      b === "" ||
      c === "" ||
      d === "" ||
      type === ""
    ) {
      window.alert("Please fill out all fields");
      return;
    }
    setNumber(number + 1);
    //lấy dữ liệu
    let correctAns = "";
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
    //dùng mảng trung gian
    let cloneListQuestion = [...listquestion];
    let cloneListType = [...listType];
    let cloneListCorrectAns = [...listcorrectAns];
    let cloneListA = [...listA];
    let cloneListB = [...listB];
    let cloneListC = [...listC];
    let cloneListD = [...listD];
    //nếu chưa lưu

    if (number > listquestion.length - 1) {
      // Lưu dữ liệu vào mảng
      cloneListQuestion = [...cloneListQuestion, question];
      cloneListType = [...cloneListType, type];
      cloneListCorrectAns = [...cloneListCorrectAns, correctAns];
      cloneListA = [...cloneListA, a];
      cloneListB = [...cloneListB, b];
      cloneListC = [...cloneListC, c];
      cloneListD = [...cloneListD, d];
    } else {
      // nếu đã lưu rồi thì update

      cloneListQuestion[number] = question;
      cloneListType[number] = type;
      cloneListCorrectAns[number] = correctAns;
      cloneListA[number] = a;
      cloneListB[number] = b;
      cloneListC[number] = c;
      cloneListD[number] = d;
    }
    setListQuestion(cloneListQuestion);
    setListType(cloneListType);
    setListCorrectAns(cloneListCorrectAns);
    setListA(cloneListA);
    setListB(cloneListB);
    setListC(cloneListC);
    setListD(cloneListD);
    console.log(
      cloneListQuestion,
      cloneListCorrectAns,
      cloneListA,
      cloneListB,
      cloneListC,
      cloneListD
    );

    if (number >= listquestion.length - 1) {
      // Reset các trường dữ liệu nếu chưa có dữ liệu
      setQuestion("");
      setA("");
      setB("");
      setC("");
      setD("");
      setType("");
    } else {
      //hiển thị lại các trường dữ liệu
      console.log("n", number, "length", listquestion.length);
      let index = number + 1;
      setQuestion(listquestion[index]);
      setA(listA[index]);
      setB(listB[index]);
      setC(listC[index]);
      setD(listD[index]);
      setType(listType[index]);
    }
  };
  //xử lí khi xem lại// correct
  const handlePrevQuestion = (event) => {
    event.preventDefault();

    if (number > 0) {
      setNumber(number - 1);

      //hiển thị lại các trường dữ liệu
      let index = number - 1;
      setQuestion(listquestion[index]);
      setA(listA[index]);
      setB(listB[index]);
      setC(listC[index]);
      setD(listD[index]);
      setType(listType[index]);
      //save lại dữ liệu nếu có dữ liệu rồi
      if (
        question != "" &&
        a != "" &&
        b != "" &&
        c != "" &&
        d != "" &&
        type != ""
      ) {
        let correctAns = "";
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
        let cloneListQuestion = [...listquestion];
        let cloneListType = [...listType];
        let cloneListCorrectAns = [...listcorrectAns];
        let cloneListA = [...listA];
        let cloneListB = [...listB];
        let cloneListC = [...listC];
        let cloneListD = [...listD];

        cloneListQuestion[number] = question;
        cloneListType[number] = type;
        cloneListCorrectAns[number] = correctAns;
        cloneListA[number] = a;
        cloneListB[number] = b;
        cloneListC[number] = c;
        cloneListD[number] = d;

        setListQuestion(cloneListQuestion);
        setListType(cloneListType);
        setListCorrectAns(cloneListCorrectAns);
        setListA(cloneListA);
        setListB(cloneListB);
        setListC(cloneListC);
        setListD(cloneListD);

        console.log(
          cloneListQuestion,
          cloneListCorrectAns,
          cloneListA,
          cloneListB,
          cloneListC,
          cloneListD
        );
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let cloneListQuestion = [...listquestion];
    let cloneListType = [...listType];
    let cloneListCorrectAns = [...listcorrectAns];
    let cloneListA = [...listA];
    let cloneListB = [...listB];
    let cloneListC = [...listC];
    let cloneListD = [...listD];
    //save/update dữ liệu (nếu có)
    if (
      question != "" &&
      a != "" &&
      b != "" &&
      c != "" &&
      d != "" &&
      type != ""
    ) {
      let correctAns = "";
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

      cloneListQuestion[number] = question;
      cloneListType[number] = type;
      cloneListCorrectAns[number] = correctAns;
      cloneListA[number] = a;
      cloneListB[number] = b;
      cloneListC[number] = c;
      cloneListD[number] = d;

      setListQuestion(cloneListQuestion);
      setListType(cloneListType);
      setListCorrectAns(cloneListCorrectAns);
      setListA(cloneListA);
      setListB(cloneListB);
      setListC(cloneListC);
      setListD(cloneListD);

      console.log(
        cloneListQuestion,
        cloneListCorrectAns,
        cloneListA,
        cloneListB,
        cloneListC,
        cloneListD
      );
    }

    const requestDataQuiz = {
      title: quiz.title,
      difficultyLevel: quiz.difficultyLevel,
      maxTime: quiz.maxTime,
    };

    const requestDataQues = {
      questions: cloneListQuestion,
      correctAnswers: cloneListCorrectAns,
      option1: cloneListA,
      option2: cloneListB,
      option3: cloneListC,
      option4: cloneListD,
    };
    console.log(requestDataQues);
    //request tới quiz trước-> lấy quizId
    let quizId = -1;
    if (!quizIdSet) {
      axiosClient
        .post("/quiz", requestDataQuiz)
        .then((response) => {
          // Handle the API response here
          console.log("quizId", response.data.id);
          quizId = response.data.id;
          setQuizIdSet(true);

          if (quizId != -1) {
            // Request to the second API after the first API completes
            axiosClient
              .post(`/quiz/question?id=${quizId}`, requestDataQues)
              .then((response) => {
                console.log(response.data);
                window.alert("Create quiz successfully");
              })
              .catch((error) => {
                console.error(error);
                window.alert("Error occurred. Please try again.");
              });
          }
        })
        .catch((error) => {
          // Handle error if the API request fails
          console.error(error);
        });
    }
    //ket thuc
  };
  return (
    <Card extra={"w-full p-4 h-full"}>
      {/* Project 1 */}

      <div className="flex h-full">
        <div className=" mx-5 my-5 w-full items-center  justify-between bg-transparent">
          <label className="text-xl font-bold text-navy-700 text-green-400 dark:text-white">
            Question {number + 1}:{" "}
            <label className="ml-2 text-red-400">*</label>
          </label>
          <div className="word mt-5">
            <InputInformation
              Children={"Question"}
              onInputChange={handleQuestionChange}
              value={question}
            />
          </div>
        </div>

        <div className=" mx-5 my-5 w-full items-center  justify-between bg-transparent">
          <label className="font-medium">
            <label className="ml-2 text-red-400"></label>
          </label>
          <div className="choosing mt-5">
            <div className="relative  mb-4 w-full">
              <select
                value={type}
                onChange={handleCorrectAnsChange}
                class="block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peeblock py-2.5 px-0w-full text-base text-gray-700 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200"
              >
                <option value="" disabled hidden>
                  Correct answer
                </option>
                <option value="a">Answer A</option>
                <option value="b">Answer B</option>
                <option value="c">Answer C</option>
                <option value="d">Answer D</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-full">
        <div className=" mx-5 my-5 w-full items-center  justify-between bg-transparent">
          <label className="font-medium"></label>
          <label className="ml-2 text-red-400"></label>
          <div className="mean mt-5">
            <InputInformation
              Children={"Answer A"}
              onInputChange={handleAChange}
              value={a}
            />
          </div>
        </div>

        <div className=" mx-5 my-5 w-full items-center  justify-between bg-transparent">
          <label className="font-medium"></label>
          <label className="ml-2 text-red-400"></label>
          <div className="mean mt-5">
            <InputInformation
              Children={"Answer B"}
              onInputChange={handleBChange}
              value={b}
            />
          </div>
        </div>
      </div>
      <div className="flex h-full">
        <div className=" mx-5 my-5 w-full items-center  justify-between bg-transparent">
          <label className="font-medium"></label>{" "}
          <label className="ml-2 text-red-400"></label>
          <div className="mean mt-5">
            <InputInformation
              Children={"Answer C"}
              onInputChange={handleCChange}
              value={c}
            />
          </div>
        </div>

        <div className=" mx-5 my-5 w-full items-center  justify-between bg-transparent">
          <label className="font-medium"></label>{" "}
          <label className="ml-2 text-red-400"></label>
          <div className="mean mt-5">
            <InputInformation
              Children={"Answer D"}
              onInputChange={handleDChange}
              value={d}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-full text-center">
        <div className="p-10  transition-all hover:scale-105">
          <input
            className="rounded-full bg-green-400 py-3 px-10 text-base font-semibold text-white"
            type="submit"
            value={"Prev"}
            onClick={handlePrevQuestion}
          ></input>
        </div>
        <div className="p-10  transition-all hover:scale-105">
          <input
            className="rounded-full bg-green-400 py-3 px-10 text-base font-semibold text-white"
            type="submit"
            value={"Next"}
            onClick={handleNextQuestion}
          ></input>
        </div>
        <div className="p-10  transition-all hover:scale-105">
          <input
            className="rounded-full bg-green-400 py-3 px-10 text-base font-semibold text-white"
            type="submit"
            value={"Done"}
            onClick={handleSubmit}
          ></input>
        </div>
      </div>
    </Card>
  );
};

export default CreateQuestion;
