# MovieTime

A small vanilla HTML/CSS/JS project for searching movie details using the **OMDb API**.

## Features

- Search movies by title
- Show poster, IMDb rating, and key details (year, genre, director, language, runtime, etc.)

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- OMDb API

## Quick Start

### Option 1: Open directly

Type a movie title and click **Search**.

### Option 2: Run via a local server (recommended)

Some browsers may restrict certain features when opening files directly, so using a simple local server is usually smoother.

**If you have Node.js installed:**

```bash
npx serve
```

Then open the URL printed by the command (usually `http://localhost:3000`).

## OMDb API Setup

This project uses the OMDb API.

- The API key is currently in [js/script.js](js/script.js).
- If the key stops working or you want to use your own, replace `apikey=...` with your key.

OMDb docs: https://www.omdbapi.com/

## Project Structure

```text
movieTime/
├─ index.html
├─ styles/
│  └─ main.css
├─ js/
│  ├─ animations.js
│  └─ script.js
├─ images/
│  └─ icons/
└─ font/
```

## Author

Michael P

---
