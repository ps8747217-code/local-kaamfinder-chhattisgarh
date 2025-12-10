# Setup Guide - Local KaamFinder

## Prerequisites

- Flutter SDK 3.0+
- Node.js 18+
- Firebase account
- Google Maps API key
- Razorpay account

## 1. Firebase Setup

### Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project: "local-kaamfinder"
3. Enable Google Analytics (optional)

### Enable Authentication
1. Go to Authentication → Sign-in method
2. Enable Phone authentication
3. Add your domain to authorized domains

### Create Firestore Database
1. Go to Firestore Database
2. Create database in production mode
3. Deploy security rules from `firebase_config/firestore.rules`

### Setup Storage
1. Go to Storage
2. Get started with default settings
3. Deploy security rules from `firebase_config/storage.rules`

### Get Configuration Files
1. For Android: Download `google-services.json`
   - Place in `customer_app/android/app/`
   - Place in `worker_app/android/app/`

2. For iOS: Download `GoogleService-Info.plist`
   - Place in `customer_app/ios/Runner/`
   - Place in `worker_app/ios/Runner/`

3. For Web/Admin: Get Firebase config object
   - Add to admin panel configuration

## 2. Google Maps Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable these APIs:
   - Maps SDK for Android
   - Maps SDK for iOS
   - Places API
   - Geocoding API
   - Directions API
3. Create API key
4. Add to `.env` files

## 3. Razorpay Setup

1. Create account at [Razorpay](https://razorpay.com/)
2. Get API keys from Dashboard
3. Add to backend `.env` file

## 4. Customer App Setup

```bash
cd customer_app
flutter pub get
flutter run
```

### Android Configuration
Add to `android/app/src/main/AndroidManifest.xml`:
```xml
<meta-data
    android:name="com.google.android.geo.API_KEY"
    android:value="YOUR_GOOGLE_MAPS_API_KEY"/>
```

### iOS Configuration
Add to `ios/Runner/AppDelegate.swift`:
```swift
GMSServices.provideAPIKey("YOUR_GOOGLE_MAPS_API_KEY")
```

## 5. Worker App Setup

```bash
cd worker_app
flutter pub get
flutter run
```

Follow same configuration as Customer App.

## 6. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm start
```

### Environment Variables
```
PORT=3000
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-client-email
RAZORPAY_KEY_ID=your-key-id
RAZORPAY_KEY_SECRET=your-key-secret
GOOGLE_MAPS_API_KEY=your-maps-key
```

## 7. Admin Panel Setup

```bash
cd admin_panel
npm install
npm start
```

Access at: http://localhost:3000

## 8. Deploy Firebase Rules

```bash
cd firebase_config
firebase login
firebase init
firebase deploy --only firestore:rules
firebase deploy --only storage:rules
```

## 9. Initial Data Setup

### Create Categories
Run this in Firestore:
```javascript
// Add sample categories
db.collection('categories').add({
  name: 'Plumber',
  nameHindi: 'नलसाज',
  nameChhattisgarhi: 'नलसाज',
  icon: 'plumbing',
  isActive: true,
  order: 1
});
```

### Create Admin User
```javascript
db.collection('admins').doc('admin-uid').set({
  email: 'admin@kaamfinder.com',
  role: 'admin',
  createdAt: new Date()
});
```

## 10. Testing

### Test Customer App
1. Launch app
2. Enter phone number
3. Verify OTP
4. Browse categories
5. Search for workers

### Test Worker App
1. Launch app
2. Register as worker
3. Complete profile
4. Toggle availability
5. Accept bookings

### Test Admin Panel
1. Login with admin credentials
2. Verify workers
3. Manage categories
4. Track bookings

## Troubleshooting

### Firebase Connection Issues
- Check `google-services.json` placement
- Verify package name matches Firebase project
- Enable required APIs in Firebase Console

### Maps Not Loading
- Verify API key is correct
- Check billing is enabled in Google Cloud
- Ensure required APIs are enabled

### Payment Issues
- Verify Razorpay keys
- Check test mode vs live mode
- Review webhook configuration

## Next Steps

1. Customize branding and colors
2. Add more service categories
3. Configure push notifications
4. Setup analytics
5. Add multilingual support
6. Deploy to production

## Support

For issues, contact: ps8747217@gmail.com
