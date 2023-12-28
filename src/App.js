import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import "./App.css";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "./components/Alerts";
import { useState } from "react";

function App() {
  const [Mode, setMode] = useState("primary");
  const [Mess, setMess] = useState(null);

  const showMess = (mess) => {
    setMess(mess);
    setTimeout(() => {
      setMess(null);
    }, 2000);
  };
  return (
    <>
      <Router basename="/TextMe">
        <Navbar
          NavbarName="TextMe"
          AboutName="AboutMe"
          Theme={Mode}
          Toggle={() => {
            if (Mode === "dark") {
              setMode("primary");
              document.body.style.backgroundColor = "white";
              document.body.style.color = "black";
              showMess("Light mode is active");
            } else {
              setMode("dark");
              document.body.style.backgroundColor = "black";
              document.body.style.color = "white";
              showMess("Dark mode is active");
            }
          }}
          showMess={showMess}
        />
        <Alert Mess={Mess} />

        <Routes>
          <Route
            exact
            path="/"
            element={<Textarea showMess={showMess} Theme={Mode} />}
          />
          <Route exact path="about" element={<About Theme={Mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
