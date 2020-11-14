import React from "react";

const Input = (props) => {
  return (
    <input
      className="p-2 border-gray-300 border-2 rounded m-6 focus:outline-none"
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={(e)=>props.onValueChange(e.target.input)}
    />
  );
};

export default Input;
