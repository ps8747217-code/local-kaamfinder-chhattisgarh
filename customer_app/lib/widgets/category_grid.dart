import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class CategoryGrid extends StatelessWidget {
  const CategoryGrid({super.key});

  final List<Map<String, dynamic>> categories = const [
    {'name': 'Plumber', 'nameHindi': 'नलसाज', 'icon': Icons.plumbing},
    {'name': 'Electrician', 'nameHindi': 'बिजली मिस्त्री', 'icon': Icons.electrical_services},
    {'name': 'Carpenter', 'nameHindi': 'बढ़ई', 'icon': Icons.carpenter},
    {'name': 'AC Repair', 'nameHindi': 'एसी मरम्मत', 'icon': Icons.ac_unit},
    {'name': 'Mechanic', 'nameHindi': 'मैकेनिक', 'icon': Icons.build},
    {'name': 'Cleaner', 'nameHindi': 'सफाई कर्मी', 'icon': Icons.cleaning_services},
    {'name': 'Painter', 'nameHindi': 'पेंटर', 'icon': Icons.format_paint},
    {'name': 'Driver', 'nameHindi': 'ड्राइवर', 'icon': Icons.drive_eta},
  ];

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      padding: const EdgeInsets.symmetric(horizontal: 16),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 4,
        crossAxisSpacing: 12,
        mainAxisSpacing: 12,
        childAspectRatio: 0.85,
      ),
      itemCount: categories.length,
      itemBuilder: (context, index) {
        final category = categories[index];
        return GestureDetector(
          onTap: () {
            // Navigate to category workers list
          },
          child: Column(
            children: [
              Container(
                width: 60,
                height: 60,
                decoration: BoxDecoration(
                  color: AppTheme.primaryBlue.withOpacity(0.1),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Icon(
                  category['icon'] as IconData,
                  color: AppTheme.primaryBlue,
                  size: 30,
                ),
              ),
              const SizedBox(height: 8),
              Text(
                category['name'] as String,
                textAlign: TextAlign.center,
                style: const TextStyle(
                  fontSize: 11,
                  fontWeight: FontWeight.w500,
                ),
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
              ),
            ],
          ),
        );
      },
    );
  }
}
