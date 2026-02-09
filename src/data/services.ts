export interface Service {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  suitableForAr: string[];
  suitableForEn: string[];
  category: 'individual' | 'company' | 'both';
}

export const services: Service[] = [
  // Individual Services
  {
    id: 'home-cleaning',
    nameAr: 'تنظيف المنازل',
    nameEn: 'Home Cleaning',
    descriptionAr: 'تنظيف شامل للمنازل بأعلى معايير الجودة، تشمل جميع الغرف والمطابخ والحمامات.',
    descriptionEn: 'Comprehensive home cleaning with the highest quality standards, including all rooms, kitchens, and bathrooms.',
    suitableForAr: ['المنازل', 'الشقق'],
    suitableForEn: ['Homes', 'Apartments'],
    category: 'individual',
  },
  {
    id: 'villa-cleaning',
    nameAr: 'تنظيف الفلل',
    nameEn: 'Villa Cleaning',
    descriptionAr: 'خدمة تنظيف متخصصة للفلل والقصور مع فريق مدرب على التعامل مع المساحات الكبيرة.',
    descriptionEn: 'Specialized cleaning service for villas and palaces with a team trained to handle large spaces.',
    suitableForAr: ['الفلل', 'القصور'],
    suitableForEn: ['Villas', 'Palaces'],
    category: 'individual',
  },
  {
    id: 'post-construction',
    nameAr: 'تنظيف ما بعد الإنشاء',
    nameEn: 'Post-Construction Cleaning',
    descriptionAr: 'إزالة بقايا البناء والغبار والدهانات لجعل المكان جاهزاً للسكن.',
    descriptionEn: 'Remove construction debris, dust, and paint to make the place ready for occupancy.',
    suitableForAr: ['المباني الجديدة', 'التجديدات'],
    suitableForEn: ['New buildings', 'Renovations'],
    category: 'individual',
  },
  {
    id: 'upholstery-cleaning',
    nameAr: 'تنظيف المفروشات',
    nameEn: 'Upholstery Cleaning',
    descriptionAr: 'تنظيف السجاد والكنب والستائر باستخدام أحدث المعدات والمواد الآمنة.',
    descriptionEn: 'Clean carpets, sofas, and curtains using the latest equipment and safe materials.',
    suitableForAr: ['السجاد', 'الكنب', 'الستائر'],
    suitableForEn: ['Carpets', 'Sofas', 'Curtains'],
    category: 'individual',
  },
  {
    id: 'floor-cleaning',
    nameAr: 'تنظيف الأرضيات',
    nameEn: 'Floor Cleaning',
    descriptionAr: 'جلي وتلميع البلاط والرخام وتنظيف الباركيه بعناية فائقة.',
    descriptionEn: 'Grinding and polishing tiles and marble, and carefully cleaning parquet.',
    suitableForAr: ['البلاط', 'الرخام', 'الباركيه'],
    suitableForEn: ['Tiles', 'Marble', 'Parquet'],
    category: 'individual',
  },
  {
    id: 'facade-cleaning',
    nameAr: 'تنظيف الواجهات والزجاج',
    nameEn: 'Facade & Glass Cleaning',
    descriptionAr: 'تنظيف واجهات المباني والنوافذ الزجاجية من الخارج والداخل.',
    descriptionEn: 'Clean building facades and glass windows from outside and inside.',
    suitableForAr: ['الواجهات الخارجية', 'النوافذ'],
    suitableForEn: ['External facades', 'Windows'],
    category: 'both',
  },
  {
    id: 'tank-cleaning',
    nameAr: 'تنظيف خزانات المياه',
    nameEn: 'Water Tank Cleaning',
    descriptionAr: 'تنظيف وتعقيم خزانات المياه وفق معايير الصحة والسلامة.',
    descriptionEn: 'Clean and sterilize water tanks according to health and safety standards.',
    suitableForAr: ['المنازل', 'المباني التجارية'],
    suitableForEn: ['Homes', 'Commercial buildings'],
    category: 'individual',
  },
  {
    id: 'pool-cleaning',
    nameAr: 'تنظيف وتعقيم المسابح',
    nameEn: 'Pool Cleaning & Sterilization',
    descriptionAr: 'تنظيف وتعقيم المسابح لضمان مياه نظيفة وآمنة للاستخدام.',
    descriptionEn: 'Clean and sterilize pools to ensure clean and safe water for use.',
    suitableForAr: ['المسابح الخاصة', 'المسابح العامة'],
    suitableForEn: ['Private pools', 'Public pools'],
    category: 'individual',
  },
  
  // Company Services
  {
    id: 'annual-contract',
    nameAr: 'عقد تنظيف سنوي',
    nameEn: 'Annual Cleaning Contract',
    descriptionAr: 'عقود تنظيف سنوية للشركات والمؤسسات بزيارات منتظمة وأسعار تنافسية.',
    descriptionEn: 'Annual cleaning contracts for companies and institutions with regular visits and competitive prices.',
    suitableForAr: ['الشركات', 'المؤسسات'],
    suitableForEn: ['Companies', 'Institutions'],
    category: 'company',
  },
  {
    id: 'office-cleaning',
    nameAr: 'تنظيف المكاتب والمنشآت',
    nameEn: 'Office & Facility Cleaning',
    descriptionAr: 'خدمات تنظيف احترافية للمكاتب والمنشآت التجارية والصناعية.',
    descriptionEn: 'Professional cleaning services for offices and commercial and industrial facilities.',
    suitableForAr: ['المكاتب', 'المستودعات', 'المصانع'],
    suitableForEn: ['Offices', 'Warehouses', 'Factories'],
    category: 'company',
  },
  {
    id: 'housekeeping',
    nameAr: 'خدمات التدبير المنزلي',
    nameEn: 'Housekeeping Services',
    descriptionAr: 'توفر طاقم مدرب للتدبير المنزلي والفندقي بشكل يومي أو شهري.',
    descriptionEn: 'Provide trained staff for domestic and hotel housekeeping on a daily or monthly basis.',
    suitableForAr: ['الفنادق', 'الشقق المفروشة', 'المنتجعات'],
    suitableForEn: ['Hotels', 'Furnished apartments', 'Resorts'],
    category: 'company',
  },
  {
    id: 'pest-control',
    nameAr: 'مكافحة الحشرات والآفات',
    nameEn: 'Pest Control',
    descriptionAr: 'مكافحة الحشرات والآفات باستخدام مواد آمنة ومعتمدة.',
    descriptionEn: 'Control pests using safe and approved materials.',
    suitableForAr: ['المنازل', 'المطاعم', 'المستودعات'],
    suitableForEn: ['Homes', 'Restaurants', 'Warehouses'],
    category: 'both',
  },
  {
    id: 'drainage',
    nameAr: 'شفط مياه الصرف',
    nameEn: 'Drainage Pumping',
    descriptionAr: 'خدمات شفط مياه الصرف والمجاري بمعدات حديثة.',
    descriptionEn: 'Sewage and drainage pumping services with modern equipment.',
    suitableForAr: ['المباني', 'المواقع الإنشائية'],
    suitableForEn: ['Buildings', 'Construction sites'],
    category: 'company',
  },
  {
    id: 'cleaning-supplies',
    nameAr: 'توريد مواد وأدوات النظافة',
    nameEn: 'Cleaning Supplies',
    descriptionAr: 'توريد جميع مواد وأدوات النظافة للشركات والمؤسسات.',
    descriptionEn: 'Supply all cleaning materials and tools for companies and institutions.',
    suitableForAr: ['الشركات', 'المؤسسات', 'الفنادق'],
    suitableForEn: ['Companies', 'Institutions', 'Hotels'],
    category: 'company',
  },
  
  // Additional Services
  {
    id: 'termite-control',
    nameAr: 'مكافحة النمل الأبيض',
    nameEn: 'Termite Control',
    descriptionAr: 'مكافحة النمل الأبيض بأحدث الطرق والمواد الفعالة.',
    descriptionEn: 'Control termites with the latest methods and effective materials.',
    suitableForAr: ['المنازل', 'المباني الخشبية'],
    suitableForEn: ['Homes', 'Wooden buildings'],
    category: 'both',
  },
  {
    id: 'fumigation',
    nameAr: 'التبخير',
    nameEn: 'Fumigation',
    descriptionAr: 'خدمات التبخير للمستودعات والحاويات والمنشآت.',
    descriptionEn: 'Fumigation services for warehouses, containers, and facilities.',
    suitableForAr: ['المستودعات', 'الحاويات', 'المطاحن'],
    suitableForEn: ['Warehouses', 'Containers', 'Mills'],
    category: 'company',
  },
  {
    id: 'animal-control',
    nameAr: 'مكافحة الحيوانات والزواحف',
    nameEn: 'Animal & Reptile Control',
    descriptionAr: 'التعامل حسب الحالة وبإجراءات مناسبة وآمنة.',
    descriptionEn: 'Handling according to the situation with appropriate and safe procedures.',
    suitableForAr: ['المنازل', 'المزارع'],
    suitableForEn: ['Homes', 'Farms'],
    category: 'both',
  },
  {
    id: 'chandelier-cleaning',
    nameAr: 'تنظيف الثريات',
    nameEn: 'Chandelier Cleaning',
    descriptionAr: 'تنظيف الثريات والتحف والأعمال الفنية بعناية فائقة.',
    descriptionEn: 'Clean chandeliers, antiques, and artworks with extreme care.',
    suitableForAr: ['الفلل', 'القصور', 'الفنادق'],
    suitableForEn: ['Villas', 'Palaces', 'Hotels'],
    category: 'individual',
  },
];

