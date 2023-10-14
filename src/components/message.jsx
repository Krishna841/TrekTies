import "./message.scss";

const Message = ({ item }) => {
  const messageClass = item.sender.self ? "sent" : "received";
  return (
    <div className={`message_${messageClass}`}>
      {messageClass === "received" ? (
        <img src={item.sender.image} alt="avatar" id="profile" />
      ) : null}
      <div
        className={`message_${messageClass}_msg`}
        dangerouslySetInnerHTML={{
          __html: item.message.replace(/<br>/g, "<br />"),
        }}
      />
    </div>
  );
};

export default Message;
