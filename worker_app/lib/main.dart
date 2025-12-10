import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:provider/provider.dart';
import 'package:get/get.dart';
import 'screens/splash_screen.dart';
import 'screens/home_screen.dart';
import 'screens/auth/login_screen.dart';
import 'services/auth_service.dart';
import 'theme/app_theme.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const KaamFinderWorkerApp());
}

class KaamFinderWorkerApp extends StatelessWidget {
  const KaamFinderWorkerApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthService()),
      ],
      child: GetMaterialApp(
        title: 'KaamFinder Worker',
        debugShowCheckedModeBanner: false,
        theme: AppTheme.lightTheme,
        initialRoute: '/splash',
        getPages: [
          GetPage(name: '/splash', page: () => const SplashScreen()),
          GetPage(name: '/login', page: () => const LoginScreen()),
          GetPage(name: '/home', page: () => const HomeScreen()),
        ],
      ),
    );
  }
}
