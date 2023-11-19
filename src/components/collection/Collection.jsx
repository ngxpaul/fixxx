import React, { useState, useEffect } from 'react';
import './Collection.css';

const Collection = () => {
  const [timeValue, setTimeValue] = useState(15);
  const [queCount, setQueCount] = useState(0);
  const [queNumb, setQueNumb] = useState(1);
  const [userScore, setUserScore] = useState(0);
  const [widthValue, setWidthValue] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      numb: 1,
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      answer: 'Paris',
    },
    {
      numb: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Jupiter', 'Earth', 'Venus'],
      answer: 'Mars',
    },
    // Add more questions as needed
  ];

  useEffect(() => {
    if (quizStarted) {
      startTimer(timeValue);
      startTimerLine(widthValue);
    }
  }, [quizStarted, timeValue, widthValue]);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const exitQuiz = () => {
    setQuizStarted(false);
  };

  const continueQuiz = () => {
    setQuizStarted(true);
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
  };

  const restartQuiz = () => {
    setQuizStarted(true);
    setShowResult(false);
    setTimeValue(15);
    setQueCount(0);
    setQueNumb(1);
    setUserScore(0);
    setWidthValue(0);
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
  };

  const quitQuiz = () => {
    setQuizStarted(false);
    setShowResult(false);
  };

  const nextQuestion = () => {
    if (queCount < questions.length - 1) {
      setQueCount(queCount + 1);
      setQueNumb(queNumb + 1);
      showQuestions(queCount + 1);
      queCounter(queNumb + 1);
      startTimer(timeValue);
      startTimerLine(widthValue);
    } else {
      setShowResult(true);
    }
  };

  const showQuestions = (index) => {
    // Logic for showing questions
    // Add your logic here...
  };

  const queCounter = (index) => {
    // Logic for updating question counter
    // Add your logic here...
  };

  const startTimer = (time) => {
    // Logic for starting the timer
    // Add your logic here...
  };

  const startTimerLine = (time) => {
    // Logic for starting the timer line
    // Add your logic here...
  };

  return (
    <div>
      {quizStarted && !showResult ? (
        <div className="quiz_box">
          <header>
            <div className="title">Awesome Quiz Application</div>
            <div className="timer">
              <div className="time_left_txt">Time Left</div>
              <div className="timer_sec">{timeValue}</div>
            </div>
            <div className="time_line"></div>
          </header>
          <section>
            <div className="que_text">{questions[queCount].question}</div>
            <div className="option_list">
              <ul>
                {questions[queCount].options.map((option, index) => (
                  <li key={index} onClick={() => optionSelected(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <footer>
            <div className="total_que">
              <p>{queNumb}</p> of <p>{questions.length}</p> Questions
            </div>
            <button className="next_btn" onClick={nextQuestion}>
              Next Que
            </button>
          </footer>
        </div>
      ) : (
        <div className="start_btn">
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      )}
      <div className="info_box">
        <div className="info-title">
          <span>Some Rules of this Quiz</span>
        </div>
        <div className="info-list">
          <div className="info">1. You will have only <span>15 seconds</span> per each question.</div>
          <div className="info">2. Once you select your answer, it can't be undone.</div>
          <div className="info">3. You can't select any option once time goes off.</div>
          <div className="info">4. You can't exit from the Quiz while you're playing.</div>
          <div className="info">5. You'll get points on the basis of your correct answers.</div>
        </div>
        <div className="buttons">
          <button className="quit" onClick={exitQuiz}>
            Exit Quiz
          </button>
          <button className="restart" onClick={continueQuiz}>
            Continue
          </button>
        </div>
      </div>
      {showResult && (
        <div className="result_box">
          <div className="icon">
            <i className="fas fa-crown"></i>
          </div>
          <div className="complete_text">You've completed the Quiz!</div>
          <div className="score_text">
            Your Result: {userScore} out of {questions.length}
          </div>
          <div className="buttons">
            <button className="restart" onClick={restartQuiz}>
              Replay Quiz
            </button>
            <button className="quit" onClick={quitQuiz}>
              Quit Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
