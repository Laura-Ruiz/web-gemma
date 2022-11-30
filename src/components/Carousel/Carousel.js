import React, { useState } from "react";
import "../../styles/Carousel/Carousel.css"
export default function Carrousel({ id }) {
  const [idImg, setIdImg] = useState(id);
  function anterior() {
    console.log("idImg", idImg);
    if (idImg > 5) {
      setIdImg(1);
    } else {
      let newId = idImg + 1;
      setIdImg(newId);
    }
  }
  function previa() {
    if (idImg <= 1) {
      setIdImg(6);
    } else {
      let newId = idImg - 1;
      setIdImg(newId);
    }
  }

  return (
    <div className="carousel">
      <button onClick={anterior}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#FFF"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>
      
        <img
          style={{ width: "30rem" }}
          src={require(`../../assets/images/gallery/gemma_gallery_${idImg}.jpg`)}
          alt={"Foto perfil"}
        />

        <button onClick={previa}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#FFF"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      
    </div>
  );
}
