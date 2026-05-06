/**
 * GLOSYN PROFESSIONAL — Product Data (JSON-ready)
 * Modular product structure for future API/backend integration
 */

const GLOSYN_PRODUCTS = [
  {
    id: "bluetox-treatment",
    slug: "bluetox-treatment",
    name: "Bluetox Treatment",
    category: "Hair Smoothing Treatment",
    categorySlug: "hair-treatments",
    tagline: "Safe Smoothing, Stunning Results",
    description: "Advanced formaldehyde-free smoothing system designed for powerful hair recovery and smoothing without harsh chemicals.",
    price: 14999,
    currency: "₹",
    image: "photos/Shampoo/Bluetox shampoo.jpeg",
    images: ["photos/Shampoo/Bluetox shampoo.jpeg"],
    badge: "bestseller",
    inStock: true,
    benefits: [
      "Smoothens frizzy and rough hair",
      "Reduces volume and puffiness",
      "Enhances shine and softness",
      "Improves manageability",
      "Long-lasting smoothness",
      "Suitable for regular salon use"
    ],
    usage: [
      "Wash hair with pre shampoo",
      "Blow dry completely",
      "Apply section by section",
      "Leave for 50–60 minutes",
      "Blow dry and seal with flat iron"
    ],
    idealFor: ["Frizzy hair", "Unmanageable hair", "Smooth natural finish lovers"],
    ingredients: "Advanced Keratin Complex, Amino Acids, Hydrolyzed Silk Proteins, Argan Oil, Natural Conditioning Agents",
    specifications: {
      "Type": "Professional Smoothing Treatment",
      "Volume": "1000ml",
      "Formaldehyde": "Free",
      "Professional Use": "Yes"
    },
    featured: true,
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: "pre-shampoo",
    slug: "pre-shampoo",
    name: "Pre Shampoo",
    category: "Hair Preparation",
    categorySlug: "hair-care",
    tagline: "Where Professional Care Begins",
    description: "Professional pre-treatment shampoo for deep scalp purification and preparation before salon treatments.",
    price: 699,
    currency: "₹",
    image: "photos/Shampoo/Sulphate free Shampoo.jpeg",
    images: ["photos/Shampoo/Sulphate free Shampoo.jpeg"],
    badge: "new",
    inStock: true,
    benefits: [
      "Deep scalp purification",
      "Removes buildup",
      "Prepares hair for treatment",
      "Restores softness and shine",
      "Suitable for all hair types"
    ],
    usage: [
      "Apply to wet hair",
      "Massage gently into scalp",
      "Leave for 2–3 minutes",
      "Rinse thoroughly",
      "Follow with treatment of choice"
    ],
    idealFor: ["Keratin treatment preparation", "Hair detox", "Deep cleansing"],
    ingredients: "Purifying Agents, Natural Extracts, Mild Surfactants, Conditioning Polymers",
    specifications: {
      "Type": "Pre-Treatment Shampoo",
      "Volume": "500ml",
      "Sulphate": "Free",
      "Professional Use": "Yes"
    },
    featured: false,
    rating: 4.5,
    reviewCount: 89
  },
  {
    id: "glosyn-shampoo",
    slug: "glosyn-shampoo",
    name: "Glosyn Shampoo",
    category: "Hair Care",
    categorySlug: "hair-care",
    tagline: "Gentle on Hair, Powerful on Results",
    description: "Premium sulphate-free shampoo designed for daily use, protecting color-treated and chemically treated hair while reducing frizz and dryness.",
    price: 999,
    currency: "₹",
    image: "photos/Shampoo/Sulphate free Shampoo.jpeg",
    images: ["photos/Shampoo/Sulphate free Shampoo.jpeg"],
    badge: "bestseller",
    inStock: true,
    benefits: [
      "Sulphate-free formula",
      "Reduces frizz and dryness",
      "Protects color-treated hair",
      "Improves softness",
      "Suitable for daily use"
    ],
    usage: [
      "Apply to wet hair",
      "Lather gently",
      "Massage from roots to tips",
      "Rinse thoroughly",
      "Use daily or as needed"
    ],
    idealFor: ["Dry hair", "Chemically treated hair", "Damaged hair"],
    ingredients: "Sulphate-Free Surfactants, Argan Oil, Keratin Protein, Vitamin E, Aloe Vera Extract",
    specifications: {
      "Type": "Daily Use Shampoo",
      "Volume": "300ml",
      "Sulphate": "Free",
      "Professional Use": "Yes"
    },
    featured: true,
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: "hair-mask",
    slug: "hair-mask",
    name: "Hair Mask",
    category: "Protein Therapy",
    categorySlug: "hair-treatments",
    tagline: "Protein Care for Stronger Hair",
    description: "Deep nourishing protein mask that strengthens weak hair, reduces breakage, and restores elasticity for healthier, more resilient hair.",
    price: 1099,
    currency: "₹",
    image: "photos/Mask/keratin mask.jpeg",
    images: ["photos/Mask/keratin mask.jpeg"],
    badge: "new",
    inStock: true,
    benefits: [
      "Deep nourishment",
      "Strengthens weak hair",
      "Reduces breakage",
      "Restores elasticity",
      "Controls frizz"
    ],
    usage: [
      "Apply after shampooing",
      "Distribute evenly through damp hair",
      "Leave for 10–15 minutes",
      "Rinse with cool water",
      "Use weekly for best results"
    ],
    idealFor: ["Damaged hair", "Dry hair", "Weekly repair treatment"],
    ingredients: "Hydrolyzed Keratin, Collagen, Biotin, Argan Oil, Shea Butter, Silk Amino Acids",
    specifications: {
      "Type": "Protein Treatment Mask",
      "Volume": "500g",
      "Treatment": "Weekly",
      "Professional Use": "Yes"
    },
    featured: true,
    rating: 4.9,
    reviewCount: 198
  },
  {
    id: "argan-serum",
    slug: "argan-serum",
    name: "Argan Serum",
    category: "Hair Serum",
    categorySlug: "serums",
    tagline: "Liquid Gold for Your Hair",
    description: "Lightweight argan oil serum that smoothens frizz, adds brilliant shine, and provides heat protection for daily styling.",
    price: 399,
    currency: "₹",
    image: "photos/Mask/argan serum.jpeg",
    images: ["photos/Mask/argan serum.jpeg"],
    badge: "bestseller",
    inStock: true,
    benefits: [
      "Smoothens frizz",
      "Adds shine",
      "Heat protection",
      "Lightweight formula",
      "Daily finishing touch"
    ],
    usage: [
      "Take 2–3 drops on palm",
      "Apply to damp or dry hair",
      "Focus on mid-lengths and ends",
      "Style as desired",
      "Reapply for extra shine"
    ],
    idealFor: ["Frizzy hair", "Dull hair", "Styling protection"],
    ingredients: "Pure Argan Oil, Vitamin E, Cyclomethicone, Dimethicone, Fragrance",
    specifications: {
      "Type": "Hair Finishing Serum",
      "Volume": "100ml",
      "Oil Type": "Argan",
      "Professional Use": "Yes"
    },
    featured: true,
    rating: 4.8,
    reviewCount: 234
  },
  {
    id: "korean-spa",
    slug: "korean-spa",
    name: "Korean Spa",
    category: "Hair Spa Treatment",
    categorySlug: "spa",
    tagline: "Korean Barrier Repair Technology",
    description: "Advanced Korean-inspired hair spa treatment that delivers deep hydration, moisture restoration, and the coveted glass hair effect.",
    price: 1299,
    currency: "₹",
    image: "photos/Mask/korian spa.jpeg",
    images: ["photos/Mask/korian spa.jpeg"],
    badge: "new",
    inStock: true,
    benefits: [
      "Deep hydration",
      "Moisture restoration",
      "Smoothens rough hair",
      "Glass hair effect",
      "Long-lasting smoothness"
    ],
    usage: [
      "Shampoo hair thoroughly",
      "Apply spa cream generously",
      "Steam for 15–20 minutes",
      "Massage gently",
      "Rinse and style"
    ],
    idealFor: ["Dry hair", "Frizzy hair", "Salon spa treatment"],
    ingredients: "Korean Ceramides, Hyaluronic Acid, Rice Water Extract, Green Tea, Pearl Protein",
    specifications: {
      "Type": "Hair Spa Treatment",
      "Volume": "500g",
      "Technology": "Korean Barrier Repair",
      "Professional Use": "Yes"
    },
    featured: true,
    rating: 4.9,
    reviewCount: 145
  },
  {
    id: "white-chocolate-wax",
    slug: "white-chocolate-wax",
    name: "White Chocolate Liposoluble Wax",
    category: "Wax Collection",
    categorySlug: "wax",
    tagline: "Smooth. Creamy. Professional.",
    description: "Premium white chocolate liposoluble wax with rich creamy texture for smooth, professional hair removal experience.",
    price: 999,
    currency: "₹",
    image: "photos/Wax/White chocolate Wax.jpeg",
    images: ["photos/Wax/White chocolate Wax.jpeg", "photos/Wax/white chocolate liposoluble wax.jpeg"],
    badge: null,
    inStock: true,
    benefits: [
      "Smooth hair removal",
      "Gentle on skin",
      "Rich creamy texture",
      "Salon-grade waxing"
    ],
    usage: [
      "Heat wax to recommended temperature",
      "Apply thin layer in direction of hair growth",
      "Place wax strip",
      "Pull against hair growth direction",
      "Apply soothing lotion"
    ],
    idealFor: ["Arms", "Legs", "Body waxing"],
    ingredients: "Natural Rosin, White Chocolate Extract, Titanium Dioxide, Glyceryl Rosinate",
    specifications: {
      "Type": "Liposoluble Wax",
      "Weight": "800g",
      "Temperature": "Warm",
      "Professional Use": "Yes"
    },
    featured: false,
    rating: 4.6,
    reviewCount: 87
  },
  {
    id: "blueberry-wax",
    slug: "blueberry-wax",
    name: "Blueberry Liposoluble Wax",
    category: "Wax Collection",
    categorySlug: "wax",
    tagline: "Berry Smooth Perfection",
    description: "Gentle blueberry-infused liposoluble wax with skin-hydrating properties for a smooth and comfortable waxing experience.",
    price: 999,
    currency: "₹",
    image: "photos/Wax/Blueberry Wax.jpeg",
    images: ["photos/Wax/Blueberry Wax.jpeg"],
    badge: null,
    inStock: true,
    benefits: [
      "Blueberry extracts",
      "Smooth application",
      "Hydrated skin finish",
      "Gentle waxing experience"
    ],
    usage: [
      "Heat wax to recommended temperature",
      "Apply thin layer in direction of hair growth",
      "Place wax strip",
      "Pull against hair growth direction",
      "Apply soothing lotion"
    ],
    idealFor: ["Sensitive skin", "Normal skin"],
    ingredients: "Natural Rosin, Blueberry Extract, Glyceryl Rosinate, Mineral Oil",
    specifications: {
      "Type": "Liposoluble Wax",
      "Weight": "800g",
      "Temperature": "Warm",
      "Professional Use": "Yes"
    },
    featured: false,
    rating: 4.5,
    reviewCount: 72
  },
  {
    id: "korean-glass-wax",
    slug: "korean-glass-wax",
    name: "Korean Glass Liposoluble Wax",
    category: "Premium Wax Collection",
    categorySlug: "wax",
    tagline: "Glass Skin Starts Here",
    description: "Premium transparent gel wax inspired by Korean beauty technology for precision waxing with a smooth, glass-like skin finish.",
    price: 999,
    currency: "₹",
    image: "photos/Wax/Korean Glass Wax.jpeg",
    images: ["photos/Wax/Korean Glass Wax.jpeg"],
    badge: "new",
    inStock: true,
    benefits: [
      "Transparent gel wax",
      "Precision waxing",
      "Smooth skin finish",
      "Lightweight formula"
    ],
    usage: [
      "Heat gel wax to recommended temperature",
      "Apply thin transparent layer",
      "Place strip firmly",
      "Pull against hair growth direction",
      "Enjoy glass skin finish"
    ],
    idealFor: ["Sensitive skin", "Premium salon services"],
    ingredients: "Korean Gel Formula, Natural Rosin, Vitamin E, Chamomile Extract",
    specifications: {
      "Type": "Liposoluble Gel Wax",
      "Weight": "800g",
      "Technology": "Korean Glass",
      "Professional Use": "Yes"
    },
    featured: true,
    rating: 4.8,
    reviewCount: 96
  },
  {
    id: "pink-beauty-bridal",
    slug: "pink-beauty-bridal",
    name: "Pink Beauty Bridal Special",
    category: "Bridal Wax Collection",
    categorySlug: "bridal",
    tagline: "Made for Brides, Perfected for Glow",
    description: "Specially formulated bridal wax that delivers a radiant glow finish with gentle application, perfect for pre-wedding grooming.",
    price: 1299,
    currency: "₹",
    image: "photos/Wax/Pink Beauty Wax.jpeg",
    images: ["photos/Wax/Pink Beauty Wax.jpeg"],
    badge: "bestseller",
    inStock: true,
    benefits: [
      "Bridal glow finish",
      "Smooth application",
      "Reduces redness",
      "Gentle waxing"
    ],
    usage: [
      "Heat wax to optimal temperature",
      "Apply gently in direction of hair growth",
      "Use quality wax strips",
      "Remove against growth direction",
      "Apply calming post-wax lotion"
    ],
    idealFor: ["Bridal grooming", "Sensitive skin"],
    ingredients: "Natural Rosin, Rose Extract, Titanium Dioxide, Glyceryl Rosinate, Aloe Vera",
    specifications: {
      "Type": "Bridal Wax",
      "Weight": "800g",
      "Special": "Bridal Formula",
      "Professional Use": "Yes"
    },
    featured: true,
    rating: 4.9,
    reviewCount: 112
  },
  {
    id: "white-lily-wax",
    slug: "white-lily-wax",
    name: "White Lily Liposoluble Wax",
    category: "Luxury Wax Collection",
    categorySlug: "wax",
    tagline: "Pure White. Pure Perfection",
    description: "Premium white lily liposoluble wax with nourishing properties for a luxurious, smooth waxing experience with easy application.",
    price: 1299,
    currency: "₹",
    image: "photos/Wax/white lily Wax.jpeg",
    images: ["photos/Wax/white lily Wax.jpeg"],
    badge: null,
    inStock: true,
    benefits: [
      "Premium wax formula",
      "Nourishes skin",
      "Smooth finish",
      "Easy application"
    ],
    usage: [
      "Heat to recommended temperature",
      "Apply thin even layer",
      "Place wax strip firmly",
      "Remove swiftly against growth",
      "Apply moisturizer after"
    ],
    idealFor: ["Salon waxing", "Sensitive skin"],
    ingredients: "Natural Rosin, White Lily Extract, Glyceryl Rosinate, Mineral Oil, Vitamin E",
    specifications: {
      "Type": "Luxury Liposoluble Wax",
      "Weight": "800g",
      "Temperature": "Warm",
      "Professional Use": "Yes"
    },
    featured: false,
    rating: 4.6,
    reviewCount: 68
  }
];

// Categories for filtering
const GLOSYN_CATEGORIES = [
  { slug: "all", name: "All Products", count: GLOSYN_PRODUCTS.length },
  { slug: "hair-care", name: "Hair Care", count: GLOSYN_PRODUCTS.filter(p => p.categorySlug === "hair-care").length },
  { slug: "hair-treatments", name: "Hair Treatments", count: GLOSYN_PRODUCTS.filter(p => p.categorySlug === "hair-treatments").length },
  { slug: "spa", name: "Hair Spa", count: GLOSYN_PRODUCTS.filter(p => p.categorySlug === "spa").length },
  { slug: "serums", name: "Serums", count: GLOSYN_PRODUCTS.filter(p => p.categorySlug === "serums").length },
  { slug: "wax", name: "Wax Collection", count: GLOSYN_PRODUCTS.filter(p => p.categorySlug === "wax").length },
  { slug: "bridal", name: "Bridal Care", count: GLOSYN_PRODUCTS.filter(p => p.categorySlug === "bridal").length }
];

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GLOSYN_PRODUCTS, GLOSYN_CATEGORIES };
}
