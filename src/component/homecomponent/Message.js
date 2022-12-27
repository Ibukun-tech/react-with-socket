import styles from "./message.module.css";
import Messages from "./Messages";
const Message = () => {
  return (
    <div className={styles.message}>
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
      <Messages />
    </div>
  );
};
export default Message;
