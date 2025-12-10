# API Documentation

Base URL: `http://localhost:3000/api`

## Authentication

All authenticated endpoints require Bearer token in header:
```
Authorization: Bearer <firebase-id-token>
```

## Endpoints

### Auth

#### Send OTP
```http
POST /auth/send-otp
Content-Type: application/json

{
  "phoneNumber": "9876543210"
}
```

#### Verify OTP
```http
POST /auth/verify-otp
Content-Type: application/json

{
  "phoneNumber": "9876543210",
  "otp": "123456",
  "name": "John Doe",
  "userType": "customer"
}
```

### Users

#### Get Profile
```http
GET /users/profile
Authorization: Bearer <token>
```

#### Update Profile
```http
PUT /users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Name",
  "email": "user@example.com"
}
```

### Workers

#### Get Nearby Workers
```http
GET /workers/nearby?latitude=21.2514&longitude=81.6296&radius=10
```

#### Get Worker by ID
```http
GET /workers/:id
```

#### Register as Worker
```http
POST /workers/register
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Worker Name",
  "phone": "9876543210",
  "categories": ["plumber", "electrician"],
  "skills": ["pipe-fitting", "wiring"],
  "experience": "5 years",
  "pricePerHour": 500,
  "location": {
    "latitude": 21.2514,
    "longitude": 81.6296
  }
}
```

#### Update Availability
```http
PUT /workers/availability
Authorization: Bearer <token>
Content-Type: application/json

{
  "isAvailable": true
}
```

#### Get Earnings
```http
GET /workers/earnings
Authorization: Bearer <token>
```

### Bookings

#### Create Booking
```http
POST /bookings
Authorization: Bearer <token>
Content-Type: application/json

{
  "workerId": "worker-id",
  "categoryId": "category-id",
  "categoryName": "Plumber",
  "scheduledDate": "2024-01-15T10:00:00Z",
  "location": {
    "latitude": 21.2514,
    "longitude": 81.6296
  },
  "address": "123 Main St, Raipur",
  "description": "Fix leaking pipe",
  "estimatedPrice": 500,
  "paymentMethod": "cash"
}
```

#### Get Bookings
```http
GET /bookings?userType=customer
Authorization: Bearer <token>
```

#### Update Booking Status
```http
PUT /bookings/:id/status
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "completed"
}
```

#### Add Review
```http
POST /bookings/:id/review
Authorization: Bearer <token>
Content-Type: application/json

{
  "rating": 4.5,
  "review": "Great service!"
}
```

### Categories

#### Get All Categories
```http
GET /categories
```

#### Get Category by ID
```http
GET /categories/:id
```

### Payments

#### Create Order
```http
POST /payments/create-order
Authorization: Bearer <token>
Content-Type: application/json

{
  "amount": 500,
  "currency": "INR"
}
```

#### Verify Payment
```http
POST /payments/verify
Authorization: Bearer <token>
Content-Type: application/json

{
  "razorpay_order_id": "order_xxx",
  "razorpay_payment_id": "pay_xxx",
  "razorpay_signature": "signature_xxx"
}
```

#### Create Subscription
```http
POST /payments/subscription
Authorization: Bearer <token>
Content-Type: application/json

{
  "plan": "silver"
}
```

## Response Format

### Success Response
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error (dev mode only)"
}
```

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error
