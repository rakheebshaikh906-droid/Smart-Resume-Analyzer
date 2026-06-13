# Smart Resume Analyzer

A modern ATS (Applicant Tracking System) Resume Analyzer built with React.js that helps users evaluate resumes, identify missing skills, and improve their chances of getting shortlisted.

---

## Features

- Upload Resume in PDF format
- Extract text from resumes using PDF.js
- Calculate ATS Score
- Detect technical skills from resume content
- Identify missing skills
- Generate improvement suggestions
- Interactive progress bar for ATS score
- Modern and responsive UI
- Analyze multiple resumes

---

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS

### Libraries
- PDF.js (`pdfjs-dist`)

### Tools
- Git
- GitHub
- Vite

---

## How It Works

1. Upload your resume in PDF format.
2. The application extracts text from the PDF.
3. Skills are detected from the resume content.
4. An ATS score is calculated.
5. Missing skills are identified.
6. Suggestions are generated to improve the resume.

---

## Project Structure

```text
src/
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Upload.jsx
│   └── Result.jsx
├── utils/
│   ├── pdfParser.js
│   ├── atsCalculator.js
│   └── skills.js
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/rakheebshaikh906-droid/Smart-Resume-Analyzer
```

Move into the project directory:

```bash
cd Smart-Resume-Analyzer
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Future Improvements

- AI-powered resume recommendations
- Job description matching
- Resume keyword optimization
- Resume score comparison
- Downloadable PDF report
- Resume improvement insights using Generative AI

---

## Author

**Rakheeb Shaikh**

GitHub:
https://github.com/rakheebshaikh906-droid

LinkedIn:
https://linkedin.com/in/rakheeb-shaikh-54830b380

---

## License

This project is developed for learning, portfolio, and demonstration purposes.