import { AttachmentIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { VscSend } from "react-icons/vsc";

import "./type.scss";

const Type = () => {
  return (
    <div className="type">
      <div className="type_input">
        <input
          type="text"
          placeholder="Type your message here"
          id="input_tag"
        />
      </div>
      <div className="type_icons">
        <Icon as={AttachmentIcon} h={20} w={20} />
        <Icon as={VscSend} h={20} w={20} />
      </div>
    </div>
  );
};

export default Type;
