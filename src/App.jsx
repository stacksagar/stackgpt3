import React from "react";
import "./App.css";
import {
  Nav,
  Header,
  Brand,
  Gpt3,
  Feature,
  Cta,
  Blog,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="nav-header">
        <Nav />
        <Header />
      </div>
      <Brand />
      <Gpt3 />
      <Feature />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
