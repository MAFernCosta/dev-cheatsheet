# dev-cheatsheet

A growing collection of **cheat sheets** for my course, written in plain **HTML** with **Bootstrap** and published via **GitHub Pages**.

The content covers different topics (Linux Bash, SQL, and more later), but all are presented as small web pages so I can browse them easily.

---

## 🎯 Purpose

- Organise my programming course notes as clean, scannable cheat sheets.
- Practice using **Git**, **GitHub**, and **GitHub Pages**.
- Keep everything in one place: Bash, SQL, and future topics.

---

## 🧱 Tech Stack

- **HTML5**
- **Bootstrap 5** (via CDN)
- Optional: small custom CSS

No build tools or frameworks. Just static files that GitHub Pages can serve.

---

## 📁 Structure

Planned structure:

```text
.
├── index.html                 # Overview page with links to all cheat sheets
├── css/
│   └── styles.css             # Optional custom styles
├── cheatsheets/
│   ├── bash-commands.html     # Linux / Bash commands cheat sheet
│   ├── sql-basics.html        # SQL basics cheat sheet
│   └── ...more later          # e.g. git.html, http.html, js-basics.html, etc.
└── README.md
```

Each topic gets its own HTML file inside `cheatsheets/`.

---

## 🚀 How to View

1. **Locally**

   ```bash
   git clone https://github.com/miguelcosta/dev-cheatsheet.git
   cd dev-cheatsheet
   ```

   Then either:

   - Open `index.html` directly in your browser, or  
   - Run a small local server:

     ```bash
     python -m http.server 8000
     ```

2. **GitHub Pages**

   Once GitHub Pages is enabled for this repo, you can browse all cheat sheets online.

---

## 📝 Cheat Sheet Pages

Each cheat sheet is a single HTML file using Bootstrap.

---

## 🔮 Future Ideas

- Add a navigation bar across all pages.
- Add categories like: **Bash**, **SQL**, **Git**, **Networking**, **JavaScript**, etc.
- Add a simple search or filter on the index page.

---

## 📜 License

This project is licensed under the MIT License.
