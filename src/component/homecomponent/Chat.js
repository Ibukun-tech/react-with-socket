import styles from "./chat.module.css";
import Message from "./Message";
import Input from "./Input";
const Chat = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.chatInfo}>Ibukunoluwa</div>

      <Message />
      <Input />
    </div>
  );
};
export default Chat;
