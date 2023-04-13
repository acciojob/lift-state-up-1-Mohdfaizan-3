import React from "react";

function ChildComponent(props) {
    const { onClick, showModal } = props;
  return (
    <div className="child">
      {" "}
      <h2>Child Component</h2>
      <button onClick={onClick}>show modal</button>
      {showModal && (
        <div>
          {" "}
          <h3>Modal Content</h3>
          <p>This is the modal content</p>
        </div>
      )}
    </div>
  );
}

export default ChildComponent;
