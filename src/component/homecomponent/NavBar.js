import styles from "./navBar.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../utility/firebase";
const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <span className={styles.logo}>IbkChatApp</span>
      <div className={styles.user}>
        <img
          className={styles.image}
          src="https://unsplash.com/photos/yG62OouwddA"
          href=""
        />
        <span>Ibukun</span>
        <button
          onClick={() => {
            signOut(auth);
          }}
          className={styles.btn}
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
