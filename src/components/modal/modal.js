import React from "react";
import "./style.css";

export const Modal = ({ first_name, last_name, avatar, isOpen, handleClose }) => {
  return (
    <div className="modalWrapper" style={{ display: isOpen ? "flex" : "none" }}>
      <button type="button" className="ModalBtnClose" onClick={() => handleClose()}>
        X
      </button>
      <div>
        <img src={avatar} alt="" />
      </div>
      <div>name: {first_name}</div>
      <div>lastname: {last_name}</div>
    </div>
  );
};
