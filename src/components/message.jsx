import "./message.scss";

const Message = (props) => {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === props.auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message_${messageClass}`}>
      {messageClass === "received" ? (
        // <img src={item.sender.image} alt="avatar" id="profile" />
        <img src={photoURL} alt="avatar" id="profile" />
      ) : null}
      <div className={`message_${messageClass}_msg`}>{text}</div>
    </div>
  );
};

export default Message;
