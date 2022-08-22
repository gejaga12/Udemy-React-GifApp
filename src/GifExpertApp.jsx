import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Boca Juniors", "Real Madrid"]);
  const onAddCategory = () => {
    setCategories([...categories, "hola"]);
  };

  return (
    <>
      {/* TITULO */}
      <h1>PROYECTO GIF</h1>
      {/* INPUT */}
      <AddCategory />
      {/* LISTADO DE GIF */}
      <button onClick={onAddCategory}>agregar</button>
      {categories.map((category) => {
        return <li key={category}>{category}</li>;
      })}
      {/* GIF ITEM */}
    </>
  );
};

export default GifExpertApp;
