# dev-cheatsheet 

A lightweight React application that displays programming cheat sheets
stored in a **separate repository**.
The goal is to provide a clean, fast, and accessible interface for
browsing markdown-based notes directly in the browser.

This project focuses purely on the **UI, navigation, and rendering
layer**, while all cheat sheet content lives elsewhere.

------------------------------------------------------------------------

## 🎯 Purpose

-   Provide a visual, structured interface for browsing cheat sheet
    content.
-   Practice and demonstrate skills with **React**, **Git**, **GitHub
    Pages**, and modern tooling.
-   Keep the application and the content decoupled for better
    maintainability.
-   Support current and future topics such as Bash, SQL, Git,
    Networking, JavaScript, and more.

------------------------------------------------------------------------

## ✨ Features

-   📱 **Mobile-first layout:** Fully responsive across phones, tablets,
    and desktops.
-   🎨 **Modern UI:** Built using React + Bootstrap for clean visuals.
-   🧭 **Simple navigation:** Cheat sheets listed and rendered from
    external markdown sources.
-   📝 **Markdown rendering:** Supports GFM (tables, lists, code blocks)
    via react-markdown & remark-gfm.

------------------------------------------------------------------------

## 🧱 Tech Stack

-   **React** (Vite)
-   **Bootstrap 5**
-   **CSS / SCSS**
-   **react-markdown**
-   **remark-gfm**
-   **GitHub Pages** (for hosting)

------------------------------------------------------------------------

## 📁 Content Repository

All markdown cheat sheets are stored separately here:

[my-cheatsheets](https://github.com/MAFernCosta/mycheatsheets)

This web app fetches and renders them dynamically.

------------------------------------------------------------------------

## 🚀 Demo

### 🌐 Live Version

👉 https://maferncosta.github.io/dev-cheatsheet

------------------------------------------------------------------------

## 🖥️ Run Locally

1.  Clone the repo:

``` bash
git clone https://github.com/miguelcosta/dev-cheatsheet.git
cd dev-cheatsheet
```

2.  Install dependencies:

``` bash
npm install
```

3.  Start the development server:

``` bash
npm run dev
```

Open the local URL shown in your terminal.

------------------------------------------------------------------------

## 🔮 Future Improvements

-   Add built-in search or filtering
-   Support dark/light mode
-   Sync or auto-fetch markdown from the content repository
-   Optional offline mode using Service Workers
-   The possibility to add more cheatsheet sources

------------------------------------------------------------------------

## 📜 License

This project is licensed under the MIT License.
