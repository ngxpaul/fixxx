import React, { useState, useEffect } from 'react';

import Layout from '../Layout';
import Loader from '../Loader';
import Main from '../Main';
import Quiz from '../Quiz';
import Result from '../Result';
import { shuffle } from '../../../utils';
const App = () => {
  useEffect(() => {
    let styleSheet;
    const loadCss = async () => {
      import('../../../../node_modules/semantic-ui-css/semantic.min.css')
        .then(() => {
          console.log("imported");
        });
    };
    const unloadCss = () => {
      if (styleSheet) {
        document.head.removeChild(styleSheet);
        document.head.removeChild(document.querySelector('script[src*="less.min.js"]'));
      }
    };
    loadCss();
    return () => {
      unloadCss();
    };
  }, []);


  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(null);
  const [data, setData] = useState(null);
  const [countdownTime, setCountdownTime] = useState(null);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [resultData, setResultData] = useState(null);

  const startQuiz = (data, countdownTime) => {
    console.log(data);
    setLoading(true);
    setLoadingMessage({
      title: 'Loading your quiz...',
      message: "It won't be long!",
    });
    setCountdownTime(countdownTime);

    setTimeout(() => {
      setData(data);
      setIsQuizStarted(true);
      setLoading(false);
    }, 1000);
  };

  const endQuiz = resultData => {
    setLoading(true);
    setLoadingMessage({
      title: 'Fetching your results...',
      message: 'Just a moment!',
    });

    setTimeout(() => {
      setIsQuizStarted(false);
      setIsQuizCompleted(true);
      setResultData(resultData);
      setLoading(false);
    }, 2000);
  };

  const replayQuiz = () => {
    setLoading(true);
    setLoadingMessage({
      title: 'Getting ready for round two.',
      message: "It won't take long!",
    });

    const shuffledData = shuffle(data);
    shuffledData.forEach(element => {
      element.options = shuffle(element.options);
    });

    setData(shuffledData);

    setTimeout(() => {
      setIsQuizStarted(true);
      setIsQuizCompleted(false);
      setResultData(null);
      setLoading(false);
    }, 1000);
  };

  const resetQuiz = () => {
    setLoading(true);
    setLoadingMessage({
      title: 'Loading the home screen.',
      message: 'Thank you for playing!',
    });

    setTimeout(() => {
      setData(null);
      setCountdownTime(null);
      setIsQuizStarted(false);
      setIsQuizCompleted(false);
      setResultData(null);
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      {loading && <Loader {...loadingMessage} />}
      {!loading && !isQuizStarted && !isQuizCompleted && (
        <Main startQuiz={startQuiz} />
      )}
      {!loading && isQuizStarted && (
        <Quiz data={data} countdownTime={countdownTime} endQuiz={endQuiz} />
      )}
      {!loading && isQuizCompleted && (
        <Result {...resultData} replayQuiz={replayQuiz} resetQuiz={resetQuiz} />
      )}
    </Layout>
  );
};

export default App;
