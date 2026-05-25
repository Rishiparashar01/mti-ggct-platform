# MTI GGCT Platform - System Architecture

## Overview

The MTI GGCT Platform is built on a modern, scalable microservices-inspired architecture.

## Tech Stack

### Frontend
- Next.js 14 with React
- TypeScript
- Tailwind CSS
- ShadCN UI Components
- Framer Motion for animations
- Recharts for data visualization

### Backend
- Node.js with NestJS
- TypeScript
- PostgreSQL with Prisma ORM
- Redis for caching
- WebSockets for real-time features

### Infrastructure
- Docker containerization
- GitHub Actions for CI/CD
- Vercel for frontend deployment
- Railway/Render for backend
- Cloudflare CDN

## Architecture Diagram

```
Client (Web/Mobile/PWA)
         ↓
  Cloudflare CDN
         ↓
┌─────────────────┬──────────────┐
│  Next.js App    │  NestJS API  │
│  (Frontend)     │  (Backend)   │
└────────┬────────┴──────┬───────┘
         │                │
    ┌────▼────────────┬───▼──────────┐
    │  PostgreSQL     │   Redis      │
    │  (Database)     │  (Cache)     │
    └─────────────────┴──────────────┘
```

## Key Features Architecture

### Authentication
- JWT-based tokens
- OAuth 2.0 (Google)
- College email verification
- 2FA for admin users

### Event Management
- Full CRUD operations
- QR-based check-in
- Automatic certificate generation
- Real-time attendee count

### AI Features
- Event recommendations using ML
- Chatbot assistant (OpenAI)
- Smart categorization
- Engagement predictions

### Gamification
- Points system (XP)
- Badges and achievements
- Leaderboards
- Participation streaks

### Analytics
- Real-time dashboards
- Event analytics
- User engagement metrics
- Attendance reports

## Database Design

### Core Tables
- Users (with roles)
- Events
- Registrations
- Attendance
- Certificates
- Achievements
- Leaderboard
- Notifications
- Analytics Events

## API Structure

```
/api/v1/
├── /auth (Login, Register, OAuth)
├── /events (CRUD + registrations)
├── /attendance (Check-in, tracking)
├── /certificates (Generate, verify)
├── /analytics (Dashboards, reports)
├── /ai (Chat, recommendations)
├── /leaderboard (Rankings)
└── /admin (Admin operations)
```

## Deployment Architecture

```
GitHub Repository
       ↓
GitHub Actions (CI/CD)
       ↓
   ┌───┴────┐
   ↓        ↓
Vercel   Railway/Render
(Web)      (API)
```

## Security Layers

1. **Transport**: HTTPS/TLS, HSTS headers
2. **Application**: CORS, CSRF protection, Rate limiting
3. **Authentication**: JWT, OAuth, 2FA
4. **Database**: Encryption, secure backups
5. **Infrastructure**: DDoS protection, WAF

## Scaling Strategy

- Stateless API servers
- Database read replicas
- Redis caching layer
- CDN for static assets
- Asynchronous job processing

For detailed database schema, see: [DATABASE.md](./DATABASE.md)
