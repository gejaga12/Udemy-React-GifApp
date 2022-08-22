import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //freno el renderizado propio del formulario
    if (inputValue.trim().length <= 1) return; //freno el renderizado sin nada escrito

    onNewCategory(inputValue.trim()); //agrego elementos a la lista mediante el input
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
