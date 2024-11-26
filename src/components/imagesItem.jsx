import React from "react";

function imagesItem({ source }) {
  console.log(source);
  return (
    <div>
      <img
        className="imageListImg"
        src={source.urls.small}
        alt={source.alt_description}
      />
    </div>
  );
}

export default imagesItem;
