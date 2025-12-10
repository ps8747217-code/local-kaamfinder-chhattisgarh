import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import '../models/user_model.dart';

class AuthService extends ChangeNotifier {
  final FirebaseAuth _auth = FirebaseAuth.instance;
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;
  
  UserModel? _currentUser;
  bool _isLoading = false;
  String? _verificationId;

  UserModel? get currentUser => _currentUser;
  bool get isLoading => _isLoading;
  bool get isAuthenticated => _currentUser != null;

  // Send OTP
  Future<bool> sendOTP(String phoneNumber) async {
    _isLoading = true;
    notifyListeners();

    try {
      await _auth.verifyPhoneNumber(
        phoneNumber: '+91$phoneNumber',
        verificationCompleted: (PhoneAuthCredential credential) async {
          await _auth.signInWithCredential(credential);
        },
        verificationFailed: (FirebaseAuthException e) {
          _isLoading = false;
          notifyListeners();
          throw Exception(e.message);
        },
        codeSent: (String verificationId, int? resendToken) {
          _verificationId = verificationId;
          _isLoading = false;
          notifyListeners();
        },
        codeAutoRetrievalTimeout: (String verificationId) {
          _verificationId = verificationId;
        },
        timeout: const Duration(seconds: 60),
      );
      return true;
    } catch (e) {
      _isLoading = false;
      notifyListeners();
      return false;
    }
  }

  // Verify OTP
  Future<bool> verifyOTP(String otp, String name, String phone) async {
    _isLoading = true;
    notifyListeners();

    try {
      PhoneAuthCredential credential = PhoneAuthProvider.credential(
        verificationId: _verificationId!,
        smsCode: otp,
      );

      UserCredential userCredential = await _auth.signInWithCredential(credential);
      
      // Check if user exists
      DocumentSnapshot userDoc = await _firestore
          .collection('users')
          .doc(userCredential.user!.uid)
          .get();

      if (!userDoc.exists) {
        // Create new user
        UserModel newUser = UserModel(
          id: userCredential.user!.uid,
          name: name,
          phone: phone,
          userType: 'customer',
          createdAt: DateTime.now(),
        );

        await _firestore
            .collection('users')
            .doc(userCredential.user!.uid)
            .set(newUser.toJson());

        _currentUser = newUser;
      } else {
        _currentUser = UserModel.fromJson(userDoc.data() as Map<String, dynamic>);
      }

      _isLoading = false;
      notifyListeners();
      return true;
    } catch (e) {
      _isLoading = false;
      notifyListeners();
      return false;
    }
  }

  // Sign Out
  Future<void> signOut() async {
    await _auth.signOut();
    _currentUser = null;
    notifyListeners();
  }

  // Check Auth State
  Future<void> checkAuthState() async {
    User? user = _auth.currentUser;
    if (user != null) {
      DocumentSnapshot userDoc = await _firestore
          .collection('users')
          .doc(user.uid)
          .get();
      
      if (userDoc.exists) {
        _currentUser = UserModel.fromJson(userDoc.data() as Map<String, dynamic>);
        notifyListeners();
      }
    }
  }
}
