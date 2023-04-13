import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
function ParentComponent() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent onClick={handleButtonClick} showModal={showModal} />
     
    </div>
  );
}

export default ParentComponent;
