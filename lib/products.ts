import { Product, Review } from "./types";

const PRODUCT_CATALOG: Product[] = [
  // SKINCARE
  {
    id: "p01",
    slug: "the-ordinary-aha-30-bha-2-peeling-solution",
    brand: "The Ordinary",
    name: "The Ordinary AHA 30% + BHA 2% Peeling Solution",
    category: "skincare",
    price: 2800,
    oldPrice: 3500,
    rating: 4.8,
    reviewsCount: 212,
    stock: 34,
    badges: ["BEST SELLER", "SALE"],
    image: "/images/products/ahabhatheordinary.jpg",
    description:
  "A powerful at-home exfoliating peel combining 30% AHAs and 2% BHAs to resurface the skin, improve the look of uneven texture, and reveal a brighter, smoother-looking complexion.",

benefits: [
  "Visibly improves uneven skin texture",
  "Helps reduce the appearance of blemishes and clogged pores",
  "Brightens the look of dull, uneven skin",
  "Helps smooth rough areas and improve skin radiance",
],

ingredients:
  "Glycolic Acid, Lactic Acid, Tartaric Acid, Citric Acid, Salicylic Acid, Hyaluronic Acid, Tasmanian Pepperberry Derivative.",

howToUse:
  "Apply a thin, even layer to clean, completely dry skin, avoiding the eye and lip areas. Leave on for no more than 10 minutes, then rinse thoroughly with lukewarm water. Use no more than once or twice a week, preferably in the evening. Patch test before first use and always use SPF during the day."  },
  {
    id: "p02",
    slug: "dr-rashel-aloe-vera-facial-cleanser",
    brand: "Dr.Rashel",
    name: "Dr. Rashel Aloe Vera Facial Cleanser",
    category: "skincare",
    price: 2600,
    oldPrice: 3200,
    rating: 4.7,
    reviewsCount: 178,
    stock: 41,
    badges: ["SALE"],
    image: "/images/products/aloecleanser.jpg",
   description:
  "A gentle aloe vera facial cleanser designed to remove dirt, excess oil, and daily impurities while helping the skin feel fresh, clean, and comfortably hydrated.",

benefits: [
  "Gently cleanses away dirt, oil, and impurities",
  "Helps leave skin feeling fresh and refreshed",
  "Helps maintain a soft and comfortable skin feel",
  "Aloe vera helps support a hydrated-looking complexion",
],

ingredients:
  "Aloe Vera Extract, Aqua, Glycerin, Cocamidopropyl Betaine, Sodium Chloride, Fragrance, and cleansing agents.",

howToUse:
  "Wet your face with lukewarm water and apply a small amount of cleanser to your hands. Gently massage over the face in circular motions, avoiding the eye area. Rinse thoroughly and pat dry. Use morning and evening."  },
  {
    id: "p03",
    slug: "dr.rashel-aloe-vera-moisturizing-cream",
    brand: "Dr.Rashel",
    name: "Dr. Rashel Aloe Vera Moisturizing Cream",
    category: "skincare",
    price: 1800,
    rating: 4.5,
    reviewsCount: 96,
    stock: 58,
    badges: ["NEW"],
    image: "/images/products/aloemoisturizer.jpg",
    description:
  "A lightweight aloe vera moisturizer formulated to hydrate and soothe the skin while helping maintain a soft, smooth, and refreshed-looking complexion.",

benefits: [
  "Helps replenish moisture and prevent a dry, tight feeling",
  "Soothes and refreshes the look of the skin",
  "Leaves skin feeling soft, smooth, and comfortable",
  "Lightweight texture suitable for everyday skincare routines",
],

ingredients:
  "Aloe Vera Extract, Aqua, Glycerin, Hyaluronic Acid, Vitamin E, Panthenol, Emollients, and moisturizing agents.",

howToUse:
  "Apply a small amount to clean, dry skin after cleansing and serums. Gently massage over the face and neck until fully absorbed. Use morning and evening. During the day, follow with sunscreen."  },
  {
    id: "p04",
    slug: "dr-rashel-aloe-vera-serum",
    brand: "Dr.Rashel",
    name: "Dr. Rashel Aloe Vera Serum",
    category: "skincare",
    price: 3400,
    rating: 4.9,
    reviewsCount: 145,
    stock: 22,
    badges: ["BEST SELLER"],
    image: "/images/products/aloeserumrashel.jpg",
    description:
  "A lightweight aloe vera facial serum designed to replenish moisture, soothe the skin, and leave the complexion feeling soft, refreshed, and hydrated.",

benefits: [
  "Helps boost hydration and reduce the feeling of dryness",
  "Soothes and refreshes the look of stressed skin",
  "Helps maintain a soft and smooth-looking complexion",
  "Lightweight texture that layers easily with moisturiser",
],

ingredients:
  "Aloe Vera Extract, Aqua, Glycerin, Hyaluronic Acid, Panthenol, Vitamin E, and skin-conditioning agents.",

howToUse:
  "Apply 2–3 drops to clean, dry skin after cleansing and toning. Gently pat or massage into the face and neck until absorbed. Follow with moisturiser and SPF during the day. Use morning and evening. Patch test before first use."  },
  {
    id: "p05",
    slug: "dr-rashel-aloe-vera-toner",
    brand: "Dr.Rashel",
    name: "Dr. Rashel Aloe Vera Toner",
    category: "bodycare",
    price: 1450,
    rating: 4.6,
    reviewsCount: 301,
    stock: 76,
    badges: [],
    image: "/images/products/aloetoner.jpg",
    description:
  "A refreshing aloe vera toner designed to gently condition the skin after cleansing while helping replenish moisture and leave the complexion feeling fresh, soft, and balanced.",

benefits: [
  "Helps refresh and hydrate the skin after cleansing",
  "Soothes the look of dry and stressed skin",
  "Helps leave skin feeling soft and comfortable",
  "Prepares the skin for serums and moisturisers",
],

ingredients:
  "Aloe Vera Extract, Aqua, Glycerin, Panthenol, Hyaluronic Acid, Vitamin E, and skin-conditioning agents.",

howToUse:
  "After cleansing, apply a small amount to clean skin using your hands or a cotton pad. Gently pat into the face and neck until absorbed. Follow with serum and moisturiser. Use morning and evening."  },
  {
    id: "p06",
    slug: "batana-oil-conditioner",
    brand: "Batana",
    name: "Batana Oil Conditioner",
    category: "haircare",
    price: 1600,
    oldPrice: 2000,
    rating: 4.4,
    reviewsCount: 58,
    stock: 4,
    badges: ["SALE", "LOW STOCK"],
    image: "/images/products/batanaconditioner.jpg",
    description:
  "A nourishing hair conditioner enriched with Batana Oil to help moisturise, soften, and smooth dry, rough-looking hair while improving manageability and leaving hair feeling healthier and more conditioned.",

benefits: [
  "Helps nourish and moisturise dry, thirsty hair",
  "Softens hair and improves smoothness",
  "Helps reduce the appearance of dryness and frizz",
  "Makes hair easier to detangle and manage",
],

ingredients:
  "Aqua, Batana Oil, Glycerin, Cetearyl Alcohol, Behentrimonium Chloride, Coconut Oil, Shea Butter, Panthenol, Fragrance, and conditioning agents.",

howToUse:
  "After shampooing, apply a generous amount of conditioner to clean, damp hair, focusing on the mid-lengths and ends. Leave on for 2–5 minutes, then rinse thoroughly. Use regularly for best conditioning results."  },

  // BODYCARE
  {
    id: "p07",
    slug: "as-nail-polish-gel",
    brand: "Roniki",
    name: "AS Nail Polish Gel",
    category: "bodycare",
    price: 1900,
    rating: 4.8,
    reviewsCount: 234,
    stock: 64,
    badges: ["BEST SELLER"],
    image: "/images/products/asgel.jpg",
   description:
  "A vibrant gel nail polish designed to deliver rich, even color with a smooth, glossy finish. Its long-lasting formula helps create salon-quality nails with a polished, professional look.",

benefits: [
  "Provides rich, vibrant color with a glossy finish",
  "Helps create smooth and professional-looking nails",
  "Long-lasting finish when properly cured",
  "Ideal for creating salon-quality manicures at home or professionally",
],

ingredients:
  "Acrylates Copolymer, Isobornyl Methacrylate, Hydroxyethyl Methacrylate, Photoinitiators, Pigments, and UV/LED-curable gel ingredients.",

howToUse:
  "Prepare and clean the nails, then apply a thin layer of base coat and cure according to the lamp instructions. Apply a thin, even layer of AS Gel Nail Polish and cure under a compatible UV/LED lamp. Apply a second coat if desired and cure again. Finish with a gel top coat for added shine and durability."  },
  {
    id: "p08",
    slug: "batana-oil-cream",
    brand: "Batana",
    name: "Batana OilCream",
    category: "haircare",
    price: 1600,
    rating: 4.6,
    reviewsCount: 87,
    stock: 49,
    badges: ["NEW"],
    image: "/images/products/batanacream.jpg",

    description:
  "A nourishing Batana Oil cream formulated to moisturise and soften the skin while helping improve the look and feel of dry, rough areas for a smoother, more supple-looking complexion.",

benefits: [
  "Helps deeply moisturise dry and rough-looking skin",
  "Leaves skin feeling soft, smooth, and supple",
  "Helps nourish and condition the skin",
  "Provides a comfortable, non-drying feel for everyday use",
],

ingredients:
  "Aqua, Batana Oil, Glycerin, Shea Butter, Cetearyl Alcohol, Coconut Oil, Vitamin E, Panthenol, Fragrance, and skin-conditioning agents.",

howToUse:
  "Apply a generous amount to clean, dry skin and gently massage until fully absorbed. Pay extra attention to dry areas such as elbows, knees, and hands. Use daily or whenever the skin feels dry."  },
  {
    id: "p09",
    slug: "collagen-with-burn",
    brand: "Winstown",
    name: "Collagen with Burn",
    category: "bodycare",
    price: 2200,
    rating: 4.7,
    reviewsCount: 112,
    stock: 37,
    badges: [],
    image: "/images/products/collagenburn.jpg",

    description:
  "A convenient collagen-based wellness supplement formulated to support beauty from within while complementing an active lifestyle and daily wellness routine.",

benefits: [
  "Supports healthy-looking skin and overall skin wellness",
  "Helps support collagen intake as part of a balanced diet",
  "Convenient daily supplement for beauty and wellness routines",
  "Designed to complement an active and healthy lifestyle",
],

ingredients:
  "Hydrolyzed Collagen Peptides, Vitamin C, and selected vitamins, minerals, or botanical ingredients depending on the product formulation.",

howToUse:
  "Take the recommended serving according to the product label. Mix with water or your preferred beverage if applicable. Use consistently as part of a balanced diet and healthy lifestyle. Do not exceed the recommended daily serving."  },
  {
    id: "p10",
    slug: "cosrx-advanced-snail-92-all-in-one-cream",
    brand: "Cosrx",
    name: "COSRX Advanced Snail 92 All In One Cream",
    category: "skincare",
    price: 1750,
    oldPrice: 2100,
    rating: 4.5,
    reviewsCount: 76,
    stock: 52,
    image: "/images/products/cosrxcream1.jpg",
    badges: ["SALE"],
    description:
  "A rich yet lightweight moisturizing cream formulated with 92% snail mucin to deeply hydrate, soothe, and support a smooth, healthy-looking complexion while helping improve the appearance of dryness and skin irritation.",

benefits: [
  "Provides long-lasting hydration and helps reduce dryness",
  "Helps soothe and comfort stressed-looking skin",
  "Supports a smoother, softer-looking complexion",
  "Helps improve the appearance of dull and uneven-looking skin",
],

ingredients:
  "Snail Secretion Filtrate (92%), Betaine, Glycerin, Sodium Hyaluronate, Panthenol, Allantoin, Arginine, Carbomer, and skin-conditioning ingredients.",

howToUse:
  "After cleansing, toning, and applying your serum, apply an appropriate amount to the face and neck. Gently pat or massage until fully absorbed. Use morning and evening. During the day, finish with sunscreen."  },

  // HAIRCARE
  {
    id: "p11",
    slug: "cosrx-hyaluronic-acid-intensive-cream",
    brand: "Cosrx",
    name: "COSRX Hyaluronic Acid Intensive Cream",
    category: "skincare",
    price: 1500,
    rating: 4.6,
    reviewsCount: 190,
    stock: 66,
    badges: ["BEST SELLER"],
    image: "/images/products/cosrxhyaluronic1.jpg",
    description:
  "A rich, deeply moisturizing cream formulated with hyaluronic acid and skin-nourishing ingredients to replenish moisture, strengthen the skin's moisture barrier, and leave dry skin feeling soft, smooth, and comfortably hydrated.",

benefits: [
  "Provides intense and lasting hydration",
  "Helps replenish moisture and reduce the feeling of dryness",
  "Supports a healthy-looking skin moisture barrier",
  "Leaves skin feeling soft, smooth, and supple",
],

ingredients:
  "Hippophae Rhamnoides Water, Hippophae Rhamnoides Oil, Glycerin, Sodium Hyaluronate, Panthenol, Betaine, Allantoin, Macadamia Integrifolia Seed Oil, and skin-conditioning ingredients.",

howToUse:
  "After cleansing and applying toner or serum, apply an appropriate amount evenly over the face and neck. Gently pat or massage until fully absorbed. Use morning and evening. During the day, follow with sunscreen."  },
  {
    id: "p12",
    slug: "cosrx-low-ph-good-morning-gel-cleanser",
    brand: "Cosrx",
    name: "COSRX Low pH Good Morning Gel Cleanser",
    category: "skincare",
    price: 1500,
    rating: 4.6,
    reviewsCount: 165,
    stock: 61,
    badges: [],
    image: "/images/products/cosrxlowphcleanser.jpg",
    description:
  "A gentle low-pH gel cleanser designed to effectively remove daily impurities, excess oil, and makeup residue while helping maintain the skin's natural moisture balance for a fresh, clean, and comfortable finish.",

benefits: [
  "Gently removes dirt, excess oil, and daily impurities",
  "Helps cleanse without leaving the skin feeling overly dry",
  "Supports the skin's natural moisture balance",
  "Leaves the complexion feeling fresh, clean, and smooth",
],

ingredients:
  "Melaleuca Alternifolia (Tea Tree) Leaf Oil, Saccharomyces Ferment, Betaine Salicylate, Cocamidopropyl Betaine, Sodium Lauroyl Methyl Isethionate, Glycerin, Allantoin, and skin-conditioning ingredients.",

howToUse:
  "Wet your face with lukewarm water and apply a small amount of cleanser to your hands. Gently massage over the face in circular motions, avoiding the eye area. Rinse thoroughly and pat dry. Use morning and evening, then follow with toner, serum, and moisturiser."  },
  {
    id: "p13",
    slug: "cosrx-salicylic-acid-daily-gentle-cleanser",
    brand: "Cosrx",
    name: "COSRX Salicylic Acid Daily Gentle Cleanser",
    category: "skincare",
    price: 1300,
    oldPrice: 1600,
    rating: 4.9,
    reviewsCount: 402,
    stock: 88,
    badges: ["SALE", "BEST SELLER"],
    image: "/images/products/cosrxsalicylic1.jpg",
    description:
  "A gentle yet effective facial cleanser formulated with salicylic acid to remove excess oil, impurities, and buildup while helping keep pores looking clearer and the skin feeling fresh and smooth.",

benefits: [
  "Helps remove excess oil and daily impurities",
  "Helps unclog and refine the appearance of pores",
  "Supports clearer-looking skin and helps reduce the appearance of blemishes",
  "Leaves the skin feeling clean, refreshed, and smooth",
],

ingredients:
  "Salicylic Acid, Tea Tree Oil, Cocamidopropyl Betaine, Glycerin, Sodium Lauroyl Methyl Isethionate, Citric Acid, and skin-conditioning ingredients.",

howToUse:
  "Wet your face with lukewarm water and apply a small amount of cleanser to your hands. Gently massage over the face, avoiding the eye and lip areas. Rinse thoroughly and pat dry. Use once or twice daily depending on your skin's tolerance. Follow with toner, moisturiser, and SPF during the day."  },
  {
    id: "p14",
    slug: "cosrx-advanced-snail-96-mucin-power-essence",
    brand: "Cosrx",
    name: "COSRX Advanced Snail 96 Mucin Power Essence",
    category: "skincare",
    price: 1650,
    rating: 4.4,
    reviewsCount: 63,
    stock: 40,
    badges: ["NEW"],
    image: "/images/products/cosrxtonerPoweressence1.jpg",
    description:
  "A lightweight, hydrating essence formulated with 96.3% snail secretion filtrate to deeply moisturise, soothe, and support a healthy-looking skin barrier while helping improve the appearance of dull, dry, and uneven skin.",

benefits: [
  "Provides intense hydration without a heavy feel",
  "Helps soothe and comfort dry or stressed-looking skin",
  "Supports a stronger, healthier-looking skin barrier",
  "Helps improve the appearance of dull and uneven skin",
],

ingredients:
  "Snail Secretion Filtrate (96.3%), Betaine, Glycerin, Sodium Hyaluronate, Panthenol, Allantoin, Arginine, and skin-conditioning ingredients.",

howToUse:
  "After cleansing and toning, apply 1–2 pumps of the essence evenly to the face and neck. Gently pat into the skin until fully absorbed. Follow with serum and moisturiser. Use morning and evening. During the day, finish with sunscreen."  },

  // WELLNESS
  {
    id: "p15",
    slug: "flat-tummy-gummies",
    brand: "winstown",
    name: "Flat Tummy Gummies",
    category: "wellness",
    price: 950,
    rating: 4.7,
    reviewsCount: 88,
    stock: 70,
    badges: [],
    image: "/images/products/flattummygummies.jpg",
    description:
  "A convenient daily wellness gummy formulated to complement a healthy lifestyle and support digestive wellness. Easy to take and suitable for adding to your everyday self-care routine.",

benefits: [
  "Supports everyday digestive wellness",
  "Convenient and easy-to-take gummy format",
  "Helps complement a balanced diet and active lifestyle",
  "A simple addition to your daily wellness routine",
],

ingredients:
  "Apple Cider Vinegar, Pectin, Natural Flavouring, Citric Acid, Sweeteners, and selected vitamins or botanical ingredients depending on the product formulation.",

howToUse:
  "Take the recommended serving indicated on the product label. Chew thoroughly and use consistently as part of a balanced diet and healthy lifestyle. Do not exceed the recommended daily serving."  },
  {
    id: "p16",
    slug: "glycolic-acid-7-exfoliating-toner",
    brand: "The Ordinary",
    name: "The Ordinary Glycolic Acid 7% Exfoliating Toner",
    category: "skincare",
    price: 2400,
    rating: 4.5,
    reviewsCount: 121,
    stock: 45,
    badges: ["NEW"],
    image: "/images/products/glycolictheordinary.jpg",
    description:
  "A daily exfoliating toner formulated with 7% glycolic acid to gently remove dead skin cells, improve the look of uneven texture, and reveal a smoother, brighter, and more radiant-looking complexion.",

benefits: [
  "Helps exfoliate dead skin cells and improve skin texture",
  "Brightens the appearance of dull, uneven skin",
  "Helps smooth the look of rough skin",
  "Supports a more radiant and refined-looking complexion",
],

ingredients:
  "Aqua, Glycolic Acid, Rosa Damascena Flower Water, Centaurea Cyanus Flower Water, Aloe Barbadensis Leaf Water, Amino Acids, Ginseng Root Extract, and Tasmanian Pepperberry Derivative.",

howToUse:
  "Apply a small amount to clean, dry skin using a cotton pad or your hands, avoiding the eye area. Use once daily, preferably in the evening. Do not combine with other strong exfoliating acids or retinoids in the same routine. Always use sunscreen during the day and patch test before first use."  },
  {
    id: "p17",
    slug: "detox-herbal-tea-blend",
    brand: "Dr.Rashel",
    name: "Detox Herbal Tea Blend",
    category: "wellness",
    price: 1100,
    rating: 4.3,
    reviewsCount: 40,
    stock: 54,
    badges: [],
    image: "/images/products/lacticacidtheordinary.jpg",
    description:
      "A caffeine-free herbal blend of ginger, lemongrass and hibiscus designed to support gentle daily wellness rituals.",
    benefits: ["Caffeine-free daily ritual", "Warming ginger and lemongrass blend", "20 individually sealed sachets"],
    ingredients: "Ginger Root, Lemongrass, Hibiscus, Green Tea Leaf, Lemon Peel.",
    howToUse: "Steep one sachet in hot water for 5–7 minutes.",
  },
  {
    id: "p18",
    slug: "medicube-pdrn-pink-peptide-volumizing-collagen-capsule-cream",
    brand: "Medicube",
    name: "Medicube PDRN Pink Peptide Volumizing Collagen Capsule Cream",
    category: "skincare",
    price: 1350,
    oldPrice: 1600,
    rating: 4.6,
    reviewsCount: 55,
    stock: 33,
    badges: ["SALE"],
    image: "/images/products/medicubecream.jpg",
    description:
  "A luxurious collagen capsule cream designed to deliver intensive hydration and nourishment while helping improve the appearance of firmness, elasticity, and skin texture for a plump, smooth, and radiant-looking complexion.",

benefits: [
  "Provides deep and lasting hydration",
  "Helps improve the appearance of skin firmness and elasticity",
  "Supports a plumper, smoother-looking complexion",
  "Helps nourish and enhance the appearance of dull, tired-looking skin",
],

ingredients:
  "Hydrolyzed Collagen, Niacinamide, Glycerin, Hyaluronic Acid, Adenosine, Peptides, Panthenol, and skin-conditioning ingredients.",

howToUse:
  "After cleansing and applying toner or serum, apply an appropriate amount evenly over the face and neck. Gently massage until the cream and capsules are fully absorbed. Use morning and evening as the final step of your skincare routine. During the day, finish with sunscreen."  },

  // MAKEUP
  {
    id: "p19",
    slug: "medicube-zero-pore-mild-cleansing-foam",
    brand: "Medicube",
    name: "Medicube Zero Pore Mild Cleansing Foam",
    category: "skincare",
    price: 1400,
    rating: 4.7,
    reviewsCount: 210,
    stock: 80,
    badges: ["BEST SELLER"],
    image: "/images/products/medicubemild.jpg",

    description:
  "A gentle daily cleansing foam designed to effectively remove dirt, excess oil, and impurities while helping keep pores looking clean and the skin feeling fresh, smooth, and comfortable.",

benefits: [
  "Gently removes dirt, excess oil, and daily impurities",
  "Helps keep pores looking clean and refined",
  "Cleanses without leaving the skin feeling overly dry",
  "Leaves skin feeling fresh, soft, and comfortably clean",
],

ingredients:
  "Water, Glycerin, Cocamidopropyl Betaine, Sodium Lauroyl Methyl Isethionate, Panthenol, Allantoin, and skin-conditioning ingredients.",

howToUse:
  "Wet your face with lukewarm water and apply a small amount of cleanser to your hands. Work into a rich lather and gently massage over the face, avoiding the eye area. Rinse thoroughly and pat dry. Use morning and evening, followed by toner, serum, and moisturiser."  },
  {
    id: "p20",
    slug: "medicube-pdrn-pink-peptide-serum",
    brand: "Medicube",
    name: "Medicube PDRN Pink Peptide Serum",
    category: "skincare",
    price: 2600,
    rating: 4.8,
    reviewsCount: 267,
    stock: 58,
    badges: ["BEST SELLER"],
    image: "/images/products/medicubeserum.jpg",
    description:
  "A lightweight, hydrating serum formulated with PDRN and skin-supporting peptides to help improve the appearance of firmness, elasticity, and uneven texture while leaving the complexion looking plump, smooth, and radiant.",

benefits: [
  "Helps improve the appearance of skin firmness and elasticity",
  "Provides lightweight, long-lasting hydration",
  "Helps support a smoother and more supple-looking complexion",
  "Enhances the appearance of dull, tired-looking skin",
],

ingredients:
  "PDRN (Sodium DNA), Niacinamide, Peptides, Glycerin, Hyaluronic Acid, Panthenol, Adenosine, and skin-conditioning ingredients.",

howToUse:
  "After cleansing and toning, apply an appropriate amount evenly over the face and neck. Gently pat or massage into the skin until fully absorbed. Follow with moisturiser. Use morning and evening, and apply sunscreen as the final step of your morning routine."  },
  {
    id: "p21",
    slug: "radiant-skin-tint",
    brand: "Cosrx",
    name: "Radiant Skin Tint",
    category: "makeup",
    price: 2100,
    oldPrice: 2500,
    rating: 4.5,
    reviewsCount: 94,
    stock: 5,
    badges: ["SALE", "NEW", "LOW STOCK"],
    image: "/images/products/medicubewrapmask.jpg",
    description:
      "A sheer, glow-boosting skin tint that evens tone with a dewy finish for a barely-there, skin-first look.",
    benefits: ["Sheer, buildable glow", "Dewy, hydrated finish", "Lightweight, skincare-infused formula"],
    ingredients: "Aqua, Glycerin, Hyaluronic Acid, Mica, Iron Oxides.",
    howToUse: "Warm a small amount between fingertips and press into skin.",
  },
  {
    id: "p22",
    slug: "medicube-collagen-night-wrapping-mask",
    brand: "Medicube",
    name: "Medicube Collagen Night Wrapping Mask",
    category: "skincare",
    price: 1900,
    rating: 4.6,
    reviewsCount: 132,
    stock: 44,
    image: "/images/products/miellemasque.jpg",
    badges: [],
    description:
  "A nourishing overnight wrapping mask designed to provide intensive hydration while helping improve the appearance of firmness, elasticity, and skin texture. It forms a comfortable moisture-locking layer to leave skin looking plump, smooth, and refreshed by morning.",

benefits: [
  "Provides intensive overnight hydration",
  "Helps lock in moisture and reduce the appearance of dryness",
  "Supports a plumper, smoother-looking complexion",
  "Helps improve the appearance of skin firmness and elasticity",
],

ingredients:
  "Hydrolyzed Collagen, Glycerin, Hyaluronic Acid, Niacinamide, Adenosine, Peptides, Panthenol, and skin-conditioning ingredients.",

howToUse:
  "As the final step of your evening skincare routine, apply an even layer over the face, avoiding the eye and lip areas. Allow the mask to dry and form a comfortable film before going to bed. Leave on overnight and gently peel or rinse off in the morning according to the product instructions. Use 2–3 times per week or as needed."
 },

  // FRAGRANCE
  {
    id: "p23",
    slug: "mielle-rosemary-mint-strengthening-shampoo",
    brand: "Mielle",
    name: "Mielle Rosemary Mint Strengthening Shampoo",
    category: "haircare",
    price: 4500,
    rating: 4.9,
    reviewsCount: 188,
    stock: 26,
    image: "/images/products/mielleshampoo.jpg",
    badges: ["BEST SELLER"],
    description:
  "A refreshing strengthening shampoo formulated with rosemary and mint to gently cleanse the scalp and hair while helping remove buildup, excess oil, and impurities. It leaves hair feeling clean, refreshed, and nourished.",

benefits: [
  "Gently cleanses the scalp and removes buildup",
  "Helps strengthen and condition the feel of the hair",
  "Leaves the scalp feeling fresh and invigorated",
  "Helps maintain soft, manageable, and healthy-looking hair",
],

ingredients:
  "Water, Biotin, Rosemary Leaf Extract, Peppermint Oil, Coconut Oil, Babassu Oil, Honey, and other cleansing and conditioning ingredients.",

howToUse:
  "Wet hair thoroughly and apply a generous amount of shampoo to the scalp and hair. Gently massage into the scalp to create a rich lather, then rinse thoroughly. Follow with conditioner. Use regularly as part of your haircare routine."  },
  {
    id: "p24",
    slug: "the-ordinary-natural-moisturizing-factors-ha",
    brand: "The Ordinary",
    name: "The Ordinary Natural Moisturizing Factors + HA",
    category: "skincare",
    price: 1200,
    rating: 4.4,
    reviewsCount: 71,
    stock: 63,
    image: "/images/products/moisturizingfactor.jpg",
    badges: ["NEW"],
    description:
  "A lightweight yet nourishing daily moisturizer formulated with skin-identical moisturizing factors, amino acids, ceramides, and hyaluronic acid to replenish hydration and support a healthy-looking skin barrier while leaving skin soft and smooth.",

benefits: [
  "Provides immediate and lasting hydration",
  "Helps support and strengthen the skin's moisture barrier",
  "Helps reduce the appearance of dryness and rough texture",
  "Leaves skin feeling soft, smooth, and comfortably moisturised",
],

ingredients:
  "Amino Acids, Ceramides, Hyaluronic Acid, Glycerin, Phospholipids, Fatty Acids, Urea, Saccharide Isomerate, and other skin-identical moisturizing factors.",

howToUse:
  "Apply a small amount to clean, dry skin after serums and other water-based treatments. Gently massage into the face and neck until fully absorbed. Use morning and evening. During the day, follow with sunscreen."  },
  {
    id: "p25",
    slug: "the-ordinary-niacinamide-10-zinc-1",
    brand: "The Ordinary",
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    category: "skincare",
    price: 3200,
    oldPrice: 3800,
    rating: 4.6,
    reviewsCount: 99,
    stock: 31,
    badges: ["SALE"],
    image: "/images/products/niacinamidetheordinary.jpg",
    description:
  "A lightweight, water-based serum formulated with 10% niacinamide and 1% zinc PCA to help improve the appearance of blemishes, excess oil, enlarged pores, and uneven skin tone while supporting a smoother, clearer-looking complexion.",

benefits: [
  "Helps reduce the appearance of blemishes and skin congestion",
  "Helps control the look of excess oil",
  "Minimizes the appearance of enlarged pores",
  "Supports a smoother and more even-looking skin tone",
],

ingredients:
  "Aqua, Niacinamide (10%), Zinc PCA (1%), Tamarindus Indica Seed Gum, Pentylene Glycol, Dimethyl Isosorbide, and skin-conditioning ingredients.",

howToUse:
  "Apply a few drops to clean, dry skin after cleansing and toning, before moisturiser. Gently spread over the face and neck until absorbed. Use morning and evening. During the day, follow with sunscreen. Patch test before first use."  },

  // BEAUTY TOOLS
  {
    id: "p26",
    slug: "dr-rashel-brightening-anti-aging-vitamin-c-niacinamide-hyaluronic-serum",
    brand: "Dr.Rashel",
    name: "Dr. Rashel Brightening Anti-Aging Vitamin C + Niacinamide + Hyaluronic Serum",
    category: "skincare",
    price: 1500,
    rating: 4.7,
    reviewsCount: 143,
    stock: 47,
    image: "/images/products/rashel3in1.jpg",
    badges: ["BEST SELLER"],
    description:
  "A multi-action brightening and hydrating serum formulated with Vitamin C, Niacinamide, and Hyaluronic Acid to help improve the appearance of dullness, uneven skin tone, fine lines, and dehydration while leaving the complexion looking smoother, brighter, and more refreshed.",

benefits: [
  "Helps brighten the appearance of dull, tired-looking skin",
  "Helps improve the look of uneven skin tone and dark spots",
  "Provides lightweight hydration and helps maintain skin moisture",
  "Supports a smoother, firmer, and more youthful-looking complexion",
],

ingredients:
  "Vitamin C, Niacinamide, Hyaluronic Acid, Glycerin, Vitamin E, Panthenol, and skin-conditioning ingredients.",

howToUse:
  "After cleansing and toning, apply 2–3 drops evenly to the face and neck. Gently pat or massage into the skin until fully absorbed, then follow with moisturiser. Use morning and evening. During the day, finish with sunscreen. Patch test before first use."  },
  {
    id: "p27",
    slug: "dr-rashel-vitamin-c-face-cream-vc",
    brand: "Dr.Rashel",
    name: "Dr. Rashel Vitamin C Face Cream (VC)",
    category: "skincare",
    price: 1200,
    rating: 4.3,
    reviewsCount: 52,
    stock: 39,
    image: "/images/products/rashelfacecream.jpg",
    badges: ["NEW"],
    description:
  "A nourishing Vitamin C face cream designed to hydrate and brighten the appearance of the skin while helping improve the look of dullness, uneven tone, and tired-looking complexion for a smoother, more radiant finish.",

benefits: [
  "Helps brighten the appearance of dull skin",
  "Supports a more even-looking skin tone",
  "Provides daily moisture for soft, smooth-feeling skin",
  "Helps leave the complexion looking fresh and radiant",
],

ingredients:
  "Vitamin C, Glycerin, Vitamin E, Hyaluronic Acid, Niacinamide, Aloe Vera Extract, Panthenol, and skin-conditioning ingredients.",

howToUse:
  "Apply an appropriate amount to clean, dry skin after serum. Gently massage over the face and neck until fully absorbed. Use morning and evening. During the day, follow with sunscreen for additional protection."  },
  {
    id: "p28",
    slug: "dr-rashel-vitamin-c-vc-serum",
    brand: "Dr.Rashel",
    name: "Dr. Rashel Vitamin C (VC) Serum",
    category: "skincare",
    price: 2800,
    oldPrice: 3400,
    rating: 4.8,
    reviewsCount: 176,
    stock: 6,
    image: "/images/products/rashelserumvc.jpg",
    badges: ["SALE", "LOW STOCK"],
    description:
  "A lightweight Vitamin C facial serum formulated to brighten the appearance of dull skin, improve the look of uneven tone and dark spots, and support a smoother, more radiant-looking complexion.",

benefits: [
  "Helps brighten dull and tired-looking skin",
  "Helps improve the appearance of uneven skin tone and dark spots",
  "Supports a smoother and more radiant-looking complexion",
  "Provides lightweight hydration without a heavy finish",
],

ingredients:
  "Vitamin C, Niacinamide, Hyaluronic Acid, Glycerin, Vitamin E, Panthenol, and skin-conditioning ingredients.",

howToUse:
  "After cleansing and toning, apply 2–3 drops evenly to the face and neck. Gently pat or massage into the skin until absorbed, then follow with moisturiser. Use morning and evening. During the day, apply sunscreen as the final step. Patch test before first use."  },
  
];

