class CategoryModel {
  final String id;
  final String name;
  final String nameHindi;
  final String nameChhattisgarhi;
  final String icon;
  final String? image;
  final String description;
  final bool isActive;
  final int order;
  final List<String>? subCategories;

  CategoryModel({
    required this.id,
    required this.name,
    required this.nameHindi,
    required this.nameChhattisgarhi,
    required this.icon,
    this.image,
    required this.description,
    this.isActive = true,
    this.order = 0,
    this.subCategories,
  });

  factory CategoryModel.fromJson(Map<String, dynamic> json) {
    return CategoryModel(
      id: json['id'] ?? '',
      name: json['name'] ?? '',
      nameHindi: json['nameHindi'] ?? '',
      nameChhattisgarhi: json['nameChhattisgarhi'] ?? '',
      icon: json['icon'] ?? '',
      image: json['image'],
      description: json['description'] ?? '',
      isActive: json['isActive'] ?? true,
      order: json['order'] ?? 0,
      subCategories: json['subCategories'] != null 
          ? List<String>.from(json['subCategories']) 
          : null,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'nameHindi': nameHindi,
      'nameChhattisgarhi': nameChhattisgarhi,
      'icon': icon,
      'image': image,
      'description': description,
      'isActive': isActive,
      'order': order,
      'subCategories': subCategories,
    };
  }
}
