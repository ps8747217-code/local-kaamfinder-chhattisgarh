# Deployment Guide

## 1. Deploy Backend (Node.js API)

### Option A: Railway
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Add environment variables
railway variables set FIREBASE_PROJECT_ID=xxx
railway variables set RAZORPAY_KEY_ID=xxx

# Deploy
railway up
```

### Option B: Heroku
```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create kaamfinder-api

# Set environment variables
heroku config:set FIREBASE_PROJECT_ID=xxx

# Deploy
git push heroku main
```

### Option C: Google Cloud Run
```bash
# Build container
gcloud builds submit --tag gcr.io/PROJECT_ID/kaamfinder-api

# Deploy
gcloud run deploy kaamfinder-api \
  --image gcr.io/PROJECT_ID/kaamfinder-api \
  --platform managed \
  --region asia-south1
```

## 2. Deploy Admin Panel

### Firebase Hosting
```bash
cd admin_panel

# Build
npm run build

# Deploy
firebase deploy --only hosting
```

### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 3. Deploy Mobile Apps

### Android (Google Play Store)

1. **Generate Keystore**
```bash
keytool -genkey -v -keystore kaamfinder.jks \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias kaamfinder
```

2. **Configure Signing**
Create `android/key.properties`:
```
storePassword=your-password
keyPassword=your-password
keyAlias=kaamfinder
storeFile=../kaamfinder.jks
```

3. **Build Release APK**
```bash
flutter build apk --release
```

4. **Build App Bundle**
```bash
flutter build appbundle --release
```

5. **Upload to Play Console**
- Go to Google Play Console
- Create new app
- Upload app bundle
- Complete store listing
- Submit for review

### iOS (App Store)

1. **Configure Xcode**
- Open `ios/Runner.xcworkspace`
- Set Team and Bundle ID
- Configure signing

2. **Build Archive**
```bash
flutter build ios --release
```

3. **Upload to App Store Connect**
- Open Xcode
- Product → Archive
- Distribute App
- Upload to App Store Connect

4. **Submit for Review**
- Complete App Store listing
- Add screenshots
- Submit for review

## 4. Configure Production Environment

### Backend Environment Variables
```bash
NODE_ENV=production
PORT=3000
FIREBASE_PROJECT_ID=your-prod-project
RAZORPAY_KEY_ID=your-live-key
GOOGLE_MAPS_API_KEY=your-key
```

### Firebase Production Setup
1. Create production Firebase project
2. Enable required services
3. Deploy security rules
4. Configure authentication
5. Set up Cloud Functions (if needed)

### Database Indexes
```bash
firebase deploy --only firestore:indexes
```

## 5. Setup Monitoring

### Backend Monitoring
- Enable Google Cloud Monitoring
- Setup error tracking (Sentry)
- Configure uptime monitoring

### Mobile App Monitoring
- Firebase Crashlytics
- Firebase Performance Monitoring
- Firebase Analytics

## 6. Setup CI/CD

### GitHub Actions (Backend)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy Backend
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Railway
        run: railway up
```

### GitHub Actions (Mobile)
```yaml
name: Build Android
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v2
      - uses: subosito/flutter-action@v2
      - run: flutter build apk --release
```

## 7. Post-Deployment Checklist

- [ ] Test all API endpoints
- [ ] Verify mobile app functionality
- [ ] Check payment integration
- [ ] Test push notifications
- [ ] Verify maps and location
- [ ] Check admin panel access
- [ ] Monitor error logs
- [ ] Setup backup strategy
- [ ] Configure CDN (if needed)
- [ ] Enable SSL/HTTPS
- [ ] Setup domain and DNS
- [ ] Configure rate limiting
- [ ] Enable CORS properly
- [ ] Test on multiple devices

## 8. Scaling Considerations

### Backend Scaling
- Use load balancer
- Enable auto-scaling
- Implement caching (Redis)
- Optimize database queries
- Use CDN for static assets

### Database Scaling
- Enable Firestore auto-scaling
- Optimize indexes
- Implement data archiving
- Use composite indexes

### Mobile App Optimization
- Enable code splitting
- Optimize images
- Implement lazy loading
- Use app bundles
- Enable ProGuard/R8

## Support

For deployment issues: ps8747217@gmail.com
