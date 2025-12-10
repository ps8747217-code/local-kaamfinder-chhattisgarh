# Local KaamFinder - Complete Project Structure

## 📁 Project Overview

```
local-kaamfinder-chhattisgarh/
├── customer_app/              # Flutter customer mobile app
├── worker_app/                # Flutter worker mobile app
├── backend/                   # Node.js Express API
├── admin_panel/               # React admin dashboard
├── firebase_config/           # Firebase configuration files
├── docs/                      # Documentation
└── README.md                  # Project documentation
```

## 📱 Customer App Structure

```
customer_app/
├── lib/
│   ├── main.dart                    # App entry point
│   ├── theme/
│   │   └── app_theme.dart          # App theme & colors
│   ├── models/
│   │   ├── user_model.dart         # User data model
│   │   ├── worker_model.dart       # Worker data model
│   │   ├── booking_model.dart      # Booking data model
│   │   └── category_model.dart     # Category data model
│   ├── services/
│   │   ├── auth_service.dart       # Authentication service
│   │   ├── location_service.dart   # Location & GPS service
│   │   ├── booking_service.dart    # Booking management
│   │   └── payment_service.dart    # Payment integration
│   ├── screens/
│   │   ├── splash_screen.dart      # Splash screen
│   │   ├── auth/
│   │   │   └── login_screen.dart   # Login with OTP
│   │   ├── home_screen.dart        # Main home screen
│   │   ├── worker_list_screen.dart # Workers listing
│   │   ├── worker_detail_screen.dart # Worker profile
│   │   ├── booking_screen.dart     # Create booking
│   │   └── profile_screen.dart     # User profile
│   └── widgets/
│       ├── category_grid.dart      # Category grid widget
│       ├── worker_card.dart        # Worker card widget
│       └── booking_card.dart       # Booking card widget
├── pubspec.yaml                     # Dependencies
└── android/ios/                     # Platform-specific files
```

## 👷 Worker App Structure

```
worker_app/
├── lib/
│   ├── main.dart                    # App entry point
│   ├── theme/
│   │   └── app_theme.dart          # App theme
│   ├── models/
│   │   ├── job_model.dart          # Job request model
│   │   └── earnings_model.dart     # Earnings model
│   ├── services/
│   │   ├── auth_service.dart       # Authentication
│   │   ├── job_service.dart        # Job management
│   │   └── location_service.dart   # Location tracking
│   ├── screens/
│   │   ├── splash_screen.dart      # Splash screen
│   │   ├── auth/
│   │   │   ├── login_screen.dart   # Login
│   │   │   └── register_screen.dart # Worker registration
│   │   ├── home_screen.dart        # Dashboard
│   │   ├── jobs_screen.dart        # Job requests
│   │   ├── earnings_screen.dart    # Earnings dashboard
│   │   └── profile_screen.dart     # Worker profile
│   └── widgets/
│       ├── job_card.dart           # Job request card
│       └── earnings_chart.dart     # Earnings chart
└── pubspec.yaml                     # Dependencies
```

## 🔧 Backend API Structure

```
backend/
├── app.js                           # Express app entry
├── package.json                     # Dependencies
├── .env.example                     # Environment variables template
├── config/
│   └── firebase.config.js          # Firebase admin setup
├── middleware/
│   ├── auth.middleware.js          # JWT authentication
│   └── validation.middleware.js    # Request validation
├── routes/
│   ├── auth.routes.js              # Auth endpoints
│   ├── user.routes.js              # User endpoints
│   ├── worker.routes.js            # Worker endpoints
│   ├── booking.routes.js           # Booking endpoints
│   ├── category.routes.js          # Category endpoints
│   └── payment.routes.js           # Payment endpoints
├── controllers/
│   ├── auth.controller.js          # Auth logic
│   ├── user.controller.js          # User logic
│   ├── worker.controller.js        # Worker logic (nearby search)
│   ├── booking.controller.js       # Booking logic
│   ├── category.controller.js      # Category logic
│   └── payment.controller.js       # Payment logic (Razorpay)
└── models/
    └── (Firestore collections)
```

## 🖥️ Admin Panel Structure

```
admin_panel/
├── public/
│   └── index.html                   # HTML template
├── src/
│   ├── index.js                     # React entry point
│   ├── index.css                    # Global styles
│   ├── App.js                       # Main app component
│   ├── pages/
│   │   ├── Login.js                # Admin login
│   │   ├── Dashboard.js            # Main dashboard
│   │   ├── Workers.js              # Worker management
│   │   ├── Bookings.js             # Booking management
│   │   ├── Categories.js           # Category management
│   │   ├── Users.js                # User management
│   │   └── Payments.js             # Payment tracking
│   ├── components/
│   │   ├── Sidebar.js              # Navigation sidebar
│   │   ├── Header.js               # Top header
│   │   └── StatCard.js             # Statistics card
│   └── services/
│       ├── api.service.js          # API calls
│       └── firebase.service.js     # Firebase integration
└── package.json                     # Dependencies
```

