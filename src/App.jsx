import React, { useState, useEffect } from "react";
import BannerForm from "./components/BannerForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "react-bootstrap";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };


  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
        <Button variant="primary" onClick={toggleDarkMode} className="mb-3">
          Toggle Theme
        </Button>
        <BannerForm />
      </Container>
    </div>
  );
}

export default App;
