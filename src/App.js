import "./App.css";
import { useState } from "react";
import explorer from "./Data/folderData";
import Folder from "./Components/Folder";

function App() {
  const [explorerData, setexplorerData] = useState(explorer);
  // console.log(explorerData);
  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
