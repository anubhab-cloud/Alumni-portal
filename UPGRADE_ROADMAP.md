# 🗺️ Phased Full-Stack Modernization Roadmap
> A comprehensive, 5-day architectural blueprint to transition the Golden Valley HS School (GVHS) Alumni Portal from a static, client-side website to an advanced, production-grade Next.js full-stack platform.

---

## 🏗️ The Modern Full-Stack Technology Stack

To achieve premium design aesthetics, high-performance querying, and secure database persistence, we will upgrade the technology stack to the following industry standards:

| Architectural Tier | Selected Technology | Purpose & Rationale |
| :--- | :--- | :--- |
| **Meta-Framework** | **Next.js 14+ (App Router)** | Hybrid rendering (Server-Side Rendering for fast SEO loading; Client Components for interactive 3D WebGL dashboards), Server Actions, and built-in API routing. |
| **Language** | **TypeScript** | Strict compile-time typing to eliminate runtime bugs and improve developer auto-completion. |
| **Styling** | **Tailwind CSS + shadcn/ui** | Rapid, design-system-aligned utility styling with accessible, unstyled primitives (Radix UI) for dropdowns, drawers, and modal popups. |
| **Animations** | **Framer Motion** | Fluid, React-native spring physical transitions, scroll triggers, hover state vectors, and page load entry fades. |
| **3D Renderings** | **React Three Fiber (R3F)** | React-declarative wrappers for **Three.js** inside the Canvas layout to port and refine the dynamic sponsor sphere. |
| **Database** | **MongoDB (Atlas)** | Dynamic, document-oriented storage engine. Perfect for schema flexibility (handling custom user profiles, work experience objects, and community posts). |
| **Database ORM** | **Prisma ORM** | Type-safe, auto-migrating, intuitive database client tool. |
| **Authentication** | **Auth.js (NextAuth.js v5)** | Production-ready, secure session administration supporting Credentials (Email/Password) and standard **Google OAuth** SSO. |
| **Email Server** | **Resend API** | High-performance developer email client to replace client-side EmailJS. Prevents key exposure by running completely on the server. |

---

## 📂 Targeted Next.js Directory Layout

Here is the directory architecture we will establish for the upgraded Next.js project:

```bash
gvhs-alumni-portal/
├── app/                      # Next.js App Router root container
│   ├── layout.tsx            # Global context providers, HTML wrapper, footer/navbar
│   ├── page.tsx              # Modernized homepage (corresponds to index.html)
│   ├── about/                # Nested routing folder for About sections
│   │   ├── alumni/page.tsx   # About Alumni (about-alumni.html)
│   │   └── team/page.tsx     # About Team (about-us.html)
│   ├── events/page.tsx       # Event Listings (events.html)
│   ├── schedule/page.tsx     # Interactive Schedule (schedule.html)
│   ├── sponsors/page.tsx     # 3D interactive sponsor canvas (sponsors.html)
│   ├── gallery/page.tsx      # Unified gallery page with filters
│   ├── contact/page.tsx      # Contact page (contact.html)
│   ├── login/page.tsx        # Login panel (login.html)
│   ├── register/page.tsx     # Register page (register.html)
│   ├── api/                  # Unified Serverless REST API endpoints
│   │   ├── auth/[...nextauth]/route.ts  # NextAuth API configuration
│   │   └── contact/route.ts  # Contact email Resend endpoint
│   └── admin/page.tsx        # Admin moderation dashboard
│
├── components/               # Reusable presentational UI modules
│   ├── ui/                   # shadcn component primitives (Button, Input, Card)
│   ├── Navbar.tsx            # Dynamically state-aware Navigation Bar
│   ├── Footer.tsx            # Reusable page footer
│   └── SponsorSphere.tsx     # React Three Fiber 3D sponsor rendering
│
├── prisma/                   # Prisma database schemas and seed scripts
│   └── schema.prisma         # MongoDB model structures
│
├── lib/                      # Utilities, config frameworks, database clients
│   ├── prisma.ts             # Prisma client connection manager
│   └── utils.ts              # Global style utilities (clsx/tailwind-merge helper)
│
├── hooks/                    # Reusable custom React hooks
├── public/                   # Compressed media assets (WebP/AVIF format)
├── middleware.ts             # Server-side authentication route protector
├── next.config.js            # Next.js workspace system configurations
├── package.json              # Dependency manifests
└── tsconfig.json             # TypeScript rules configurations
```

