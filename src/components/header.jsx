import React from "react";
import { EditIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import back from "./back.svg";

import "./header.scss";

const Header = ({ data, page, setPage }) => {
  const formatTitle = (name) => {
    const x = name.split(" ");
    return x[0] + " " + x[2];
  };
  const changePage = () => {
    setPage(page + 1);
  };

  return (
    <div className="header">
      <div className="header_title">
        <div className="header_title_left">
          <img
            src={back}
            alt="change page"
            onClick={() => {
              changePage();
              console.log(page);
            }}
          />
          {formatTitle(data.name)}
        </div>
        <EditIcon h={24} w={24} />
      </div>
      <div className="header_from">
        From
        <div className="header_from_start">{data.from}</div>
      </div>
      <div className="header_to">
        <div className="header_to_text">
          To
          <div className="header_to_text_end">{data.to}</div>
        </div>
        <div>
          <Icon as={BsThreeDotsVertical} h={24} w={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