export const getServicesByCategory = (category: 'individual' | 'company' | 'both') => {
  return services.filter(service => service.category === category || service.category === 'both');
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};

// Funnel services - simplified for the booking funnel
export const individualServices = [
  { id: 'home-cleaning', nameAr: 'تنظيف المنازل', nameEn: 'Home Cleaning' },
  { id: 'villa-cleaning', nameAr: 'تنظيف الفلل', nameEn: 'Villa Cleaning' },
  { id: 'post-construction', nameAr: 'تنظيف ما بعد الإنشاء', nameEn: 'Post-Construction Cleaning' },
  { id: 'upholstery-cleaning', nameAr: 'تنظيف المفروشات (سجاد/كنب/ستائر)', nameEn: 'Upholstery Cleaning (Carpet/Sofa/Curtains)' },
  { id: 'floor-cleaning', nameAr: 'تنظيف الأرضيات (جلي وتلميع)', nameEn: 'Floor Cleaning (Grinding & Polishing)' },
  { id: 'facade-cleaning', nameAr: 'تنظيف الواجهات والزجاج', nameEn: 'Facade & Glass Cleaning' },
  { id: 'tank-cleaning', nameAr: 'تنظيف خزانات المياه', nameEn: 'Water Tank Cleaning' },
  { id: 'pool-cleaning', nameAr: 'تنظيف وتعقيم المسابح', nameEn: 'Pool Cleaning & Sterilization' },
];

export const companyServices = [
  { id: 'annual-contract', nameAr: 'عقد تنظيف سنوي (B2B)', nameEn: 'Annual Cleaning Contract (B2B)' },
  { id: 'office-cleaning', nameAr: 'تنظيف المكاتب والمنشآت', nameEn: 'Office & Facility Cleaning' },
  { id: 'housekeeping', nameAr: 'خدمات التدبير المنزلي', nameEn: 'Housekeeping Services' },
  { id: 'facade-cleaning', nameAr: 'تنظيف الواجهات والزجاج للمباني', nameEn: 'Building Facade & Glass Cleaning' },
  { id: 'pest-control', nameAr: 'مكافحة الحشرات والآفات', nameEn: 'Pest Control' },
  { id: 'drainage', nameAr: 'شفط مياه الصرف', nameEn: 'Drainage Pumping' },
  { id: 'cleaning-supplies', nameAr: 'توريد مواد وأدوات النظافة', nameEn: 'Cleaning Supplies' },
];
