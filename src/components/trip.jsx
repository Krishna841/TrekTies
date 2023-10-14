import React from "react";
import { useState, useEffect } from "react";

import Header from "./header";
import Messages from "./messages";
import Type from "./type";
import "./trip.scss";

const Trip = () => {
  const [msg, setMsg] = useState([]);
  const [page, setPage] = useState(0);
  const [headers, setHeaders] = useState({
    from: "",
    message: "",
    name: "",
    status: "",
    to: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://qa.corider.in/assignment/chat?page=${page}`
        );
        if (response.ok) {
          const data = await response.json();
          const newMessages = data.chats;
          setHeaders(data);
          setMsg(newMessages);
          console.log(page);
        } else {
          console.error("Error fetching messages:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <div className="trip">
      <div className="trip_headers">
        <Header data={headers} page={page} setPage={setPage} />
      </div>
      <div className="trip_messages">
        <Messages data={msg} />
      </div>
      <div className="trip_type">
        <Type />
      </div>
    </div>
  );
};

export default Trip;