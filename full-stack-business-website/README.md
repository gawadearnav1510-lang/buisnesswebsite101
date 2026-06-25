# Nexus Agency - Digital Marketing & Web Development

A complete production-ready business website with full frontend, backend, authentication, and admin panel.

## Features

- Modern responsive landing page for a digital agency
- Full user registration, login, profile management
- Secure JWT authentication with bcrypt hashing
- Comprehensive admin dashboard
- Dynamic content management (services, pricing, blog, testimonials)
- Contact form with database storage
- Dark/light mode
- SEO optimized structure
- REST API with security best practices (rate limiting, helmet, cors, sanitization)
- MongoDB with Mongoose schemas

## Tech Stack

**Frontend:** React 19, TypeScript, Tailwind CSS 4, React Router, Framer Motion, Recharts, Lucide Icons

**Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs, Nodemailer

## Quick Start

### 1. MongoDB Atlas Setup
- Create a free MongoDB Atlas cluster
- Get your connection string
- Create a `.env` file in `/server` (see .env.example)

### 2. Backend Setup
```bash
cd server
npm install
npm run dev
```

### 3. Frontend Setup
```bash
cd ..
npm install
npm run dev
```

The app will run on:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

Default Admin Credentials:
- Email: admin@nexusagency.com
- Password: admin123

## Environment Variables (.env in /server)

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/nexusdb
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
NODE_ENV=development
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=yourgmail@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@nexusagency.com
```

## Deployment

- **Frontend:** Vercel (build command: `npm run build`, output dir: `dist`)
- **Backend:** Render.com (Node.js web service pointing to `/server`)
- **Database:** MongoDB Atlas
- Update API base URL in frontend after deployment

## Project Structure

```
/ (root - Vite React frontend)
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Main pages (Home, About, Services, etc.)
│   ├── context/        # Auth, Theme, Content contexts
│   └── App.tsx
├── server/             # Complete Express backend
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── index.js
├── public/
└── README.md
```

## Admin Capabilities

The admin can fully edit the website content without touching code:
- Update hero text, services, pricing tiers
- Add/edit/delete blog posts with rich text
- Manage testimonials
- View and reply to contact messages
- Manage users
- View analytics (mocked but extensible)

Fully functional demo that can be extended for real production use.

---

**Note:** This is a comprehensive demo. For real production, add email verification links, payment integration (Stripe), image upload to Cloudinary, and more advanced analytics.

Built with ❤️ using modern web technologies.