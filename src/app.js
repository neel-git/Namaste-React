import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; //We don't need to write Header.js
import Body from "./components/Body";

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX
  </h1>
);



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
