import React, { useState } from "react";
import "./SearchCss.css";
function SearchInput({ FormSubmit }) {
  const [first, setfirst] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    FormSubmit(first);
  };

  const handleChange = (event) => {
    setfirst(event.target.value);
  };
  return (
    <div>
      <form className="OutDiv" onSubmit={handleFormSubmit}>
        <label>
          <strong>Ne Arıyorsunuz ?</strong>
        </label>
        <input type="text" value={first} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchInput;
