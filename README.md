# 🐍 Python 101 — Introduction to Programming

A complete, mobile-responsive study site covering Python fundamentals for students with no prior programming experience.

## 📚 What's Inside

- **Cheat Sheets** — Quick-reference cards with syntax, tips, and examples
- **Study Notes** — Deep explanations with analogies and worked examples
- **Practice Questions** — 28 exam-style questions (Easy / Medium / Hard) with full solutions

### Topics Covered (7 chapters)
1. Input, Processing &amp; Output
2. Decision Structures &amp; Boolean Logic
3. Repetition Structures (Loops)
4. Functions
5. Files &amp; Exceptions
6. Lists &amp; Tuples
7. Database Programming (SQLite)

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `python-101`)
2. Upload all files in this folder to the repo root (including the hidden `.nojekyll` file)
3. Go to **Settings → Pages**
4. Under "Build and deployment", set:
   - Source: **Deploy from a branch**
   - Branch: **main** (or whatever your default branch is) / root
5. Click **Save**
6. After a minute or two, your site will be live at: `https://<your-username>.github.io/<repo-name>/`

### Important: the `.nojekyll` file
GitHub Pages by default processes sites with Jekyll, which can break JavaScript-heavy sites like this one. The empty `.nojekyll` file tells GitHub to skip Jekyll and serve the files as-is. **Don't delete it.**

## 📁 File Structure

```
python-course/
├── index.html          Landing page with topic cards
├── cheatsheets.html    Quick-reference cheat sheets (tabbed)
├── notes.html          Full study notes (collapsible sections)
├── practice.html       Practice questions with solutions
├── styles.css          Shared styles (dark theme, responsive)
├── script.js           Shared JavaScript (nav, tabs, filters)
├── .nojekyll           Tells GitHub Pages to skip Jekyll processing
└── README.md           This file
```

## 📱 Mobile Support

The site is fully responsive:
- Hamburger menu collapses below 780px
- Tab scrollers adapt to narrow screens
- Cards stack vertically on phones
- Code blocks scroll horizontally when too wide

## 🖨️ Printing

The site has a print stylesheet — hitting Ctrl/Cmd + P will generate a clean printable version of the current page, with all collapsed sections expanded and all solutions visible.

## 🔗 Direct Links

You can link directly to specific topics using URL hashes:
- `cheatsheets.html#topic-1` → opens Input/Output tab
- `cheatsheets.html#topic-7` → opens Database tab
- Same works for `notes.html`

## ✏️ Updating Content

All content is plain HTML inside the `.html` files. To update:
- Add/edit topics in the tab panels (look for `<div class="topic-panel">`)
- Add practice questions by copying an existing `<div class="exam-box">` block and updating the `data-difficulty` and `data-topic` attributes

No build step, no dependencies, no compilation — just edit and push.

---

Created by **Zane Swanepoel**

Built with vanilla HTML, CSS, and JavaScript. No frameworks required. 🎓
