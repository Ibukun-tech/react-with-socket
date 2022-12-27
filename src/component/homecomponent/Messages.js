import styles from "./messages.module.css";
const Messages = () => {
  return (
    <div className={styles.messages || styles.owner}>
      <div className={styles.messagesInfo}>
        <img className={styles.messagesImg} alt="" href="" />
        <span>just now </span>
      </div>
      <div className={styles.messagesText}>
        <span>Hello</span>
      </div>
    </div>
  );
};
export default Messages;
