import React from "react";
import Resim from "./imagesItem.jsx";
import "../SearchCss.css";
function imageList({ imagesPlaceHolder }) {
  return (
    <div className="resimler">
      {imagesPlaceHolder.map((img, index) => {
        return <Resim key={index} source={img} />;
      })}
    </div>
  );
}

export default imageList;
