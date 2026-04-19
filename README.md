# Nirvana Website + Brochure

## Files
- `index.html`: Main website (welcome, who we are, services, clients, projects, feedback, founders)
- `styles.css`: Website styles and responsive behavior
- `script.js`: Menu toggle + reveal animations
- `brochure.html`: Business-development brochure/deck style page
- `brochure.css`: Brochure styling with print-ready pages

## Assets
- Logo: `assets/images/brand/nirvana-logo.jpg`
- Founder: `assets/images/founders/churchil-amipara.jpeg`
- Project and client visuals: `assets/images/projects`, `assets/images/clients`, `assets/images/sources`

## Run Locally
```bash
cd /Users/meet/Desktop/Nirvana
python3 -m http.server 8080
```
Open:
- `http://localhost:8080/index.html`
- `http://localhost:8080/brochure.html`

## Quick Edits
- Update founder/partner details in `index.html` and `brochure.html` under `#founders` / `Founders and Contact`.
- Update WhatsApp number in both files (search for `wa.me/916353872498`).
- To export brochure PDF: open `brochure.html` in browser -> Print -> Save as PDF.
