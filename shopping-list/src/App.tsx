import { useState } from "react";
import "./App.css";
export default function ShoppingList() {
  const [itemName, setItemName] = useState("");
  const [itemList, setItemList] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (itemName !== "") {
      setItemList((prevItemList) => [...prevItemList, itemName]);
      setItemName("");
    }
  };
  return (
    <>
      <h3>Shopping List</h3>
      <div className="content">
        <h2> Items To Buy</h2>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add a new item"
              value={itemName}
              onChange={handleInputChange}
            ></input>
            <button className="add"> Add</button>
          </form>
        </div>
        <div className="display">
          <ul>
            {itemList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
