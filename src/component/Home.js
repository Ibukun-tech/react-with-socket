import styles from "./Home.module.css";
import SideBar from "./homecomponent/SideBar";
import Chat from "./homecomponent/Chat";
const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <SideBar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