const CATEGORY_IMAGES: Record<Product["category"], string> = {
  skincare: "/images/skincare1.jpg",
  bodycare: "/images/bodycare1.jpg",
  haircare: "/images/haircare1.jpg",
  wellness: "/images/wellness1.jpg",
  makeup: "/images/makeup1.jpg",
  fragrance: "/images/hero2.jpeg",
  "beauty-tools": "/images/hero1.jpeg",
};

export const PRODUCTS: Product[] = PRODUCT_CATALOG.map((product) => ({
  ...product,
  image: product.image || CATEGORY_IMAGES[product.category],
}));

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, count);
}

export function getBestSellers(count = 8): Product[] {
  return PRODUCTS.filter((p) => p.badges.includes("BEST SELLER")).slice(0, count);
}

export function getNewArrivals(count = 8): Product[] {
  return PRODUCTS.filter((p) => p.badges.includes("NEW")).slice(0, count);
}

export function getDeals(count = 8): Product[] {
  return PRODUCTS.filter((p) => p.badges.includes("SALE")).slice(0, count);
}

export const REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Wanjiru K.",
    rating: 5,
    text: "The Vitamin C serum genuinely changed my skin in three weeks. Ordering on WhatsApp was so easy — I had it delivered to Kilimani the next day.",
    verified: true,
  },
  {
    id: "r2",
    name: "Amina H.",
    rating: 5,
    text: "The Castor & Biotin oil is a repurchase for life. My edges have never been thicker. Customer service on WhatsApp answered every question I had.",
    verified: true,
  },
  {
    id: "r3",
    name: "Brenda A.",
    rating: 4,
    text: "Love the Shea & Cocoa body butter, smells incredible and lasts all day. Delivery to Mombasa took two days but was well packaged.",
    verified: true,
  },
  {
    id: "r4",
    name: "Faith N.",
    rating: 5,
    text: "The Amber & Oud perfume gets me compliments every single time. Packaging feels genuinely premium for the price.",
    verified: true,
  },
  {
    id: "r5",
    name: "Grace M.",
    rating: 5,
    text: "Foundation matched my shade perfectly and the WhatsApp team helped me pick it before I even ordered. Will be shopping here again.",
    verified: true,
  },
  {
    id: "r6",
    name: "Njeri W.",
    rating: 4,
    text: "Fast, easy checkout straight through WhatsApp. No confusing forms — just sent my order and confirmed delivery in minutes.",
    verified: true,
  },
];
