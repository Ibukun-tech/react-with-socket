import { useState, useRef } from "react";
import { auth, storage, db } from "../utility/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target[0]);
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const Image = e.target[3].files[0];
    console.log(Image);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      const storageRef = ref(storage, userName);

      const uploadTask = uploadBytesResumable(storageRef, Image);
      // console.log(uploadTask.snapshot.ref, uploadTask);
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        (error) => {
          console.log("here");
          console.log(error);
          setError(true);
        },
        () => {
          console.log("here");
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log("here");
            await updateProfile(res.user, {
              displayName: userName,
              photoURL: downloadURL,
            });
            console.log("here");
            navigate("/");
            await setDoc(doc(db, "users", res.user.uid), {
              userId: res.user.uid,
              userName,
              email,
              photo: downloadURL,
            });
            console.log("here");
            // console.log(data);
            await setDoc(doc(db, "usersChat", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (err) {
      // console.log(err);
      setError(true);
    }
  };
  return (
    <div className={styles.formContainer}>
      <div className={styles.formWrapper}>
        <div className={styles.logo}>IbkChatapp</div>
        <p className={styles.title}>Signup</p>
        <form onSubmit={formSubmitHandler} className={styles.form}>
          <input className={styles.input} type="text" placeholder="your name" />

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
          <label htmlFor="file">
            Add an Image
            <input type="file" id="file" style={{ display: "none" }} />
          </label>

          <button>Sign up</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p>You do have an account Log in</p>
      </div>
    </div>
  );
};
export default Signup;
