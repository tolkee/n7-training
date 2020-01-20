import React from "react";

interface SelectProps {
  icon: string;
}
function Select(props: SelectProps) {
  return (
    <div className="control has-icons-left">
      <div className="select is-medium is-primary">
        <select style={{ backgroundColor: "black", color: "white" }}>
          <option selected>All List</option>
          <option>List 0</option>
          <option>List 1</option>
          <option>List 2</option>
          <option>List 3</option>
          <option>List 4</option>
        </select>
      </div>
      <span className="icon is-left">
        <i className={`fas ${props.icon}`}></i>
      </span>
    </div>
  );
}

export default Select;
