import React from "react";
import { useState, useEffect } from "react";
import { Icon } from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";

import Header from "./header";
import Messages from "./messages";
import Type from "./type";
import "./trip.scss";

const Trip = ({ auth, firestore }) => {
  // const [msg, setMsg] = useState([]);
  const [page, setPage] = useState(0);
  // const [headers, setHeaders] = useState({
  //   from: "",
  //   message: "",
  //   name: "",
  //   status: "",
  //   to: "",
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://qa.corider.in/assignment/chat?page=${page}`
  //       );
  //       if (response.ok) {
  //         const data = await response.json();
  //         const newMessages = data.chats;
  //         setHeaders(data);
  //         setMsg(newMessages);
  //         console.log(page);
  //       } else {
  //         console.error("Error fetching messages:", response.statusText);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching messages:", error);
  //     }
  //   };

  //   fetchData();
  // }, [page]);

  return (
    <div className="trip">
      <div className="trip_headers">
        {/* <Header data={headers} page={page} setPage={setPage} auth={auth} /> */}
      </div>
      <Icon
        as={RepeatClockIcon}
        h={20}
        w={20}
        className="trip_reload"
        onClick={() => {
          setPage(page + 1);
        }}
      />
      <div className="trip_messages">
        {/* <Messages auth={auth} firestore={firestore} /> */}
      </div>
      <div className="trip_type">
        <Type firestore={firestore} auth={auth} />
      </div>
    </div>
  );
};

export default Trip;
