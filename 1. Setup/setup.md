# Episode 1: React Elements and Rendering

## **Table of Contents**

1. [Introduction](#1-introduction)
2. [Key Concepts](#2-key-concepts)
   - [2.1 Single React Element](#21-single-react-element)
   - [2.2 Nested Elements](#22-nested-elements)
   - [2.3 Nested Elements with Siblings](#23-nested-elements-with-siblings)
   - [2.4 Rendering Elements with ReactDOM](#24-rendering-elements-with-reactdom)
3. [Styling with CSS](#3-styling-with-css)
4. [Summary](#4-summary)

---

## 1. **Introduction**
In this episode, we cover the basics of creating React elements using `React.createElement()` and rendering them to the DOM using `ReactDOM.createRoot()`. We also explore how to create nested and sibling elements.

---

## 2. **Key Concepts**

### 2.1 **Single React Element**
- **Definition**: React allows us to create HTML elements dynamically using `React.createElement()`.
- **Example**: Creating a single `<h1>` element with the text "Hello World from React!".
- **Code**:
    ```js
    const heading = React.createElement(
      "h1",
      { id: "heading" },
      "Hello World from React!"
    );
    ```
- **Output**: Displays a single `<h1>` heading.

---

### 2.2 **Nested Elements**
- **Definition**: Multiple elements can be nested within each other by passing `React.createElement()` calls as children.
- **Example**: Creating a parent `<div>` that contains a child `<div>` with an `<h1>` element.
- **Code**:
    ```js
    const parent = React.createElement(
      "div",
      { id: "parent" },
      React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", {}, "I'm nested")
      )
    );
    ```
- **Output**: A nested structure where a parent `<div>` contains a child `<div>` with an `<h1>` inside it.

---

### 2.3 **Nested Elements with Siblings**
- **Definition**: Use an array to include multiple sibling elements within the same parent component.
- **Example**: A parent `<div>` with a child `<div>` that contains both `<h1>` and `<h2>` sibling elements.
- **Code**:
    ```js
    const parent_sibling = React.createElement(
      "div",
      { id: "parent" },
      React.createElement(
        "div",
        { id: "child" },
        [
          React.createElement("h1", {}, "I'm nested"),
          React.createElement("h2", {}, "I'm nested sibling")
        ]
      )
    );
    ```
- **Output**: A structure where the child `<div>` has both `<h1>` and `<h2>` as sibling elements.

---

### 2.4 **Rendering Elements with ReactDOM**
- **Definition**: `ReactDOM.createRoot()` initializes the root for rendering, and `render()` mounts the React component to the DOM.
- **Steps**:
    1. Select the DOM container using `document.getElementById()`.
    2. Use `ReactDOM.createRoot()` to initialize a React root.
    3. Use the `render()` method to display the React element in the container.

- **Code**:
    ```js
    const root1 = ReactDOM.createRoot(document.getElementById("root1"));
    root1.render(heading);

    const root2 = ReactDOM.createRoot(document.getElementById("root2"));
    root2.render(parent);

    const root3 = ReactDOM.createRoot(document.getElementById("root3"));
    root3.render(parent_sibling);
    ```
- **Output**: Renders the single, nested, and sibling elements to their respective HTML containers.

---

## 3. **Styling with CSS**
- **Definition**: CSS is applied externally to style React elements rendered in the DOM. The styles are linked via a separate `styles.css` file.
- **Example**: Styling for the parent and child `<div>` as well as the heading.
  
- **Code (styles.css)**:
    ```css
    p {
        color: cadetblue;
    }

    div #parent {
        padding: 2%;
        background-color: aquamarine;
    }

    div #child {
        background-color: white;
    }

    #heading {
        color: aquamarine;
    }
    ```
- **Output**: The `<div>` parent has an aquamarine background, and the text color of the `<h1>` is styled with CSS.

---

## 4. **Summary**
- **React.createElement()** is used to dynamically create elements.
- You can nest and add sibling elements using arrays.
- **ReactDOM** renders these elements to the DOM using `createRoot()` and `render()`.
- Styling is still handled by traditional CSS files, linked externally.

---
## OUTPUT
![image](https://github.com/user-attachments/assets/34788b77-ef09-41ed-ba87-320809f25e75)
