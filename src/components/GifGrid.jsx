import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);


  
  useEffect(() => {
    getGifs(category).then((newImages) => setImages(newImages));
  }, []);

  return (
    <>
      <h5>{category}</h5>
      <ol>
        <li>Titulo</li>
        <li>Titulo</li>
        <li>Titulo</li>
      </ol>
    </>
  );
};
