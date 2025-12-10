class WorkerModel {
  final String id;
  final String name;
  final String phone;
  final String? profileImage;
  final List<String> categories;
  final List<String> skills;
  final double rating;
  final int totalJobs;
  final int totalReviews;
  final String experience; // e.g., "5 years"
  final double pricePerHour;
  final bool isVerified;
  final bool isAvailable;
  final String? subscriptionPlan; // 'free', 'silver', 'gold'
  final Map<String, dynamic>? location;
  final double? distance; // in km
  final String? eta; // estimated time of arrival
  final DateTime createdAt;
  final List<String>? photos;
  final String? bio;

  WorkerModel({
    required this.id,
    required this.name,
    required this.phone,
    this.profileImage,
    required this.categories,
    required this.skills,
    this.rating = 0.0,
    this.totalJobs = 0,
    this.totalReviews = 0,
    required this.experience,
    required this.pricePerHour,
    this.isVerified = false,
    this.isAvailable = true,
    this.subscriptionPlan = 'free',
    this.location,
    this.distance,
    this.eta,
    required this.createdAt,
    this.photos,
    this.bio,
  });

  factory WorkerModel.fromJson(Map<String, dynamic> json) {
    return WorkerModel(
      id: json['id'] ?? '',
      name: json['name'] ?? '',
      phone: json['phone'] ?? '',
      profileImage: json['profileImage'],
      categories: List<String>.from(json['categories'] ?? []),
      skills: List<String>.from(json['skills'] ?? []),
      rating: (json['rating'] ?? 0.0).toDouble(),
      totalJobs: json['totalJobs'] ?? 0,
      totalReviews: json['totalReviews'] ?? 0,
      experience: json['experience'] ?? '',
      pricePerHour: (json['pricePerHour'] ?? 0.0).toDouble(),
      isVerified: json['isVerified'] ?? false,
      isAvailable: json['isAvailable'] ?? true,
      subscriptionPlan: json['subscriptionPlan'] ?? 'free',
      location: json['location'],
      distance: json['distance']?.toDouble(),
      eta: json['eta'],
      createdAt: DateTime.parse(json['createdAt']),
      photos: json['photos'] != null ? List<String>.from(json['photos']) : null,
      bio: json['bio'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'phone': phone,
      'profileImage': profileImage,
      'categories': categories,
      'skills': skills,
      'rating': rating,
      'totalJobs': totalJobs,
      'totalReviews': totalReviews,
      'experience': experience,
      'pricePerHour': pricePerHour,
      'isVerified': isVerified,
      'isAvailable': isAvailable,
      'subscriptionPlan': subscriptionPlan,
      'location': location,
      'distance': distance,
      'eta': eta,
      'createdAt': createdAt.toIso8601String(),
      'photos': photos,
      'bio': bio,
    };
  }
}
