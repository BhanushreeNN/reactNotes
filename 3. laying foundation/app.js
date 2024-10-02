import React from "react";
import ReactDOM from "react-dom/client";
// browsers cannot understand JSX. The JSX is transpiled before reaching JS : done by → Parcel → Babel
// JSX → React.createElement() → ReactElement - JS Object → HTMLElement (rendered)

// REACT ELEMENT
const jsxElement = <h1>Hello JSX!</h1>;

// REACT COMPONENTS
// 2 TYPES => CLASS BASED AND FUNCTIONAL COMPONENTS

// FUNCTIONAL COMPONENT
const HeadingComponent = () => {
  return (
    <div>
      {/* inserting element inside Component */}
      {jsxElement} 
      <h1>Hello React Functional Component!</h1>
    </div>
  );
};

// Another way - simpler and without return 
// const HeadingComponent = () => (
//   <div>
//     <h1>Hello React Functional Component!</h1>
//   </div>
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxElement); // rendering React element

root.render(<HeadingComponent/>); //rendering React Component
