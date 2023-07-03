import React from "react";

export const selectOption = (e, setItem) => {
  if (e.target.checked === true) {
    setItem([e.target.getAttribute("data-option")]);
  } else if (e.target.checked === false) {
    setItem(null);
  }
};

export const selectSeveralOptions = (e, items, setItems) => {
  if (e.target.checked === true) {
    setItems([...items, e.target.getAttribute("data-option")]);
  } else if (e.target.checked === false) {
    const data = items.filter(
      (item) => item !== e.target.getAttribute("data-option")
    );

    setItems(data);
  }
};
