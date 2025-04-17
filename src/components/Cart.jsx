import React from "react";
import Items from "./Items.jsx";

function Cart({ items, incrementCount, minusCount, deleteItem, reset }) {
  return (
    <>
      {items.map((itm) => (
        <Items
          itm={itm}
          incrementCount={incrementCount}
          minusCount={minusCount}
          deleteItem={deleteItem}
          reset={reset}
        />
      ))}

      <button class="btn btn-primary rounded ml-4" onClick={() => reset()}>
        Reset
      </button>
    </>
  );
}

export default Cart;
