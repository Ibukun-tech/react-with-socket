import styles from "./input.module.css";
const Input = () => {
  return (
    <div className={styles.input}>
      <input
        className={styles.inputs}
        placeholder="type a message...."
        type="text"
      />
      <div>
        <button>Send</button>
      </div>
    </div>
  );
};
export default Input;
