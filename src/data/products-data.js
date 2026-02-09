export const collectionsData = [
  {
    title: "Medical & Pharmaceutical Solutions",
    description:
      "Products developed to meet healthcare and pharmaceutical standards.",
    subcategories: [
      {
        title: "PharmaPack Products",
        products: [
          {
            id: 1,
            slug: "purified-water",
            name: "Purified Water",
            category: "medical",
            indexImage: "purified-water.jpg",
            keySpecifications: [
              { spec: "Volume", value: "50ml, 200ml" },
              { spec: "Purity", value: "99.9%" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Safe Hydration",
              "Purified water is water that has been treated through advanced deionization processes, such as Reverse Osmosis, to remove ions, salts, and unwanted elements.",
              "Convenient packaging",
            ],
            pharmapack: {
              image: "pharmapack-purified-water.jpg",
              uniqueFeatures: [
                "Processed for medical use",
                "Ideal for antibiotic dissolution",
                "Safe for baby formulations",
              ],
            },
          },
          {
            id: 2,
            slug: "paraffin-gauze-dressings",
            name: "Paraffin Gauze Dressings",
            category: "medical",
            indexImage: "paraffin-gauze-dressings.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "10 dressings per pack" },
              { spec: "Size", value: "10x10 cm, 10x20 cm, 10x30 cm" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Soothing Protection",
              "Paraffin gauze dressing is a sterile, non-adherent wound dressing impregnated with soft paraffin. It is designed to protect wounds while maintaining a moist healing environment and minimizing trauma during dressing changes.",
              "Promotes healing",
            ],
            pharmapack: {
              image: "pharmapack-paraffin-gauze-dressings.jpg",
              uniqueFeatures: [
                "Soothes burns and wounds",
                "Maintains moist wound environment",
                "Easy to apply and remove",
              ],
            },
          },
          {
            id: 3,
            slug: "isotonic-hypertonic-nasal-sprays",
            name: "Isotonic & Hypertonic Nasal Sprays",
            category: "medical",
            indexImage: "isotonic-hypertonic-nasal-sprays.jpg",
            keySpecifications: [
              { spec: "Active Ingredient", value: "Sodium Chloride 0.9%" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Relieves congestion",
              "Isotonic & Hypertonic nasal sprays are a natural nasal hygiene solution made from purified sea water. It is designed to gently cleanse, moisturize, and protect the nasal passages, supporting healthy breathing for both adults and children.",
              "Multi-purpose use",
            ],
          },
          {
            id: 4,
            slug: "lubricant-gels-medical",
            name: "Lubricant Gels (Medical Use)",
            category: "medical",
            indexImage: "lubricant-gels-medical.jpg",
            keySpecifications: [
              { spec: "Volume", value: "100ml" },
              { spec: "Material", value: "Water-based gel" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Non-irritating",
              "Medical lubricant gel is a water-based lubricant designed to facilitate medical and diagnostic procedures while minimizing patient discomfort. It is widely used in hospitals, clinics, and healthcare facilities.",
              "Easy application",
            ],
          },
          {
            id: 5,
            slug: "povidone-iodine-wipes",
            name: "Povidone Iodine Wipes",
            category: "medical",
            indexImage: "povidone-iodine-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "100 wipes per pack" },
              { spec: "Active Ingredient", value: "Povidone-Iodine 10%" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Antiseptic action",
              "Povidone-iodine wipes are ready-to-use antiseptic wipes impregnated with povidone-iodine, a broad-spectrum antimicrobial agent. They are designed for effective skin disinfection and infection prevention in medical and first-aid settings.",
              "Portable packaging",
            ],
            pharmapack: {
              image: "pharmapack-povidone-iodine-wipes.jpg",
              uniqueFeatures: [
                "Broad-spectrum disinfection",
                "Non-staining formula",
                "Gentle on skin",
              ],
            },
          },
          {
            id: 6,
            slug: "alcohol-swabs",
            name: "Alcohol Swabs",
            category: "medical",
            indexImage: "alcohol-swabs.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "200 swabs per box" },
              { spec: "Alcohol Content", value: "70% isopropyl" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Disinfection prior to injections",
              "Alcohol swabs are single-use antiseptic pads impregnated with isopropyl alcohol. They are designed for rapid and effective skin disinfection prior to medical procedures and injections.",
              "Compact size",
            ],
          },
          {
            id: 7,
            slug: "face-masks",
            name: "Face Masks",
            category: "medical",
            indexImage: "face-masks.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "50 masks per box" },
              { spec: "Material", value: "Non-woven fabric" },
              { spec: "Shelf Life", value: "2 years" },
            ],
            features: [
              "3-layer protection",
              "The 3-layer protective face mask is designed to provide effective barrier protection while ensuring comfort and breathability. It is suitable for daily use in medical, professional, and public environments.",
              "Comfortable fit",
            ],
            pharmapack: {
              image: "pharmapack-face-masks.jpg",
              uniqueFeatures: [
                "High filtration efficiency",
                "Adjustable nose clip",
                "Latex-free ear loops",
              ],
            },
          },
          {
            id: 8,
            slug: "massage-cream",
            name: "Massage Cream",
            category: "medical",
            indexImage: "massage-cream.jpg",
            keySpecifications: [
              { spec: "Volume", value: "100ml" },
              { spec: "Shelf Life", value: "2 years" },
            ],
            features: [
              "Used for cases with muscular stiffness, sprains and bruises",
              "Just Massage Cream is a combination of natural extracts and oils, which have a counter irritant and rubefacient effect, while menthol causes dilatation of the blood vessels followed by a cold sensation causing an analgesic effect.",
              "Suitable for all skin types",
              "Contains natural extracts that have both analgesic and rubefacient effects",
            ],
            pharmapack: {
              image: "pharmapack-massage-cream.jpg",
              uniqueFeatures: [
                "Dermatologically tested for medical and therapeutic use",
                "Ideal for physiotherapy and muscle relaxation treatments",
                "Safe for sensitive skin",
              ],
            },
          },
        ],
      },
    ],
  },
  {
    title: "Hydrogel Patches",
    description: "Therapeutic patches designed for pain relief and fever management.",
    subcategories: [
      {
        title: "PharmaPack Products",
        products: [
          {
            id: 10,
            slug: "fever-cooling-patches",
            name: "Fever Cooling Patches",
            category: "therapeutic",
            indexImage: "fever-cooling-patches.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "4 patches per pack" },
              { spec: "Active Ingredient", value: "Menthol" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Long-lasting cooling",
              "Cooling gel patches are macromolecule hydrogel patches containing menthol, designed to provide temporary relief from fever and heat discomfort. They offer a gentle, non-medicated cooling effect suitable for both children and adults.",
              "Comfortable fit",
            ],
            pharmapack: {
              image: "pharmapack-fever-cooling-patches.jpg",
              uniqueFeatures: [
                "Instant fever relief",
                "No refrigeration needed",
                "Non-medicated formula",
              ],
            },
            privateLabeling: [
              {
                clientName: "Temp",
                image: "privatelabeling-fever-cooling-patches-Temp-1.jpg",
                uniqueFeatures: [
                  "Custom packaging design",
                  "Branded cooling gel",
                  "Tailored patch sizes",
                ],
              },
              {
                clientName: "Qualita",
                image: [
                  "privatelabeling-fever-cooling-patches-Qualita-1.jpg",
                  "privatelabeling-fever-cooling-patches-Qualita-2.jpg",
                ],
                uniqueFeatures: [
                  "Child-friendly designs",
                  "Extended cooling duration",
                  "Made with hypoallergenic materials",
                ],
              },
            ],
          },
          {
            id: 11,
            slug: "cold-pain-relieving-patches",
            name: "Cold Pain-Relieving Patches",
            category: "therapeutic",
            indexImage: "cold-pain-relieving-patches.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "5 patches per pack" },
              { spec: "Active Ingredient", value: "Menthol 7%" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Targeted pain relief",
              "Cold pain-relieving patches are menthol-infused hydrogel patches designed to provide temporary relief from muscle and joint pain through a cooling effect. They help reduce discomfort, swelling, and soreness.",
              "Flexible material",
            ],
            pharmapack: {
              image: "pharmapack-cold-pain-relieving-patches.jpg",
              uniqueFeatures: [
                "Soothes muscle aches",
                "No sticky residue",
                "Up to 8 hours of relief",
              ],
            },
            privateLabeling: [
              {
                clientName: "Sulfax",
                image:
                  "privatelabeling-cold-pain-relieving-patches-Sulfax-1.jpg",
                uniqueFeatures: [
                  "Custom menthol strength",
                  "Branded packaging",
                  "Enhanced adhesive",
                ],
              },
            ],
          },
          {
            id: 12,
            slug: "hot-cold-pain-relieving-patches",
            name: "Hot & Cold Pain-Relieving Patches",
            category: "therapeutic",
            indexImage: "hot-cold-pain-relieving-patches.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "4 patches per pack" },
              { spec: "Active Ingredient", value: "Capsicum and Menthol" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Dual-action relief",
              "Hot & cold pain-relieving patches combine hydrogel technology with active cooling and warming agents to provide dual-action relief for muscle and joint discomfort.",
              "Non-medicated",
            ],
            pharmapack: {
              image: "pharmapack-hot-cold-pain-relieving-patches.jpg",
              uniqueFeatures: [
                "No sticky residue",
                "Lasts up to 8 hours",
                "Made from natural extracts",
              ],
            },
            privateLabeling: [
              {
                clientName: "Sulfax",
                image:
                  "privatelabeling-hot-cold-pain-relieving-patches-Sulfax-1.jpg",
                uniqueFeatures: [
                  "Dual Action (Cool and hot)",
                  "Convenient and easy to use",
                  "Lasts up to 8 hours",
                ],
              },
            ],
          },
          {
            id: 13,
            slug: "period-pain-relieving-patches",
            name: "Period Pain-Relieving Patches",
            category: "therapeutic",
            indexImage: "period-pain-relieving-patches.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "3 patches per pack" },
              {
                spec: "Active Ingredient",
                value: "Menthol, Camphor, Wintergreen Oil",
              },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Targeted relief",
              "Period pain relief patches are hydrogel patches designed to provide targeted, temporary relief from menstrual cramps and discomfort. They combine soothing warmth and gentle hydrogel technology to enhance comfort during menstruation.",
              "Non-irritating",
            ],
            pharmapack: {
              image: "pharmapack-period-pain-relieving-patches.jpg",
              uniqueFeatures: [
                "Natural herbal formula",
                "Long-lasting comfort",
                "Discreet application",
              ],
            },
            privateLabeling: [
              {
                clientName: "Sekoun",
                image:
                  "privatelabeling-period-pain-relieving-patches-Sekoun-1.jpg",
                uniqueFeatures: [
                  "Custom herbal blend",
                  "Branded discreet packaging",
                  "Enhanced adhesive formula",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Personal Care & Cosmetics",
    description: "Products for daily skincare, hygiene, and grooming routines.",
    subcategories: [
      {
        title: "PharmaPack Products",
        products: [
          {
            id: 15,
            slug: "baby-wipes",
            name: "Baby Wipes",
            category: "personal-care",
            indexImage: "baby-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "As requested per pack" },
              { spec: "Material", value: "Non-woven fabric" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Microbiologically and dermatologically tested",
              "Baby wipes are soft and gentle cleansing cloths specially designed to care for a baby’s delicate skin. They are formulated to be hypoallergenic and alcohol-free, ensuring that even the most sensitive skin is protected from irritation and discomfort.",
              "Alcohol, paraben, and sulfate free",
            ],
            pharmapack: {
              image: "pharmapack-baby-wipes.jpg",
              uniqueFeatures: [
                "Enriched with zinc oxide, aloe vera, and vitamin E",
                "Prolonged moisturizing for your baby's skin",
                "Soft and thick texture",
              ],
            },
            uniqueFeatures: [
              "Custom scent options",
              "Thicker wipe design",
              "Branded retail packaging",
            ],
            privateLabeling: [
              {
                clientName: "Bebe",
                image: ["privatelabeling-baby-wipes-bebe-1.jpg"],
                uniqueFeatures: [],
              },
              {
                clientName: "Wipe it",
                image: "privatelabeling-baby-wipes-wipe-it-1.jpg",
                uniqueFeatures: [],
              },
              {
                clientName: "Qualita",
                image: ["privatelabeling-baby-wipes-qualita-1.jpg"],
                uniqueFeatures: [],
              },
            ],
          },

          {
            id: 16,
            slug: "baby-water-wipes",
            name: "Baby Water Wipes",
            category: "personal-care",
            indexImage: "baby-water-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "As requested per pack" },
              { spec: "Material", value: "Non-woven fabric" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "99% purified water",
              "Baby water wipes are infused with over 99% purified water, making them ideal for newborns and children with extremely sensitive skin. The ultra-pure water-based formula removes dirt and impurities without introducing harmful chemicals or irritants, helping to preserve the natural balance of the skin while minimizing the risk of redness or allergic reactions.",
              "Fragrance-free",
            ],
            pharmapack: {
              image: "pharmapack-baby-water-wipes.jpg",
              uniqueFeatures: [
                "Just 2 ingredients",
                "Safe for newborns",
                "Contains grapefruit seed extract, acting as a natural skin conditioner",
              ],
            },
            privateLabeling: [
              {
                clientName: "Super Kids",
                image: "privatelabeling-baby-water-wipes-super-kids-1.jpg",
                uniqueFeatures: ["Hypoallergenic formula"],
              },
              {
                clientName: "Wipe IT",
                image: "privatelabeling-baby-water-wipes-wipe-it.jpg",
                uniqueFeatures: ["99.9% Purified water"],
              },
              {
                clientName: "Water Wipes",
                image: "privatelabeling-baby-water-wipes-water-wipes.jpg",
                uniqueFeatures: ["Cleansing and moisturizing formula"],
              },
              {
                clientName: "Penduline",
                image: [
                  "privatelabeling-baby-water-wipes-Penduline-1.jpg",
                  "privatelabeling-baby-water-wipes-Penduline-2.jpg",
                ],
                uniqueFeatures: ["Suitable for sensitive skin"],
              },
              {
                clientName: "Qualita",
                image: "privatelabeling-baby-water-wipes-Qualita-1.jpg",
                uniqueFeatures: ["Skin conditioning"],
              },
            ],
          },
          {
            id: 17,
            slug: "makeup-remover-wipes",
            name: "Makeup Remover Wipes",
            category: "personal-care",
            indexImage: "makeup-remover-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "As requested per pack" },
              { spec: "Material", value: "Biodegradable fabric" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Micellar water infused",
              "Makeup remover wipes are designed to provide a fast, convenient, and effective solution for removing all traces of makeup and impurities from the skin. These wipes gently dissolve makeup while hydrating and soothing the skin, leaving it clean and refreshed.",
              "Hydrates skin",
            ],
            pharmapack: {
              image: "pharmapack-makeup-remover-wipes.jpg",
              uniqueFeatures: [
                "Removes waterproof makeup",
                "Enriched with aloe vera",
                "Suitable for all skin types",
              ],
            },
            privateLabeling: [
              {
                clientName: "Starville",
                image: [
                  "privatelabeling-makeup-remover-wipes-Starville-1.jpg",
                  "privatelabeling-makeup-remover-wipes-Starville-2.jpg",
                ],
                uniqueFeatures: [
                  "Custom micellar water formula",
                  "Suitable for all skin types",
                  "Enhanced hydration",
                ],
              },
              {
                clientName: "WipeIt",
                image: "privatelabeling-makeup-remover-wipes-Wipeit-1.jpg",
                uniqueFeatures: [
                  "Non-greasy formula",
                  "Fragrance free",
                  "Removes water proof makeup",
                ],
              },
              {
                clientName: "Eva",
                image: [
                  "privatelabeling-makeup-remover-wipes-Eva-1.jpg",
                  "privatelabeling-makeup-remover-wipes-Eva-2.jpg",
                  "privatelabeling-makeup-remover-wipes-Eva-3.jpg",
                ],
                uniqueFeatures: [
                  "Custom scent options",
                  "Premium softness",
                  "Hypoallergenic formula",
                ],
              },
            ],
          },
          {
            id: 18,
            slug: "mosquito-repellent-wipes",
            name: "Mosquito Repellent Wipes",
            category: "personal-care",
            indexImage: "mosquito-repellent-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "As requested per pack" },
              { spec: "Active Ingredient", value: "DEET FREE" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Long-lasting protection",
              "Mosquito repellent wipes are convenient, pre-moistened wipes formulated to help protect the skin from mosquito bites and other insect disturbances.",
              "Soft on skin, tough on bugs",
            ],
            pharmapack: {
              image: "pharmapack-mosquito-repellent-wipes.jpg",
              uniqueFeatures: [
                "Safe for children use",
                "Deet free",
                "Easy and quick to use",
              ],
            },
            privateLabeling: [
              {
                clientName: "WipeIt",
                image: "privatelabeling-mosquito-repellent-wipes-Wipeit-1.jpg",
                uniqueFeatures: [
                  "Deet free wipes",
                  "Lasts up to 5 hours",
                  "Lemon grass scent",
                ],
              },
            ],
          },
          {
            id: 19,
            slug: "nail-polish-remover-wipes",
            name: "Nail Polish Remover Wipes",
            category: "personal-care",
            indexImage: "nail-polish-remover-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "As requested per pack" },
              { spec: "Material", value: "Non-woven fabric" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Acetone-free",
              "Nail polish remover wipes offer a practical and portable solution for removing nail polish quickly and efficiently, without the need for additional liquids or tools.",
              "Moisturizing formula",
              "Easy to use",
            ],
            pharmapack: {
              image: "pharmapack-nail-polish-remover-wipes.jpg",
              uniqueFeatures: [
                "Removes up to 5 fingers",
                "Enriched with vitamin E and olive oil",
                "Doesn't cause dehydration to the skin",
              ],
            },
            privateLabeling: [
              {
                clientName: "Ciliver",
                image:
                  "privatelabeling-nail-polish-remover-wipes-Ciliver-1.jpg",
                uniqueFeatures: [
                  "Rich in natural extracts",
                  "Acetone-free",
                  "Alcohol free",
                ],
              },
            ],
          },
          {
            id: 20,
            slug: "alcohol-wipes",
            name: "Alcohol Wipes",
            category: "personal-care",
            indexImage: "alcohol-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "50 wipes per pack" },
              { spec: "Alcohol Content", value: "70% Isopropyl Alcohol" },
              { spec: "Shelf Life", value: "2 years" },
            ],
            features: [
              "Kills 99.99% of germs",
              "Alcohol wipes are pre-moistened wipes containing isopropyl alcohol, specially formulated for rapid and effective skin disinfection.",
              "Portable size",
            ],
            pharmapack: {
              image: "pharmapack-alcohol-wipes.jpg",
              uniqueFeatures: [
                "Dermatologically Tested",
                "Quick and Easy Application",
                "Effective and fast acting formula",
              ],
            },
            privateLabeling: [
              {
                clientName: "Egypt Air",
                image: "privatelabeling-alcohol-wipes.jpg",
                uniqueFeatures: [
                  "Kills 99.99% of germs",
                  "Has both antimicrobial and antiseptic properties",
                  "Portable size",
                ],
              },
            ],
          },
          {
            id: 21,
            slug: "antiseptic-wipes",
            name: "Antiseptic Wipes",
            category: "personal-care",
            indexImage: "antiseptic-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "50 wipes per pack" },
              {
                spec: "Active Ingredient",
                value: "p-Chloro-m-xylenol",
              },
              { spec: "Shelf Life", value: "2 years" },
            ],
            features: [
              "Alcohol-free",
              "Antiseptic wipes are ready-to-use cleansing wipes containing broad-spectrum antiseptic agents designed to reduce microbial contamination and prevent infection.",
              "Gentle on skin",
              "Soft germicidal wipes",
            ],
            pharmapack: {
              image: "pharmapack-antiseptic-wipes.jpg",
              uniqueFeatures: [
                "Microbiologically and dermatologically tested",
                "Suitable for skin and surfaces",
                "Quick action on germs",
              ],
            },
            privateLabeling: [
              {
                clientName: "Clorox",
                image: [
                  "privatelabeling-antiseptic-wipes-Clorox-1.jpg",
                  "privatelabeling-antiseptic-wipes-Clorox-2.jpg",
                ],
                uniqueFeatures: [
                  "Custom antimicrobial formula",
                  "Branded resealable packaging",
                  "Enhanced skin gentleness",
                ],
              },
              {
                clientName: "Qualita",
                image: [
                  "privatelabeling-antiseptic-wipes-Qualita-1.jpg",
                  "privatelabeling-antiseptic-wipes-Qualita-2.jpg",
                  "privatelabeling-antiseptic-wipes-Qualita-3.jpg",
                ],
                uniqueFeatures: [
                  "Eco-friendly materials",
                  "Premium quality assurance",
                  "Fast production turnaround",
                ],
              },
            ],
          },
          {
            id: 22,
            slug: "hand-and-body-wipes",
            name: "Hand and Body Wipes",
            category: "personal-care",
            indexImage: "hand-and-body-wipes.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "80 wipes per pack" },
              { spec: "Material", value: "Non-woven fabric" },
              { spec: "Shelf Life", value: "2 years" },
            ],
            features: [
              "Cleansing, refreshing and moisturizing formula",
              "Hand and body wipes are soft, moist wipes designed to cleanse, refresh, and hydrate the skin without the need for water. They are suitable for use at home, on-the-go, or during travel, providing an effective solution for maintaining personal hygiene in any situation.",
              "Multi-purpose use",
            ],
            pharmapack: {
              image: "pharmapack-hand-and-body-wipes.jpg",
              uniqueFeatures: [
                "Infused with aloe vera and Vitamin E",
                "Gentle for all skin types",
                "Travel-friendly pack",
              ],
            },
            privateLabeling: [
              {
                clientName: "Bemart",
                image: "privatelabeling-hand-and-body-wipes-Bemart-1.jpg",
                uniqueFeatures: [
                  "Custom tea tree oil infusion",
                  "Branded travel packaging",
                  "Enhanced cleansing and soothing formula",
                ],
              },
              {
                clientName: "Qualita",
                image: [
                  "privatelabeling-hand-and-body-wipes-Qualita-1.jpg",
                  "privatelabeling-hand-and-body-wipes-Qualita-2.jpg",
                ],
                uniqueFeatures: [
                  "Soft antiseptic wipes",
                  "Premium quality assurance",
                  "Fast production turnaround",
                ],
              },
              {
                clientName: "Eva",
                image: "privatelabeling-hand-and-body-wipes-Eva-1.jpg",
                uniqueFeatures: [
                  "Custom wipe size",
                  "Branded retail packaging",
                  "Enhanced skin hydration",
                ],
              },
            ],
          },
          {
            id: 23,
            slug: "face-sheet-masks",
            name: "Face Sheet Masks",
            category: "personal-care",
            indexImage: "face-sheet-masks.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "As requested" },
              { spec: "Material", value: "Non-woven fabric" },
              { spec: "Shelf Life", value: "2 years" },
            ],
            features: [
              "Hydrating formula",
              "Face sheet masks are single-use, soft cloth masks infused with nourishing ingredients such as vitamins, antioxidants, and hydrating agents, designed to rejuvenate and revitalize the skin.",
              "Fits all face shapes",
              "Single-use masks",
            ],
            pharmapack: {
              image: "pharmapack-face-sheet-masks.jpg",
              uniqueFeatures: [
                "Infused with hyaluronic acid",
                "Promotes radiant skin",
                "Resealable pack containing 3 sheet masks",
              ],
            },
            privateLabeling: [
              {
                clientName: "MotherNaked",
                image: [
                  "privatelabeling-face-sheet-masks-MotherNaked-1.jpg",
                  "privatelabeling-face-sheet-masks-MotherNaked-2.jpg",
                  "privatelabeling-face-sheet-masks-MotherNaked-3.jpg",
                  "privatelabeling-face-sheet-masks-MotherNaked-4.jpg",
                  "privatelabeling-face-sheet-masks-MotherNaked-5.jpg",
                  "privatelabeling-face-sheet-masks-MotherNaked-6.jpg",
                ],
                uniqueFeatures: [
                  "Enhanced skin glow",
                  "Nourishing formula",
                  "Dermatollogically tested",
                ],
              },
              {
                clientName: "Like",
                image: "privatelabeling-face-sheet-masks-Like-1.jpg",
                uniqueFeatures: [
                  "Hydrating formula",
                  "Premium quality assurance",
                  "Fast production turnaround",
                ],
              },
            ],
          },
          {
            id: 24,
            slug: "under-eye-patches",
            name: "Under-Eye Patches",
            category: "personal-care",
            indexImage: "under-eye-patches.jpg",
            keySpecifications: [
              { spec: "Quantity", value: "As requested" },
              { spec: "Material", value: "Hydrogel" },
              { spec: "Shelf Life", value: "2 years" },
            ],
            features: [
              "Reduces puffiness and dark circles",
              "Under eye patches are soft, hydrating patches infused with ingredients such as hyaluronic acid, collagen, or plant extracts, created to reduce puffiness, dark circles, and signs of fatigue around the delicate under-eye area.",
              "Easy to apply",
            ],
            pharmapack: {
              image: "pharmapack-under-eye-patches.jpg",
              uniqueFeatures: [
                "Collagen-infused formula",
                "Targets dark circles",
                "Non-slip design",
              ],
            },
            privateLabeling: [
              {
                clientName: "MotherNaked",
                image: [
                  "privatelabeling-under-eye-patches-MotherNaked-1.jpg",
                  "privatelabeling-under-eye-patches-MotherNaked-2.jpg",
                  "privatelabeling-under-eye-patches-MotherNaked-3.jpg",
                ],
                uniqueFeatures: [
                  "Custom depuffing and brightening formulas",
                  "Branded packaging",
                  "Enhanced anti-puffiness",
                ],
              },
            ],
          },
          {
            id: 25,
            slug: "hand-sanitizers",
            name: "Hand Sanitizers",
            category: "personal-care",
            indexImage: "hand-sanitizers.jpg",
            keySpecifications: [
              { spec: "Volume", value: "100ml" },
              { spec: "Alcohol Content", value: "70% ethyl alcohol" },
              { spec: "Shelf Life", value: "2 years" },
            ],
            features: ["Kills 99.9% of germs", "Non-sticky", "Travel-friendly"],
          },
          {
            id: 26,
            slug: "lubricant-gel",
            name: "Lubricant Gel",
            category: "personal-care",
            indexImage: "lubricant-gel.jpg",
            keySpecifications: [
              { spec: "Volume", value: "100ml" },
              { spec: "Material", value: "Water-based gel" },
              { spec: "Shelf Life", value: "3 years" },
            ],
            features: [
              "Non-irritating",
              "Personal lubricant gel is a water-based, skin-friendly lubricant designed to provide smooth lubrication and enhanced comfort during everyday personal use. It is suitable for intimate and general skin applications.",
              "Easy to apply",
            ],
          },
        ],
      },
    ],
  },
];