---

## 📅 Day-by-Day Implementation Roadmap

### 🏁 Day 1: Project Initialization & Global Styling Foundation
**Objective:** Initialize the Next.js workspace, configure Tailwind + shadcn/ui systems, port static elements, and compress media.

1. **Bootstrap Next.js App:**
   ```bash
   npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
   ```
2. **Install core UI packages & init shadcn/ui:**
   ```bash
   npx shadcn-ui@latest init
   # Select: Default style, Slate base color, Enable CSS variables
   ```
3. **Configure Global CSS & Design Tokens:**
   Configure `globals.css` with a high-end dark palette tailored to match the Golden Valley theme (Deep blue backgrounds, cyan glows, and sleek slate borders):
   ```css
   @layer base {
     :root {
       --background: 222.2 47.4% 11.2%; /* Deep Navy-Slate (#090d16) */
       --foreground: 210 40% 98%;
       --card: 222.2 47.4% 11.2%;
       --primary: 199 89% 48%; /* Cyan-Sky Blue (#0ea5e9) */
       --border: 217.2 32.6% 17.5%;
     }
   }
   ```
4. **Media Compression Pipeline:**
   Compress all legacy high-res JPG/PNG assets (ranging from 400KB to 1.4MB) into modern **WebP** formats via `sharp` to increase page speeds by up to **80%**:
   ```bash
   npx sharp -i ./photos_legacy/bg-photo.jpg -o ./public/bg-photo.webp --resize 1920
   ```

---

### 🎨 Day 2: Dynamic React Componentization & 3D WebGL Porting
**Objective:** Port structural layouts, build state-aware headers, and reconstruct the Three.js canvas in React.

1. **Build a Reusable `<Navbar />` Component:**
   Replace the hardcoded navigation lists with a responsive navbar that dynamically highlights active pages using `usePathname()`, displays user-avatar links when logged in, and loads a mobile overlay slide-out drawer via `shadcn/ui` primitives.
2. **Reconstruct the 3D Sponsors Page:**
   - Install **React Three Fiber** and dependencies:
     ```bash
     npm install @react-three/fiber @react-three/drei three @types/three
     ```
   - Build a `<SponsorSphere />` component leveraging declaratives:
     ```tsx
     // components/SponsorSphere.tsx
     import { Canvas, useFrame } from '@react-three/fiber';
     import { OrbitControls, Text } from '@react-three/drei';
     // Reconstruct the sphere rendering using R3F hooks & auto-animate positions
     ```
3. **Migrate Core Views:**
   Port static page layouts (`index.html`, `events.html`, `schedule.html`) into Next.js React Page components, leveraging standard layout systems.

---

### 🔐 Day 3: MongoDB Database Schema & NextAuth.js Integration
**Objective:** Design database structures, initialize the Prisma client, and setup full credentials/Google auth.

1. **Initialize Prisma & Connect MongoDB:**
   ```bash
   npm install @prisma/client
   npm install prisma --save-dev
   npx prisma init
   ```
