import { EditIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./header.scss";

const Header = ({ auth }) => {
  // const formatTitle = (name) => {
  //   const x = name.split(" ");
  //   return x[0] + " " + x[2];
  // };
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header_title">
        <button
          onClick={() => {
            auth.signOut();
            navigate("/");
          }}
        >
          Logout
        </button>
        {/* <div className="header_title_left">
          <img src={back} alt="logout" />
          {formatTitle(data.name)}
        </div> */}
        <EditIcon h={24} w={24} />
      </div>
      {/* <div className="header_from">
        From
        <div className="header_from_start">{data.from}</div>
      </div>
      <div className="header_to">
        <div className="header_to_text">
          To
          <div className="header_to_text_end">{data.to}</div>
        </div>
        <div> */}
      <Icon as={BsThreeDotsVertical} h={24} w={24} />
    </div>
    // </div>
    // </div>
  );
};

export default Header;
