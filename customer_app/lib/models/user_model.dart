class UserModel {
  final String id;
  final String name;
  final String phone;
  final String? email;
  final String? profileImage;
  final String userType; // 'customer' or 'worker'
  final DateTime createdAt;
  final DateTime? updatedAt;
  final Map<String, dynamic>? address;
  final bool isActive;

  UserModel({
    required this.id,
    required this.name,
    required this.phone,
    this.email,
    this.profileImage,
    required this.userType,
    required this.createdAt,
    this.updatedAt,
    this.address,
    this.isActive = true,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      id: json['id'] ?? '',
      name: json['name'] ?? '',
      phone: json['phone'] ?? '',
      email: json['email'],
      profileImage: json['profileImage'],
      userType: json['userType'] ?? 'customer',
      createdAt: DateTime.parse(json['createdAt']),
      updatedAt: json['updatedAt'] != null ? DateTime.parse(json['updatedAt']) : null,
      address: json['address'],
      isActive: json['isActive'] ?? true,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'phone': phone,
      'email': email,
      'profileImage': profileImage,
      'userType': userType,
      'createdAt': createdAt.toIso8601String(),
      'updatedAt': updatedAt?.toIso8601String(),
      'address': address,
      'isActive': isActive,
    };
  }
}
