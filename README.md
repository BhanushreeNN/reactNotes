# REACT NOTES
## REACT BASIC SETUP 
### 1. Using CDN
This is a basic React setup that renders a simple "Hello World" message on the page. It uses the unpkg CDN to load React and ReactDOM libraries.

#### Importing React via CDN:

- **What is a CDN?**
  - CDN (Content Delivery Network) allows you to load React directly from the web without installing it locally.

- **Steps**:
  1. Include the React and ReactDOM libraries in your HTML file using `<script>` tags:
     ```html
     <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
     <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
     ```
  2. These scripts make React available globally (`React` and `ReactDOM` objects).

- **Usage**:
  - This method is useful for quick setups, learning, or demos.
  - Not recommended for production apps (use NPM instead).


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello React</title>
</head>
<body>
    <div id="root"></div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script>
        const heading = React.createElement("h1", {id : "heading"}, "Hello World from React!");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    </script>
</body>
</html>
```

![image](https://github.com/user-attachments/assets/aff3b6cb-4424-443d-9926-4258f2cd84a5)

