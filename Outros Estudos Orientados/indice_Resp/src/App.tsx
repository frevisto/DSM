import React, {useState} from "react";
import { Navbar,Aside,MainContent } from "./components";

function App(){
  const [content, setContent] = useState(null);

  const handleClear = () => {
    setContent(null);
  };

  return (
    <div className="flex h-screen">
      <Aside />
      <div className="flex-1 flex flex-col">
        <Navbar onClear={handleClear} />
        <MainContent content={content} />
      </div>
    </div>
  );
}

export default App;