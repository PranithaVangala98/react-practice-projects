import { useState } from "react";
import "./App.css";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",

  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];
export default function ImageCarousel() {
  const length = images.length;
  const [count, setCount] = useState(0);
  function leftClick() {
    if (count === 0) {
      setCount(length - 1);
    } else {
      setCount(count - 1);
    }
  }
  function rightClick() {
    if (count === length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <>
      <h1>Image Carousel</h1>
      <div className="slider">
        <button className="arrow-right" onClick={leftClick}>
          <span>&larr;</span>Back
        </button>
        <img src={images[count]} alt="scenery" height={600} width={900} />
        <button className="arrow-right" onClick={rightClick}>
          Next <span>&rarr;</span>
        </button>
      </div>
    </>
  );
}
