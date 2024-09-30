# Episode 2: Setting Up a React Application

## **Table of Contents**

1. [Introduction](#1-introduction)
2. [Key Concepts](#2-key-concepts)
   - [2.1 Initializing a New React Project](#21-initializing-a-new-react-project)
   - [2.2 Installing Development Dependencies](#22-installing-development-dependencies)
   - [2.3 Installing React and ReactDOM](#23-installing-react-and-reactdom)
   - [2.4 Creating package.json](#24-creating-packagejson)
   - [2.5 Parcel as a Build Tool](#25-parcel-as-a-build-tool)
3. [Project Structure](#3-project-structure)
4. [Additional Topics](#4-additional-topics)
   - [4.1 Tilde vs. Caret](#41-tilde-vs-caret)
   - [4.2 package.json vs. package-lock.json](#42-packagejson-vs-package-lockjson)
   - [4.3 Types of Dependencies](#43-types-of-dependencies)
   - [4.4 What is Parcel?](#44-what-is-parcel)
5. [Summary](#5-summary)

---

## 1. **Introduction**
In this episode, we explore the process of setting up a new React application, configuring package management with npm, and using Parcel as a build tool. We also discuss some important concepts related to package management in JavaScript.

---

## 2. **Key Concepts**

### 2.1 **Initializing a New React Project**
- **Command**: Use `npm init` to create a new package.json file.
- **Prompted Information**: The utility asks for the package name, version, description, entry point, test command, author, and license.
- **Example**:
    ```bash
    npm init
    ```

### 2.2 **Installing Development Dependencies**
- **Command**: Use `npm install -D parcel` to install Parcel as a development dependency.
- **Purpose**: Parcel is used to bundle your application, optimize assets, and run a local server.
- **Example**:
    ```bash
    npm install -D parcel
    ```

### 2.3 **Installing React and ReactDOM**
- **Commands**: 
    ```bash
    npm install react
    npm install react-dom
    ```
- **Purpose**: These commands install React and ReactDOM, which are essential for building React applications.

### 2.4 **Creating package.json**
- **Example package.json**:
    ```json
    {
      "name": "2.-startapp",
      "version": "1.0.0",
      "description": "Ways to start react app",
      "main": "app.js",
      "scripts": {
        "test": "jest"
      },
      "repository": {
        "type": "git",
        "url": "https://github.com/BhanushreeNN/reactNotes/tree/main/2.%20StartApp"
      },
      "author": "Bhanushree N N",
      "license": "ISC",
      "devDependencies": {
        "parcel": "^2.12.0",
        "process": "^0.11.10"
      },
      "dependencies": {
        "react": "^18.3.1",
        "react-dom": "^18.3.1"
      },
      "browserslist": ["last 2 versions"]
    }
    ```

### 2.5 **Parcel as a Build Tool**
- **Usage**: Run the command `npx parcel index.html` to start the Parcel server and bundle the application.
- **Output**: Parcel sets up a development server, enabling hot module replacement (HMR) for a smoother development experience.
- **Example**:
    ```bash
    npx parcel index.html
    ```

---

## 3. **Project Structure**
- **Files Created**:
  - `index.html`: The main HTML file where the React app is mounted.
  - `app.js`: The main JavaScript file containing React components.
  - `styles.css`: The CSS file for styling the application.
  - `.gitignore`: To exclude specific files and directories from version control (like `node_modules`).

---

## 4. **Additional Topics**

### 4.1 **Tilde vs. Caret**
- **Tilde (~)**: Updates to the most recent minor version. Example: `~1.2.3` will allow updates to `1.2.x`.
- **Caret (^)**: Updates to the most recent major version. Example: `^1.2.3` will allow updates to `1.x.x`.

### 4.2 **package.json vs. package-lock.json**
- **package.json**: Defines the project's dependencies and scripts. It's manually edited.
- **package-lock.json**: Automatically generated to lock the versions of dependencies, ensuring consistent installs across environments.

### 4.3 **Types of Dependencies**
| Type               | Description                                                | Installation Command          |
|--------------------|------------------------------------------------------------|-------------------------------|
| **Dependencies**    | Required for production                                    | `npm install <package_name>`  |
| **DevDependencies** | Needed only for development/testing                        | `npm install -D <package_name>`|
| **Peer Dependencies** | Required by a package but expected to be installed by the user | Must be installed manually     |
| **Optional Dependencies** | Not critical for the application to function           | `npm install --save-optional <package_name>` |
| **Bundled Dependencies** | Included with the package itself                       | N/A                           |



### 4.4 **What is Parcel?**
- **Overview**: Parcel is a zero-configuration web application bundler that includes:
  - **Dev Build**: Quick setup for local development.
  - **Local Server**: Runs a server for testing.
  - **HMR (Hot Module Replacement)**: Updates modules in the browser without refreshing the page.
  - **File Watching**: Monitors changes to files for instant updates.
  - **Caching**: Speeds up builds by caching processed files.
  - **Image Optimization**: Automatically optimizes images used in the project.
  - **Bundle & Minification**: Combines files into a single file and minifies for production.
  - **Code Splitting**: Breaks code into smaller bundles for performance optimization.
  - **Differential Bundling**: Creates different bundles for modern and legacy browsers.
  - **Tree Shaking**: Eliminates unused code from final bundles.

---

## 5. **Summary**
In this episode, we learned how to set up a new React application using npm and Parcel. We discussed the structure of the project, the purpose of `package.json`, and the differences between various types of dependencies. We also explored what Parcel is and how it aids in building React applications efficiently.
