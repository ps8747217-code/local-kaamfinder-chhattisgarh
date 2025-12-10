# Local KaamFinder – Chhattisgarh Edition

A location-based service marketplace connecting users with verified local service providers across Chhattisgarh.

## 🎯 Project Overview

Local KaamFinder is a comprehensive platform that helps people find and book local service providers like plumbers, electricians, carpenters, mechanics, cleaners, tutors, and more.

## 📱 Features

### Customer App
- Auto-detect location
- Browse service categories
- Find nearby workers with distance, ETA, ratings
- Instant call, chat, and booking
- Job tracking and payment (UPI, cash, wallet)
- Reviews & ratings
- Hindi + Chhattisgarhi UI

### Worker App
- Profile creation with Aadhaar/selfie verification
- Category and skills selection
- Job requests with accept/reject
- Availability toggle
- GPS navigation to customer
- Earnings dashboard & weekly payouts

### Admin Panel
- Worker verification
- Category and city management
- Commission settings
- Job tracking dashboard
- Payment & earning reports
- Ads and promotions management

## 💰 Monetization
- Commission per job (10–15%)
- Subscription plans for workers (₹99/month, ₹199/month)
- Sponsored listings
- Local business ads

## 🛠️ Tech Stack

- **Frontend**: Flutter (Mobile Apps)
- **Backend**: Node.js + Express
- **Database**: Firebase Firestore
- **Authentication**: Firebase OTP
- **Maps**: Google Maps API
- **Payments**: Razorpay / UPI
- **Push Notifications**: Firebase Cloud Messaging
- **Admin Panel**: React + Firebase Admin

## 📂 Project Structure

```
local-kaamfinder-chhattisgarh/
├── customer_app/          # Flutter customer mobile app
├── worker_app/            # Flutter worker mobile app
├── backend/               # Node.js backend API
├── admin_panel/           # React admin dashboard
├── firebase_config/       # Firebase configuration files
└── docs/                  # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Flutter SDK (3.0+)
- Node.js (18+)
- Firebase account
- Google Maps API key
- Razorpay account

### Installation

1. Clone the repository
```bash
git clone https://github.com/ps8747217-code/local-kaamfinder-chhattisgarh.git
cd local-kaamfinder-chhattisgarh
```

2. Setup Customer App
```bash
cd customer_app
flutter pub get
flutter run
```

3. Setup Worker App
```bash
cd worker_app
flutter pub get
flutter run
```

4. Setup Backend
```bash
cd backend
npm install
npm start
```

5. Setup Admin Panel
```bash
cd admin_panel
npm install
npm start
```

## 📄 License

MIT License

## 👥 Contributors

- Prachi Singh

## 📞 Contact

For queries: ps8747217@gmail.com
