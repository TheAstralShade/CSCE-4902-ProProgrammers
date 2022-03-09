import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ title, handleClick, action }) => 
{
  console.log(title);
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={handleClick}>
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="ui container">
          <form className="ui form" onSubmit={action}>
            <div className="field">
              <label>Name</label>
              <input type="text" placeholder="Name" name="name" />
            </div>

            <div className="field">
              <label>Age</label>
              <input type="number" name="age" placeholder="Age" />
            </div>

            <div className="field">
              <label>Height</label>
              <input type="text" name="height" placeholder="Height" />
            </div>
            <div className="field">
              <label>Weight</label>
              <input type="text" name="weight" placeholder="Weight" />
            </div>
            <button class="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>
        {/* {" "}
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div> */}
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
