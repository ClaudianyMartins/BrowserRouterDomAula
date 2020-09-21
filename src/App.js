import React from "react";
import "./styles.css";

import Routes from "./router";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}
