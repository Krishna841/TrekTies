import { useState, useRef } from "react";
import firebase from "firebase/compat/app";

import { AttachmentIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { VscSend } from "react-icons/vsc";

import "./type.scss";

const Type = ({ firestore, auth }) => {
  const dummy = useRef();
  const messageRef = firestore.collection("messages");

  const [formValue, setFormValue] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue("");
    if (!dummy.current) return;
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="type">
      <div className="type_input">
        <input
          type="text"
          placeholder="Type your message here"
          id="input_tag"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
      </div>
      <div className="type_icons">
        <Icon as={AttachmentIcon} h={20} w={20} />
        <Icon as={VscSend} h={20} w={20} onClick={sendMessage} />
      </div>
    </div>
  );
};

export default Type;
