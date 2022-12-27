import styles from "./sideBar.module.css";
import NavBar from "./NavBar";
import Search from "./Search";
import Chats from "./Chats";
// import Chat from "./Chat";
const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <NavBar />
      <Search />
      <Chats />
    </div>
  );
};
export default SideBar;
