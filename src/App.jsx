import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Seacrh from "./SearchInput.jsx";
import searchImages from "./searchImages.jsx";
import Resimler from "./components/imageList.jsx";

function App() {
  const [images, setimages] = useState([]);
  const [value1, setvalue] = useState(0);
  const handleData = async (term) => {
    setvalue(term);
    const result = await searchImages(term);
    setimages(result);
  };
  return (
    <>
      <div className="root">
        <Seacrh FormSubmit={handleData} />
        <Resimler imagesPlaceHolder={images} />
        <p>{value1}</p>
      </div>
    </>
  );
}

export default App;
