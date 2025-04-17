import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Items from "./components/Items";
import NavBar from "./components/NavBar";

import Cart from "./components/Cart";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Product1", count: 0 },
    { id: 2, name: "Product2", count: 0 },
    { id: 3, name: "Product3", count: 0 },
  ]);
  const [counter, setCounter] = useState(0);

  function incrementCount(id) {
    let newArr = items.map((itm) => {
      if (itm.id === id) itm.count++;
      return itm;
    });
    setItems(newArr);
    setCounter(counter + 1);
  }

  function minusCount(id) {
    let newArr = items.map((itm) => {
      if (itm.id === id && itm.count > 0) itm.count--;
      return itm;
    });

    setItems(newArr);
    if (counter > 0) setCounter(counter - 1);
  }
  function reset() {
    console.log("reset");
    let newArr = items.map((itm) => {
      itm.count = 0;
      return itm;
    });
    setItems(newArr);
  }

  function deleteItem(id) {
    console.log("deleted");
    let newArr = items.filter((itm) => itm.id !== id);
    setItems(newArr);
    console.log(newArr);
  }
  return (
    <>
      <NavBar counter={counter} />
      <Items
        items={items}
        incrementCount={incrementCount}
        minusCount={minusCount}
        deleteItem={deleteItem}
        reset={reset}
      />
      {/* <Cart  /> */}
    </>
  );
}

export default App;
