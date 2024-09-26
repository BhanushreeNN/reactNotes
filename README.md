# REACT NOTES
## REACT BASIC SETUP 
### 1. Using CDN
This is a basic React setup that renders a simple "Hello World" message on the page. It uses the unpkg CDN to load React and ReactDOM libraries.

**Steps:**
1. **Create a new HTML file:** Name it `index.html`.
2. **Add the HTML structure:** Copy and paste the provided HTML code into the `index.html` file.
3. **Open the file:** Open `index.html` in your web browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
</head>
<body>
    <div id="root"></div>

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script>
        const heading = React.createElement("h1", {}, "Hello World from React!");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    </script>
</body>
</html>
```

![image](https://github.com/user-attachments/assets/aff3b6cb-4424-443d-9926-4258f2cd84a5)

