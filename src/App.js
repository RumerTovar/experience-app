import React  from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

// assets
import logo from "./assets/images/logo.svg"

function App() {
  return (
    <div>
      <Header img={logo} author={"Luciano Polo"} subjectType={"Painting"} experience={"Create"} gradeLevel={"9th"} />   
      <Footer author={"Luciano Polo"}/>
    </div>
  );
}

export default App;
