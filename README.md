# Selva | MERN Stack Developer Portfolio

This is a personal portfolio showcasing my expertise as a **MERN Stack Developer**. Built with **Next.js 15**, **React 19**, and **TypeScript**, this application highlights my projects, skills, and learning journey, while providing multiple ways for visitors to connect and provide feedback.

---

## ✨ Features

### Responsive Design
- Optimized for seamless viewing across desktops and mobile devices.

### Dynamic Portfolio Sections
- **Home**: An engaging introduction to my profile.
- **Projects**: Detailed display of my work with project images and descriptions.
- **Skills**: A comprehensive overview of my technical proficiencies.
- **Resume**: Easy access to my professional experience.
- **Contact**: Multiple contact options and a direct messaging form.
- **Certificates**: Showcase of my certifications with a fullscreen image viewer (zoom/rotate).

### Interactive Feedback System
- Visitors can provide ratings and written feedback.
- Client-side validation and clear submission states (loading, success, error).
- Feedback is stored using a backend API (`/api/review`).

### Enhanced SEO & Analytics
- SEO metadata (`layout.tsx`) with Open Graph & Twitter card support.
- `Schema.org` structured data for better search visibility.
- Integrated with **Vercel Analytics** and **Speed Insights**.

### Progressive Web App (PWA) Ready
- `manifest.json` for enhanced mobile experience.

### Gmail Integration for Contact
- Opens pre-filled Gmail compose window for easy communication.
- No backend email service required.

### Modern Development Stack
- Built with the latest **Next.js**, **React**, and **TypeScript** versions.

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: React framework for fast web apps.
- **React 19**: UI library for interactive interfaces.
- **TypeScript 5**: Type-safe JavaScript superset.
- **React Icons**: Scalable vector icon library.
- **CSS3**: Styling and animations.

### Backend / Utilities
- **Mongoose 8**: ODM for MongoDB.
- **Nodemailer 7**: Email module for Node.js.
- **Dotenv**: Loads environment variables from `.env`.

### Deployment & Performance
- **Vercel**: Hosting with analytics and optimizations.
- **Turbopack**: Fast bundling and builds with Next.js.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS recommended)
- npm or Yarn

### Installation

Clone the repository:

```bash
git clone [your-repository-url]
cd selva_briefview
```

Install dependencies:

```bash
npm install
# or
yarn install
```

### Set up Environment Variables

Create a `.env` file in the root directory:

```env
# Example:
MONGODB_URI="your_mongodb_connection_string"
EMAIL_USER="your_email@example.com"
EMAIL_PASS="your_email_password"
```

> Note: These are required if using Mongoose or Nodemailer. The contact form by default uses Gmail popup.

---

## 🧪 Running the Development Server

```bash
npm run dev
# or
yarn dev
```

> Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
```

> Optimizes and generates a `.next` directory for deployment.

---

## ▶️ Starting the Production Server

```bash
npm start
# or
yarn start
```

---

## 📂 Project Structure (Key Components)

```
pages/ (or app/): Contains main application routes.
├── layout.tsx: Root layout, metadata, SEO, and structure.
├── page.tsx: Main orchestration of portfolio sections.
components/: Reusable UI components like:
  ├── Certificate.tsx
  ├── Contact.tsx
  ├── Feedback.tsx
  ├── Header.tsx
  ├── Footer.tsx
  ├── Home.tsx
  ├── Projects.tsx
  ├── Skills.tsx
  ├── Resume.tsx
  └── Intro.tsx
context/: PortfolioContext.tsx for state management.
styles/: Global and component-level styles (e.g., globals.css).
public/: Static assets like images, favicon, manifest.json.
api/: Backend API routes, e.g., review.ts for feedback handling.
```

---

## 🤝 Contribution

This is a personal project, but feel free to explore or fork it for learning purposes.  
**Happy coding! 🚀**

