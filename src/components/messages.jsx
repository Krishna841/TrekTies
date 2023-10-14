import React from "react";

import horizontal from "./horizontal.svg";
import Message from "./message";
import "./messages.scss";

const Messages = ({ data }) => {
  const formatDate = (var_date) => {
    const date = new Date(var_date);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    const x = date.toLocaleDateString("en-IN", options).split("-");
    return `${x[0]} ${x[1]}, ${x[2]}`;
  };

  return (
    <div className="messages">
      <div className="messages_date">
        <img src={horizontal} alt="horizontal" />
        {formatDate(data[0]?.time)}
        <img src={horizontal} alt="horizontal" />
      </div>
      <div className="messages_message">
        {data?.map((item) => (
          <Message item={item} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
