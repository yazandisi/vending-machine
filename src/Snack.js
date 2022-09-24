import React from "react";
import { NavLink } from "react-router-dom";
import ChipsForm from "./ChipsForm";
import "./Snack.js";
const Snack = ({ snackName, eatenForm, msg }) => {
  let theForm;
  if (eatenForm) {
    theForm = <ChipsForm snackName="Hot Cheetos" />;
  }
  return (
    <div className="snacks">
      <div>{snackName}</div>
      {theForm}
      <p>{msg}</p>
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default Snack;
