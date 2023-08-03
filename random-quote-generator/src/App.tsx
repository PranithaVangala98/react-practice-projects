//import { useState } from 'react'
import { useState } from "react";
import "./App.css";

const randomQuotes = [
  {
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison, type.fit",
  },
  {
    text: "You can observe a lot just by watching.",
    author: "Yogi Berra, type.fit",
  },
  {
    text: "A house divided against itself cannot stand.",
    author: "Abraham Lincoln, type.fit",
  },
  {
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe, type.fit",
  },
  {
    text: "Fate is in your hands and no one elses",
    author: "Byron Pulsifer, type.fit",
  },
  {
    text: "Be the chief but never the lord.",
    author: "Lao Tzu, type.fit",
  },
  {
    text: "Nothing happens unless first we dream.",
    author: "Carl Sandburg, type.fit",
  },
  {
    text: "Well begun is half done.",
    author: "Aristotle, type.fit",
  },
];

export default function RandomQuoteGenerator() {
  const [count, setCount] = useState(0);

  const num = randomQuotes.length;

  function handleClick() {
    const random = Math.floor(Math.random() * num);
    setCount(random);
  }
  return (
    <div className="root">
      <h1> Quote Generator</h1>
      <div className="body">
        <button className="NewQuote" onClick={handleClick}>
          New Quote
        </button>
        <div className="quote">{randomQuotes[count].text}</div>
        <div className="author">- {randomQuotes[count].author}</div>
      </div>
    </div>
  );
}
