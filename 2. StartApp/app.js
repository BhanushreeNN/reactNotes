import React from "react";
import ReactDOM from "react-dom/client";
// ------------------------------------------------------------------------------------
// single element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

// ------------------------------------------------------------------------------------
// nested element
{
  /* <div id="parent">
  <div id="child">
    <h1>I'm nested</h1>
  </div>
</div>; */
}
// React.createElement(Type_of_tag, id_name/class_name, Content_inside)
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm nested")
  )
);

// ------------------------------------------------------------------------------------
// nested elements with siblings
{
    /* <div id="parent">
    <div id="child">
      <h1>I'm nested</h1>
      <h2>I'm nested sibling</h2>
    </div>
  </div>; */
  }
// React.createElement(Type_of_tag, id_name/class_name, Contents_inside_in_array[])
const parent_sibling = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [React.createElement("h1", {}, "I'm nested"),React.createElement("h2", {}, "I'm nested sibling")]
    )
  );

// ------------------------------------------------------------------------------------
console.log(parent); //React Element --> object
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root1.render(heading);
root2.render(parent);
root3.render(parent_sibling);
