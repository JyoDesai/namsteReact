import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement("h1", {}, "Namste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
      React.createElement(
        "div",
        { id: "child"},
        [
          "this is my child",
          React.createElement("h1",{},  "this is h1 tag"),
          React.createElement("h2", {}, "this is h2 tag")
        ]
      ),
      React.createElement(
        "div",
        { id: "child2" },
        [
          React.createElement("h1",{}, "this is h1 tag"),
          React.createElement("h2", {}, "this is h2 tag")
        ]
      ),
    ]
  );
  
  console.log(parent);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  


