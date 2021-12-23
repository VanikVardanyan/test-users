import React, { useCallback } from "react";
import { useState } from "react/cjs/react.development";
import { api } from "../../api";
import { Modal } from "../modal";
import "./style.css";

export const UserCard = ({ id, name, email, img, disabelBtn, handleDisable }) => {
  const [open, setOpen] = useState(false);
  const [dataDetail, setDataDetail] = useState({ first_name: "", last_name: "", avatar: "" });

  const handleClick = useCallback(async () => {
    const { data } = await api().get(`users/${id}`);
    setDataDetail({ ...data.data });
    setOpen(true);
    handleDisable(true);
  }, [id, handleDisable]);

  const handleClose = () => {
    setOpen(false);
    handleDisable(false);
  };

  return (
    <div className="userCardWrapper">
      <div className="userCard">
        <div>
          <img src={img} alt="" className="userCardImg" />
        </div>
        <div>
          <div>name: {name}</div>
          <div>email: {email}</div>
        </div>
      </div>
      <button type="button" className="userCardBtn" onClick={handleClick} disabled={disabelBtn}>
        Details
      </button>
      <Modal isOpen={open} {...dataDetail} handleClose={handleClose} />
    </div>
  );
};
