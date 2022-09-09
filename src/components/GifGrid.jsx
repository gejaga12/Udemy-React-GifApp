import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import "../styles.css";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then((newImages) => setImages(newImages));
  }, []);

  return (
    <>
      <h5 className="tittle">{category}</h5>
      <ul className="ul">
        {images.map((image) => (
          <li key={image.id} className="listStyle">
            {" "}
            <img src={image.url} className="imgStyle"></img>{" "}
            <div className="textStyle">{image.title}</div>{" "}
          </li>
        ))}
      </ul>
    </>
  );
};
