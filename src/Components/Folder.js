import React, { useState } from "react";
import "../Style.css";

const Folder = ({ explorer }) => {
  const [expand, setexpand] = useState(false);
  const [showInput, setshowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const HandleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setexpand(true);
    setshowInput({ visible: true, isFolder });
  };
  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      setshowInput({ ...showInput, visible: false });
    }
  };
  // console.log(explorerData);
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: "5px" }}>
        <div className="folder" onClick={() => setexpand(!expand)}>
          <span>📁 {explorer.name}</span>

          <div>
            <button onClick={(e) => HandleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => HandleNewFolder(e, false)}>File +</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <>
              <div className="inputContainer">
                <span>{showInput.isFolder ? "📁" : "📄"}</span>
                <input
                  onBlur={() => setshowInput({ ...showInput, visible: false })}
                  type="text"
                  onKeyDown={onAddFolder}
                  className="inputContainer__input"
                  autoFocus
                />
              </div>
            </>
          )}
          {explorer.items.map((exp) => (
            // <span key={exp.id}>{exp.name}</span>
            <Folder key={exp.id} explorer={exp} />
          ))}
        </div>
      </div>
    );
  } else {
    return <div className="file"> 📄 {explorer.name}</div>;
  }
};

export default Folder;
