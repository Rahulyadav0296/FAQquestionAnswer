import React, { useState } from "react";
import Header from "./components/Header";
import { qaArray } from "./data";

function App() {
  const [openAnsIndex, setOpenAnsIndex] = useState(0);

  const handleQuestion = (index) => {
    setOpenAnsIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-questions">
      <Header />
      <div className="question-answer">
        <ul>
          {qaArray.map((question, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => handleQuestion(index)}
              >
                <i
                  className={`fa-solid faq-icon ${
                    openAnsIndex === index
                      ? "fa-chevron-down"
                      : "fa-chevron-right"
                  }`}
                ></i>
                <span>{question.question}</span>
              </div>
              {openAnsIndex === index && (
                <div className="faq-answer">{question.answer}</div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
