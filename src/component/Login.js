import styles from "./Login.module.css";
const LogIn = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.logo}>IbkChatapp</div>
        <p className={styles.title}>Signup</p>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="email"
            placeholder="xyz@gmail.com"
          />

          <input
            className={styles.input}
            type="password"
            placeholder="************"
          />

          <button>Log In</button>
        </form>
      </div>
    </div>
  );
};
export default LogIn;
