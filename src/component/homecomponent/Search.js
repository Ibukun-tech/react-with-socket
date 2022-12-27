import styles from "./search.module.css";
const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.searchForm}>
        <input className={styles.searchFormInput} type="text" />
      </div>
      <div className={styles.userChat}>
        <img />
        <div className={styles.userChatInfo}>
          <span>Ibukun</span>
        </div>
      </div>
    </div>
  );
};
export default Search;
