import React, { useState } from "react";
import "./Quiz.css";
import { useEffect } from "react";

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const MyModal = ({ closeModal }) => {
    useEffect(() => {
      document.body.style.overflowY = "scroll";
      return () => {
        document.body.style.overflowY = "scroll";
      };
    }, []);
    return (
      <>
        <div className="modal-wrapper" onClick={closeModal}>
          <div className="modal-container">
            <h2>Stay Tuned.</h2>
            <p>Your total score is {totalScore}.</p>
            <p>Subscribe</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      </>
    );
  };


  const closeModal = () => setShowModal(false);
  const questions = [
    {
      id: 1,
      text: "Have you ever felt numbness or tingling? (Loss of Sensation)",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 2,
      text: "Have you ever felt hot flashes? (Heat from Upper parts of the body)",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 3,
      text: "Have you ever felt shakiness or instability in legs ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 4,
      text: "Have you ever been unable to relax ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 5,
      text: "Have you ever been afraid of worst happening ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 6,
      text: "Have you ever felt Dizzy or lightheaded ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 7,
      text: "Have you heart ever felt pounding/racing ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 8,
      text: "Have you heart ever been in an unsteady/unstable state ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 9,
      text: "Have you ever felt terrified or afraid ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 10,
      text: "Have you ever felt nervous ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 11,
      text: "Have you ever felt like something is stuck in your throat ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 12,
      text: "Have you ever hands ever trembled ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 13,
      text: "Have you hands ever  been in shaky/trembling state ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 14,
      text: "Have you ever been afraid of losing self-control ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 15,
      text: "Have you ever felt difficulty in breathing ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 16,
      text: "Have you ever been afraid of dying ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 17,
      text: "Have you ever felt scared ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 18,
      text: "Have you ever felt indigestion (Stomach Issues) ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 19,
      text: "Have you ever felt like you are going to faint ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 20,
      text: "Have you ever had hot/cold sweats ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
    {
      id: 21,
      text: "Have you ever felt severe blushing due to nervousness ?",
      options: ["Not at all", "Mildly", "Moderately", "Severely"],
    },
  ];

  const handleAnswerChange = (event) => {
    const { name, value } = event.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = () => {
  let score = 0;
    for (let i = 0; i < questions.length; i++) {
      let selectedOption = answers[i + 1];
      if (selectedOption === "Severely") {
        score = score + 3;
      } else if (selectedOption === "Moderately") {
        score = score + 2;
      } else if (selectedOption === "Mildly") {
        score = score + 1;
      } else if (selectedOption === "Not at all") {
        score = score + 0;
      }
  }
    setTotalScore(score);
    setShowResult(true);
    setShowModal(true);
  };

  
  return (
    <div className="body">
      <div className="container">
        <h1>Beck Anxiety Inventory Quiz</h1>
        <form>
          {questions.map((question, index) => (
            <div key={index}>
              <p className="questions-container">
                {question.id}.{question.text}
              </p>
              <div className="options-container">
                {question.options.map((option, i) => (
                  <div key={i}>
                    <input
                      type="radio"
                      name={index + 1}
                      value={option}
                      onChange={handleAnswerChange}
                    />
                    <label>{option}</label>
                    <hr className="quiz-hr" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </form>
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
        {showModal && showResult && (
          <>
            <MyModal closeModal={closeModal} />
          </>
        )}
      </div>
    </div>
  );
};
export default Quiz;
