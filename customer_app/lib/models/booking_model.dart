class BookingModel {
  final String id;
  final String customerId;
  final String workerId;
  final String categoryId;
  final String categoryName;
  final String status; // 'pending', 'accepted', 'in_progress', 'completed', 'cancelled'
  final DateTime scheduledDate;
  final String? scheduledTime;
  final Map<String, dynamic> location;
  final String address;
  final String? description;
  final double estimatedPrice;
  final double? finalPrice;
  final String paymentMethod; // 'cash', 'upi', 'wallet'
  final String? paymentStatus; // 'pending', 'completed', 'failed'
  final DateTime createdAt;
  final DateTime? completedAt;
  final String? cancellationReason;
  final double? rating;
  final String? review;

  BookingModel({
    required this.id,
    required this.customerId,
    required this.workerId,
    required this.categoryId,
    required this.categoryName,
    required this.status,
    required this.scheduledDate,
    this.scheduledTime,
    required this.location,
    required this.address,
    this.description,
    required this.estimatedPrice,
    this.finalPrice,
    required this.paymentMethod,
    this.paymentStatus = 'pending',
    required this.createdAt,
    this.completedAt,
    this.cancellationReason,
    this.rating,
    this.review,
  });

  factory BookingModel.fromJson(Map<String, dynamic> json) {
    return BookingModel(
      id: json['id'] ?? '',
      customerId: json['customerId'] ?? '',
      workerId: json['workerId'] ?? '',
      categoryId: json['categoryId'] ?? '',
      categoryName: json['categoryName'] ?? '',
      status: json['status'] ?? 'pending',
      scheduledDate: DateTime.parse(json['scheduledDate']),
      scheduledTime: json['scheduledTime'],
      location: json['location'] ?? {},
      address: json['address'] ?? '',
      description: json['description'],
      estimatedPrice: (json['estimatedPrice'] ?? 0.0).toDouble(),
      finalPrice: json['finalPrice']?.toDouble(),
      paymentMethod: json['paymentMethod'] ?? 'cash',
      paymentStatus: json['paymentStatus'] ?? 'pending',
      createdAt: DateTime.parse(json['createdAt']),
      completedAt: json['completedAt'] != null ? DateTime.parse(json['completedAt']) : null,
      cancellationReason: json['cancellationReason'],
      rating: json['rating']?.toDouble(),
      review: json['review'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'customerId': customerId,
      'workerId': workerId,
      'categoryId': categoryId,
      'categoryName': categoryName,
      'status': status,
      'scheduledDate': scheduledDate.toIso8601String(),
      'scheduledTime': scheduledTime,
      'location': location,
      'address': address,
      'description': description,
      'estimatedPrice': estimatedPrice,
      'finalPrice': finalPrice,
      'paymentMethod': paymentMethod,
      'paymentStatus': paymentStatus,
      'createdAt': createdAt.toIso8601String(),
      'completedAt': completedAt?.toIso8601String(),
      'cancellationReason': cancellationReason,
      'rating': rating,
      'review': review,
    };
  }
}
