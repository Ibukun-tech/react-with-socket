import logo from "./logo.svg";
import "./App.css";
import Signup from "./component/Signup";
import Login from "./component/Login";
import { useContext } from "react";
import LogIn from "./component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import { AuthContext } from "./context/authContext";
function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/login" element={<LogIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
