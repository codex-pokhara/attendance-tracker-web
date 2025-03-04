# Workplace Attendance & Leave Management System

## 📋 Project Overview

A comprehensive, integrated solution designed to streamline employee time tracking, leave management, and administrative oversight.

## 🚀 Tech Stack

- **Frontend**: React (Vite)
- **UI Framework**: shadcn/ui
- **Styling**: Tailwind CSS v4
- **Package Manager**: Bun
- **Linting**: ESLint
- **Code Quality**: Knip

## ✨ Key Features

### 1. Calendar View
- Monthly, weekly, and daily attendance tracking
- Color-coded attendance status
- Holiday markers
- Work hours display
- Quick attendance logging

### 2. Leave Management
- Intuitive leave request form
- Real-time leave balance tracking
- Comprehensive leave status monitoring
- Streamlined leave approval workflow

### 3. Admin Dashboard
- Holiday management
- Comprehensive attendance overview
- Detailed team attendance reports
- Efficient leave approval interface

## 🛠 Prerequisites

- Node.js (v20+)
- Bun (v1.0+)
- Git

## 🏁 Project Setup

### 1. Clone the Repository
```bash
git clone git@github.com:codex-pokhara/attendance-tracker-web.git
cd attendance-tracker-web
```

### 2. Install Dependencies
```bash
bun install
```

### 3. Environment Configuration
Create a `.env` file with the following variables:
```
VITE_API_BASE_URL=""
VITE_AUTH_TOKEN=""
```

### 4. Development Server
```bash
bun run dev
```

### 5. Build for Production
```bash
bun run build
```

## 📦 Project Structure
```
src/
│
├── components/         # Reusable UI components
│   ├── calendar/       # Calendar-related components
│   ├── leave/          # Leave management components
│   └── admin/          # Admin dashboard components
│
├── contexts/           # React context providers
├── hooks/              # Custom React hooks
├── services/           # API interaction services
├── utils/              # Utility functions
└── types/              # TypeScript type definitions
```

## 🔐 Authentication

Implements role-based access control:
- Employee
- Admin

## 🧪 Linting

### Running Lints
```bash
bun lint
```

## 📊 Performance Optimization

- Code splitting
- Lazy loading of components
- Memoization of expensive computations
- Efficient state management

## 🌐 Deployment

Supports deployment to:
- Vercel
- Netlify
- AWS Amplify

## 📋 Milestones

1. **Initial Release**:
   - Calendar & Basic Tracking

2. **Leave Management**:
   - Comprehensive leave request system

3. **Admin Dashboard**:
   - Reporting and administrative features

## 🎯 Success Metrics

- 90% reduction in manual attendance tracking
- Leave request approvals reduced from days to hours
- 95% user adoption within 3 months
- 85% positive feedback in post-implementation survey
- 30% reduction in unauthorized absences

## 🛡 Security & Compliance

- GDPR and CCPA compliant
- End-to-end encryption
- Regular security audits
- Role-based access control

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Support

For issues, questions, or support, please open a GitHub issue or contact muggiwaraluffy23@gmail.com.

---

**Built with ❤️ by Your Team Name**