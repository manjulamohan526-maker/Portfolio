# Portfolio – Navyashree

## Project structure
```
navya/
├─ assets/          # photos, resume, future certificates
├─ css/styles.css   # theme & animations
├─ js/script.js    # scroll reveal, resume download
├─ index.html       # home page
├─ about.html
├─ projects.html
├─ education.html
├─ certifications.html
└─ contact.html
```

## Quick start (local preview)
1. Open any HTML file directly in a browser (e.g., double‑click `index.html`).
2. For full navigation without file‑protocol restrictions, run a simple dev server:
   ```bat
   cd c:/Users/Admin/Desktop/navya
   npx -y serve .
   ```
   This starts a server at `http://localhost:5000`.

## Development
- **Edit colors** – modify the CSS variables in `css/styles.css` (`--primary-h`, `--secondary-h`, etc.).
- **Add projects** – duplicate the card markup in `projects.html`.
- **Upload certificates** – place files in `assets/` and update the placeholder link on `certifications.html`.
- **Resume** – replace `assets/resume.docx` with your preferred format (PDF works well for download).

## Deployment options
- **GitHub Pages** – push the `navya` folder to a repo and enable Pages (root folder).
- **Netlify / Vercel** – connect the repo; they automatically serve static sites.
- **Custom domain** – configure your DNS to point to the static host.

## Customization ideas
- Dark‑mode toggle (add a button that flips a CSS class).
- Add a contact‑form backend (e.g., Formspree).
- Include a blog section (static Markdown → HTML).

---
*Feel free to edit any file directly; the site will reflect changes instantly when refreshed.*