## 🔥 Firebase Configuration

```
firebase_config/
├── firestore.rules                  # Firestore security rules
├── storage.rules                    # Storage security rules
├── firebase.json                    # Firebase config
├── firestore.indexes.json          # Database indexes
└── firebase_functions/             # Cloud Functions (optional)
    └── index.js
```

## 📚 Documentation

```
docs/
├── SETUP.md                         # Setup instructions
├── API.md                           # API documentation
├── DEPLOYMENT.md                    # Deployment guide
└── FEATURES.md                      # Features list
```

## 🗄️ Database Collections (Firestore)

### users
```javascript
{
  id: string,
  name: string,
  phone: string,
  email: string?,
  profileImage: string?,
  userType: 'customer' | 'worker',
  createdAt: timestamp,
  isActive: boolean
}
```

### workers
```javascript
{
  id: string,
  name: string,
  phone: string,
  categories: string[],
  skills: string[],
  rating: number,
  totalJobs: number,
  experience: string,
  pricePerHour: number,
  isVerified: boolean,
  isAvailable: boolean,
  subscriptionPlan: 'free' | 'silver' | 'gold',
  location: { latitude: number, longitude: number }
}
```

### bookings
```javascript
{
  id: string,
  customerId: string,
  workerId: string,
  categoryId: string,
  status: 'pending' | 'accepted' | 'in_progress' | 'completed' | 'cancelled',
  scheduledDate: timestamp,
  location: { latitude: number, longitude: number },
  address: string,
  estimatedPrice: number,
  finalPrice: number?,
  paymentMethod: 'cash' | 'upi' | 'wallet',
  rating: number?,
  review: string?
}
```

### categories
```javascript
{
  id: string,
  name: string,
  nameHindi: string,
  nameChhattisgarhi: string,
  icon: string,
  isActive: boolean,
  order: number
}
```

### payments
```javascript
{
  id: string,
  bookingId: string,
  userId: string,
  amount: number,
  status: 'pending' | 'completed' | 'failed',
  method: string,
  transactionId: string?,
  createdAt: timestamp
}
```

## 🚀 Quick Start Commands

### Customer App
```bash
cd customer_app
flutter pub get
flutter run
```

### Worker App
```bash
cd worker_app
flutter pub get
flutter run
```

### Backend
```bash
cd backend
npm install
npm start
```

### Admin Panel
```bash
cd admin_panel
npm install
npm start
```

## 🔑 Key Technologies

- **Mobile**: Flutter 3.0+
- **Backend**: Node.js + Express
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth (Phone OTP)
- **Maps**: Google Maps API
- **Payments**: Razorpay
- **Admin**: React + Material-UI
- **State Management**: Provider (Flutter), React Context
- **Storage**: Firebase Storage

## 📦 Main Dependencies

### Flutter Apps
- firebase_core, firebase_auth, cloud_firestore
- google_maps_flutter, geolocator
- razorpay_flutter
- provider, get
- http, dio

### Backend
- express, cors, helmet
- firebase-admin
- razorpay
- geolib

### Admin Panel
- react, react-router-dom
- @mui/material
- firebase
- axios

## 🎨 Design System

**Colors:**
- Primary Blue: #2196F3
- Primary Orange: #FF9800
- Success: #4CAF50
- Error: #F44336

**Typography:**
- Font Family: Poppins (Mobile), Roboto (Web)

## 📱 Supported Platforms

- Android 5.0+ (API 21+)
- iOS 12.0+
- Web (Admin Panel)

## 🌐 API Endpoints

Base URL: `https://api.kaamfinder.com/api`

- `/auth/*` - Authentication
- `/users/*` - User management
- `/workers/*` - Worker operations
- `/bookings/*` - Booking management
- `/categories/*` - Categories
- `/payments/*` - Payment processing

## 📊 Monetization Strategy

1. **Commission**: 10-15% per job
2. **Worker Subscriptions**:
   - Free: Basic features
   - Silver (₹99/month): Priority listing
   - Gold (₹199/month): Top placement + analytics
3. **Sponsored Listings**: Featured workers
4. **Local Business Ads**: Banner advertisements

## 🔐 Security Features

- Firebase Authentication
- Firestore Security Rules
- Storage Security Rules
- API JWT Authentication
- HTTPS/SSL
- Data Encryption
- Secure Payment Gateway

## 📈 Scalability

- Cloud Firestore (auto-scaling)
- Serverless backend options
- CDN for static assets
- Database indexing
- Caching strategies

---

**Repository**: https://github.com/ps8747217-code/local-kaamfinder-chhattisgarh

**Contact**: ps8747217@gmail.com
