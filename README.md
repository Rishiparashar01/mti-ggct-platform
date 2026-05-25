# Microsoft Tech Innovators (MTI) GGCT Platform

**An AI-powered college club ecosystem platform** for Microsoft Tech Innovators at Gyan Ganga College of Technology.

## 🚀 Overview

MTI GGCT Platform is a production-ready, enterprise-grade SaaS application that serves as a centralized digital ecosystem for:

- 📅 Seminars, Webinars, Workshops, Hackathons
- 🏆 Competitions, Bootcamps, Microsoft Events
- 🤖 AI/ML Events & Certifications
- 👥 Community Building & Student Engagement
- 📊 Analytics & Leaderboards
- 🎯 AI-Powered Recommendations

## ✨ Key Features

### Core Features
- **Event Management**: Seminars, webinars, workshops, hackathons, competitions
- **Registration System**: One-click registration with QR-based check-in
- **Attendance Tracking**: Real-time attendance with automated reporting
- **Certificate System**: Auto-generated certificates with QR verification
- **Community Features**: Discussion forums, announcements, resource sharing
- **Gamification**: Points, badges, achievements, leaderboards

### AI Features
- Smart event recommendations
- AI chatbot assistant
- Intelligent event categorization
- Student engagement predictions
- AI-powered FAQs
- Personalized dashboards

### Admin Features
- Comprehensive admin dashboard
- Real-time analytics
- Event management
- Attendance analytics
- Email campaigns
- Certificate management
- User moderation

## 🏗️ Tech Stack

### Frontend
- **Next.js 14** - React framework with SSR
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - High-quality components
- **Framer Motion** - Smooth animations
- **Recharts** - Data visualization

### Backend
- **Node.js** - JavaScript runtime
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type safety
- **PostgreSQL** - Relational database
- **Prisma ORM** - Database abstraction
- **Redis** - Caching & real-time features

### Infrastructure
- **Docker** - Containerization
- **Vercel** - Frontend deployment
- **Railway/Render** - Backend deployment
- **Cloudflare** - CDN & security
- **GitHub Actions** - CI/CD automation

### Authentication
- **NextAuth.js/Auth.js** - Authentication framework
- **JWT** - Token-based authentication
- **OAuth 2.0** - Google authentication
- **2FA** - Two-factor authentication

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm or npm
- PostgreSQL 14+
- Redis

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rishiparashar01/mti-ggct-platform.git
   cd mti-ggct-platform
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Start development servers**
   ```bash
   pnpm dev
   ```

## 📚 Documentation

- [Architecture](./docs/ARCHITECTURE.md)
- [Database Schema](./docs/DATABASE.md)

## 📄 License

MIT License
