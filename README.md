# Next.js Starter Template

A production-ready Next.js 15 starter template with authentication, database, and modern tooling. Perfect for building full-stack web applications quickly and securely.

## ✨ Features

- **🚀 Next.js 15** - Latest App Router with Turbopack for fast development
- **🔐 Authentication** - Secure email/password auth with [Better Auth](https://better-auth.com)
- **💾 Database** - PostgreSQL with [Neon](https://neon.tech) serverless database
- **🗄️ ORM** - Type-safe database queries with [Drizzle ORM](https://orm.drizzle.team)
- **🎨 Styling** - Beautiful UI with [Tailwind CSS 4](https://tailwindcss.com)
- **📱 Responsive** - Mobile-first responsive design
- **🔒 Security** - Protected routes with middleware authentication
- **⚡ Fast** - Optimized with React Server Components and streaming
- **📦 Type Safe** - Full TypeScript support throughout

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS 4
- **Backend:** Next.js API Routes, Server Actions
- **Database:** PostgreSQL (Neon), Drizzle ORM
- **Authentication:** Better Auth
- **Deployment:** Vercel-ready
- **Package Manager:** pnpm

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd your-project-name
pnpm install
```

### 2. Environment Setup

Copy the environment variables template:

```bash
cp .env.example .env
```

Update `.env` with your configuration:

```env
# Database - Get from Neon Dashboard
DATABASE_URL="postgresql://username:password@host.neon.tech/database_name?sslmode=require"

# Authentication - Generate secure secret
BETTER_AUTH_SECRET="your-very-secure-secret-key"
BETTER_AUTH_URL="http://localhost:3000"
```

### 3. Database Setup

Create and push your database schema:

```bash
pnpm drizzle-kit push
```

### 4. Start Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) - you'll be redirected to sign up!

## 📁 Project Structure

```text
├── app/                    # Next.js App Router
│   ├── api/auth/          # Authentication API routes
│   ├── auth/              # Auth pages (sign-in, sign-up)
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page (protected)
├── components/            # React components
│   ├── auth/              # Authentication components
│   ├── todo-form.tsx      # Example todo form
│   ├── todo-item.tsx      # Example todo item
│   └── todo-list.tsx      # Example todo list
├── lib/                   # Utility libraries
│   ├── actions/           # Server actions
│   ├── db/                # Database configuration
│   │   ├── index.ts       # Database client
│   │   └── schema.ts      # Database schema
│   ├── auth.ts            # Auth configuration
│   ├── auth-client.ts     # Client-side auth
│   └── utils.ts           # Utilities
├── middleware.ts          # Route protection
├── drizzle.config.ts      # Drizzle configuration
└── .env.example           # Environment variables template
```

## 🗄️ Database Schema

The starter includes a complete authentication schema and example todos:

- **Users** - User accounts with email/password
- **Sessions** - Secure session management
- **Accounts** - Auth provider accounts
- **Verification** - Email verification tokens
- **Todos** - Example user-specific data

## 🔐 Authentication Features

- **Email/Password** - Secure authentication with Better Auth
- **Session Management** - HTTP-only cookies with CSRF protection
- **Route Protection** - Middleware-based route guarding
- **User-Specific Data** - All data scoped to authenticated users
- **Sign In/Up/Out** - Complete auth flow with error handling

## 🚀 Development

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Database Commands

```bash
pnpm drizzle-kit push       # Push schema changes
pnpm drizzle-kit studio     # Open Drizzle Studio
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

```env
DATABASE_URL="your-production-database-url"
BETTER_AUTH_SECRET="your-production-secret"
BETTER_AUTH_URL="https://yourdomain.com"
```

## 🤝 Contributing

This is a starter template - feel free to:

- Fork and customize for your needs
- Submit improvements via pull requests
- Report issues or suggest features

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Better Auth Documentation](https://better-auth.com/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Neon Documentation](https://neon.tech/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

MIT License - feel free to use this template for your projects!

---

Built with ❤️ using modern web technologies
