import { useState } from "react";
import "./App.css";

const FAQs = [
  {
    question: "Is this a good Product?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur est praesentium quasi placeat iusto expedita voluptatum perspiciatis vitae? Harum, eaque.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur est praesentium quasi placeat iusto expedita voluptatum perspiciatis vitae? Harum, eaque.",
  },
  {
    question: "When can I get it?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur est praesentium quasi placeat iusto expedita voluptatum perspiciatis vitae? Harum, eaque.",
  },
];

function App() {
  const listItems = FAQs.map((faq) => {
    const question = faq.question;
    const answer = faq.answer;
    return Qcomponent({ question: question, answer: answer });
  });

  return (
    <div className="box">
      <h2>Frequently Asked Questions</h2>
      <div>{listItems}</div>
    </div>
  );
}

interface Q {
  question: string;
  answer: string;
}

function Qcomponent({ question, answer }: Q) {
  const [show, setShow] = useState(true);
  function handleClick() {
    setShow(!show);
  }
  return (
    <ul className="listItems">
      <div className="firstPart">
        {question}
        {""}
        <button className="add" onClick={handleClick}>
          {show ? "-" : "+"}
        </button>{" "}
      </div>
      <div>{show && <p>{answer}</p>}</div>
    </ul>
  );
}

export default App;