2. **Define Database Schemas:**
   Define schema elements inside `prisma/schema.prisma` mapping User Profiles, batch years, social links, and events:
   ```prisma
   datasource db {
     provider = "mongodb"
     url      = env("DATABASE_URL")
   }
   
   generator client {
     provider = "prisma-client-js"
   }
   
   model User {
     id            String    @id @default(auto()) @map("_id") @db.ObjectId
     email         String    @unique
     passwordHash  String?
     role          Role      @default(ALUMNI)
     isVerified    Boolean   @default(false)
     profile       Profile?
     eventsRSVP    Event[]   @relation(fields: [rsvpIds], references: [id])
     rsvpIds       String[]  @db.ObjectId
     jobsPosted    Job[]
   }
   
   enum Role {
     ALUMNI
     ADMIN
   }
   
   model Profile {
     id             String   @id @default(auto()) @map("_id") @db.ObjectId
     userId         String   @unique @db.ObjectId
     user           User     @relation(fields: [userId], references: [id], onDelete: Cascade)
     firstName      String
     lastName       String
     batchYear      Int
     degree         String
     currentCompany String?
     currentTitle   String?
     linkedinUrl    String?
     bio            String?
     avatarUrl      String?
   }
   
   model Event {
     id          String   @id @default(auto()) @map("_id") @db.ObjectId
     title       String
     description String
     date        DateTime
     location    String
     imageUrl    String?
     rsvpUsers   User[]   @relation(fields: [rsvpUserIds], references: [id])
     rsvpUserIds String[] @db.ObjectId
   }
   
   model Job {
     id          String   @id @default(auto()) @map("_id") @db.ObjectId
     title       String
     company     String
     description String
     location    String
     url         String?
     posterId    String   @db.ObjectId
     poster      User     @relation(fields: [posterId], references: [id])
     createdAt   DateTime @default(now())
   }
   ```
3. **Setup Auth.js (NextAuth v5):**
   - Install Auth dependencies:
     ```bash
     npm install next-auth@beta @auth/prisma-adapter bcryptjs @types/bcryptjs
     ```
   - Configure `auth.ts` to handle Credentials logins (using secure password hashing with `bcryptjs`) and Google OAuth.
4. **Implement Global Route Middleware Protection (`middleware.ts`):**
   Create a centralized edge middleware file to check sessions and dynamically route unauthenticated users away from private content (like RSVP bookings, profile editing, and directory access) into `/login`.

---

### 🔍 Day 4: Advanced Directory Search & Interactive Social Features
**Objective:** Construct a fully filterable alumni search engine and dynamic mentorship boards.

1. **Build a Dynamic Alumni Directory (`/app/alumni/page.tsx`):**
   - Create a search console using Next.js Server Actions to query alumni dynamically.
   - Design clean filtering options based on: **Batch/Graduation Year**, **Industry/Domain**, **Current Company**, and **Region**.
   - Render alumni profiles inside elegant, interactive hover-cards.
2. **Implement Event RSVP Action Bindings:**
   Build an RSVP booking handler inside Event pages that registers the active User ID directly to the database collection via atomic prisma operations.
3. **Build the Job Board Portal (`/app/jobs/page.tsx`):**
   Design a dedicated page for professional networking, allowing registered senior alumni to post active job openings and referrals.

---

### ⚙️ Day 5: Administrative Dashboard, Serverless Resend Forms, & Deployment
**Objective:** Create an admin moderation panel, transition legacy integrations, and push to production Vercel servers.

1. **Build the Administrative Dashboard Panel (`/app/admin/page.tsx`):**
   Design a secure control room accessible only to users with `ADMIN` privileges:
   - **Verification Queue:** Approve/decline new alumni registrations to keep the community database clean and verified.
   - **Event Manager:** Create, update, or cancel school alumni reunions.
   - **Sponsor Board:** Track active sponsorships and toggle partners displayed on the 3D Sponsors Page.
2. **Deploy Server-Side Resend Email Endpoint (`/app/api/contact/route.ts`):**
   - Replace legacy, client-side EmailJS with a secure server-side endpoint.
   - Install Resend SDK:
     ```bash
     npm install resend
     ```
   - Create a serverless POST route that handles spam validation and routes contact emails securely using server environment variables (`RESEND_API_KEY`).
3. **Production Deployment Pipeline:**
   - **Database:** Deploy your MongoDB cluster on **MongoDB Atlas** (Free tier is perfectly suitable for production launch).
   - **Hosting:** Import the repository into **Vercel**, link your environmental variables (`DATABASE_URL`, `AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `RESEND_API_KEY`), and execute production builds.
