const products = [
  {
    id: 1,
    name: "Floral Press-On Nails",
    description: "Soft pink nails adorned with delicate floral patterns—feminine, fresh, and perfect for a charming, everyday look.",
    price: "Rs. 1,200",
    mainImage: "images/il_1588xN.7082335462_4tg4.avif"
    
  },

  {
    id: 2,
    name: "Light Pink Press-On Nails",
    description: "Elegant floral designs inspired by nature, adding a soft and feminine touch to your nails.",
    price: "Rs. 1,750",
    mainImage: "images/il_1588xN.6161721031_auyk.avif"
  },

  {
    id: 3,
    name: "Bow Design Press-On Nails",
    description: "Nail bow designs add a cute and elegant touch with delicate bow accents for a stylish, feminine look.",
    price: "Rs. 1,850",
    mainImage: "images/il_1588xN.6340135095_1mv4.avif"
  },

  {
    id: 4,
    name: "Floral Lace Press-On Nails",
    description: "Floral lace nail designs combine delicate floral patterns with lace-inspired details for a soft, elegant, and timeless look.",
    price: "Rs. 1,850",
    mainImage: "images/il_1588xN.6235732008_syh8.avif"
  },

  {
    id: 5,
    name: "Glossy Floral Press-On Nails",
    description: "Glossy floral nail designs feature a smooth, shiny finish with delicate floral details for an elegant and fresh look.",
    price: "Rs. 1,850",
    mainImage: "images/0f2dcd0c8f101f2b77bcb998a9a5ff88.jpg"
  },

  {
    id: 6,
    name: "Pink Floral Press-On Nails",
    description: "Pink floral nail designs showcase soft, feminine tones with delicate flower patterns for a graceful and charming look.",
    price: "Rs. 1,850",
    mainImage: "images/7b8fda406b6114e6b613cf8390ce5802.jpg"
  },

  {
    id: 7,
    name: "3D Floral Press-On Nails",
    description: "3D floral nail designs with bow accents combine delicate flowers and cute bows for an elegant yet charming look.",
    price: "Rs. 1,850",
    mainImage: "images/c4dfd3d9dd63daff0faf95fb730b3341.jpg"
  },

  {
    id: 8,
    name: "Baby Pink Press-On Nails",
    description: "Baby pink floral nail designs feature soft pastel tones with delicate floral details for a sweet, elegant, and feminine look.",
    price: "Rs. 1,850",
    mainImage: "images/7dbdcadc71c644684398ea9746c9965e.jpg"
  },

  {
    id: 9,
    name: " Pink Floral Press-On Nails",
    description: "Pink floral nail designs highlight vibrant pink tones with graceful floral patterns for a fresh and elegant look.",
    price: "Rs. 1,850",
    mainImage: "images/d1104ed43acd396cd7be350365ffd1f0.jpg"
  },

  {
    id: 10,
    name: "Multi-Star Press-On Nails",
    description: "Multi-star nail designs for kids feature colorful star patterns that create a fun, playful, and cheerful look..",
    price: "Rs. 1,150",
    mainImage: "images/bc9109e13f77e3ba3789d981173c1a13.jpg"
  },

  {
    id: 11,
    name: "Snoopy Dog Press-On Nails",
    description: "Snoopy dog nail designs feature cute, cartoon-inspired details that create a fun, playful, and charming look.",
    price: "Rs. 800",
    mainImage: "images/085ba7d21491c9cbbbe722c2a8b35968.jpg"
  },

  {
    id: 12,
    name: "Multi Color Press-On Nails",
    description: "Multi-color nail designs feature a vibrant mix of shades, creating a fun, bold, and eye-catching look.",
    price: "Rs. 650",
    mainImage: "images/ee5dd65acd6fd8ec487fd455522bab4e.jpg"
  },

  {
    id: 13,
    name: "Multi Bow Press-On Nails",
    description: "Multi-bow nail designs feature several delicate bow accents, adding a playful, cute, and stylish touch to your nails.",
    price: "Rs. 1,850",
    mainImage: "images/0d3e11821b5d66bada90f7fdeb885af9.jpg"
  },

  {
    id: 14,
    name: "Rabit Design Press-On Nails",
    description: "Cute rabbit nail designs feature adorable bunny-inspired details, creating a playful and charming look.",
    price: "Rs. 1,100",
    mainImage: "images/96327280549bbf35ae9e934021c5cda4.jpg"
  },

  {
    id: 15,
    name: "Multi Design Press-On Nails",
    description: "Multi-design nails combine various patterns, colors, and textures for a fun, creative, and unique look.",
    price: "Rs. 1,850",
    mainImage: "images/ae7e5ded1569793110ad691e1b147c31.jpg"
  },

  {
    id: 16,
    name: "Purple Flower Press-On Nails",
    description: "Cute kid-friendly nails with soft purple flowers, tiny yellow centers, and playful sparkle accents.",
    price: "Rs. 1,850",
    mainImage: "images/7e5afe336ceff25591e146b4c2200c9f.jpg"
  },

  {
    id: 17,
    name: "Cat Design Press-On Nails",
    description: "Adorable nails featuring playful kitty faces with sparkling glitter accents for a fun, whimsical look.",
    price: "Rs. 1,850",
    mainImage: "images/651608e14821362762a2860eb2ba1801.jpg"
  },

  {
    id: 18,
    name: "Pink Glitter Press-On Nails",
    description: "Sparkly pink nails covered in shimmering glitter for a fun and playful look.",
    price: "Rs. 1,850",
    mainImage: "images/1fad192c8fa0f7a87d53bd8ea577d61d.jpg"
  },

  {
    id: 19,
    name: "Nude Floral Press-On Nails",
    description: "Elegant nude nails adorned with delicate floral designs for a soft, charming look.",
    price: "Rs. 1,850",
    mainImage: "images/5c5c430e6ad95e59fc11c39bed96a720.jpg"
  },

  {
    id: 20,
    name: "Classic Red Press-On Nails",
    description: "Classic red nails with a glossy finish for a timeless, bold style.",
    price: "Rs. 1,850",
    mainImage: "images/9e98d09d92b3028887b4ca59ebd83363.jpg"
  },

  {
    id: 21,
    name: "Pink Ombre Press-On Nails",
    description: "“Smooth gradient nails blending colors seamlessly for a trendy, eye-catching effect.",
    price: "Rs. 1,850",
    mainImage: "images/4bc51eb948f0b7b2aadb47782d33162f.jpg"
  },

  {
    id: 22,
    name: "Light Pink Press-On Nails",
    description: "Sweet and soft light pink nails for a cute, delicate look.",
    price: "Rs. 1,850",
    mainImage: "images/d102829b360d4ea925b876a407239a10.jpg"
  },

  {
    id: 23,
    name: "Mocha Brown Press-On Nails",
    description: "Warm mocha brown nails for a cozy and chic style.",
    price: "Rs. 1,850",
    mainImage: "images/cute-glitter-brown-trendy-simple-nail-designs.webp"
  },

  {
    id: 24,
    name: "Glossy Press-On Nails",
    description: "Shiny, polished nails with a sleek and glossy finish for a clean, elegant look.",
    price: "Rs. 1,850",
    mainImage: "images/SimpleNail2-5396cf58cddd45c5a655f5869b5eae16.png"
  },

  {
    id: 25,
    name: "Minimal Floral Press-On Nails",
    description: "Simple nails with tiny, delicate floral accents for a subtle and charming style.",
    price: "Rs. 1,850",
    mainImage: "images/simple-nail-designs.jpg"
  },

  {
    id: 26,
    name: "Soft Nude With Glitter Press-On Nails",
    description: "Soft nude nails accented with sparkling glitter for a subtle yet dazzling look.",
    price: "Rs. 1,850",
    mainImage: "images/Simple_Nail_Design_1_1024x1024.webp"
  },

  {
    id: 27,
    name: "Classic Brown Press-On Nails",
    description: "Rich, classic brown nails for a warm and timeless style.",
    price: "Rs. 1,850",
    mainImage: "images/Simple_Nail_Design_5_1024x1024.webp"
  },

  {
    id: 28,
    name: "Glitter Pink Press-On Nails",
    description: "Glitter pink nail designs add a sparkling, playful, and feminine touch, perfect for a fun and glamorous look.",
    price: "Rs. 1,850",
    mainImage: "images/5d4bb5a6ce84c3a4e6d7e2fc41cdb383.jpg"
  },

  {
    id: 29,
    name: "3D Floral Press-On Nails",
    description: "3D floral nail designs feature intricate, raised floral patterns that add texture, depth, and a stunning, elegant dimension to your nails.",
    price: "Rs. 1,850",
    mainImage: "images/246f90ec43321aa0008a3c197766bf08.jpg"
  },

  {
    id: 30,
    name: "Autumn Nude Press-On Nails",
    description: "Autumn nude nail designs feature warm, earthy tones with subtle accents, creating a cozy and elegant seasonal look.",
    price: "Rs. 1,850",
    mainImage: "images/74ea425b4c5b122ce267c46d2f0b2085.jpg"
  },

  {
    id: 31,
    name: "Soft Nude Press-On Nails",
    description: "Soft nude nails offer a subtle, elegant, and versatile look, perfect for a natural and polished finish.",
    price: "Rs. 1,850",
    mainImage: "images/e4e8a993b91e5e668c43eea60604e2d1.jpg"
  },

  {
    id: 32,
    name: "Emerald Green Press-On Nails",
    description: "Emerald green nails showcase a rich, jewel-toned hue that exudes elegance, sophistication, and a striking, luxurious finish.",
    price: "Rs. 1,850",
    mainImage: "images/e646112c9dca6ab1d5a60a7ef15de5e8.jpg"
  },

  {
    id: 33,
    name: "Christmas Themed Press-On Nails",
    description: "Christmas-themed nails bring festive cheer with vibrant colors, seasonal patterns, and playful holiday-inspired designs.",
    price: "Rs. 1,850",
    mainImage: "images/3a05a3ca7faf1e304e69c6465df6e74a.jpg"
  },

  {
    id: 34,
    name: "Dark Garden Press-On Nails",
    description: "Dark Garden nails feature deep, mysterious tones with floral-inspired accents, creating an elegant and enchanting look.",
    price: "Rs. 1,850",
    mainImage: "images/78ade3b6a77c7d03990810b25c40af1e.jpg"
  },

  {
    id: 35,
    name: "Warm Brown Press-On Nails",
    description: "These warm brown press-on nails provide an easy, stylish, and long-lasting way to achieve a polished, elegant look.",
    price: "Rs. 1,850",
    mainImage: "images/8a31d45a0006ac7974c2d31d6b0c0852.jpg"
  },

  {
    id: 36,
    name: "Mocha Brown Press-On Nails",
    description: "Mocha brown nail designs combine rich, warm tones with elegant patterns to create a classy and sophisticated look.",
    price: "Rs. 1,850",
    mainImage: "images/7e24c2fc53e24966e58577fb18bb872f.jpg"
  },

  {
    id: 37,
    name: "3D Floral Press-On Nails",
    description: "3D floral nails feature intricate, raised designs that add texture and a stunning, elegant dimension.",
    price: "Rs. 1,850",
    mainImage: "images/d0add6832d1e54140793e14c740f30f2.jpg"
  },

  {
    id: 38,
    name: "Red & White Star Press-On Nails",
    description: "Red and white star nails create a bold, festive, and playful look.",
    price: "Rs. 1,850",
    mainImage: "images/5613c62326019d3cb10e3701b1c6c9af.jpg"
  },

  {
    id: 39,
    name: "Blue Jellyfish Press-On Nails",
    description: "Blue jellyfish nails showcase a mesmerizing underwater-inspired design with flowing, ethereal patterns.",
    price: "Rs. 1,850",
    mainImage: "images/3aa1052dde1c72638728da14689ffc82.jpg"
  },

  {
    id: 40,
    name: "Light Blue Press-On Nails",
    description: "“Light blue nails offer a soft, calming, and elegant look perfect for any occasion.",
    price: "Rs. 1,850",
    mainImage: "images/29d2917735d9a5138212c8c93d453a96.jpg"
  },

  {
    id: 41,
    name: "Cute Minion Press-On Nails",
    description: "Minion nails bring a fun, playful design inspired by the cheerful cartoon characters.",
    price: "Rs. 1,850",
    mainImage: "images/3c303f7941a16c85d4778888f25dfacf.jpg"
  },

  {
    id: 42,
    name: "Glossy Floral Press-On Nails",
    description: "Glossy floral nails feature a smooth shine with delicate, elegant floral details.",
    price: "Rs. 1,150",
    mainImage: "images/6f937484244effcfb7e64b2a8c9dbc67.jpg"
  },

  {
    id: 43,
    name: "Christmas Red Press-On Nails",
    description: "A festive Christmas nail design that adds elegance and seasonal charm.",
    price: "Rs. 1,250",
    mainImage: "images/5b6c900b9e375aa3b76a4e8b845dbb5a.jpg"
  },

  {
    id: 44,
    name: "Pearl Blue Press-On Nails",
    description: "Pearl blue nails offer a refined, elegant finish with a subtle luxurious shine.",
    price: "Rs. 1,550",
    mainImage: "images/43a904729d74c25ea0dd0bd490802332.jpg"
  },

  {
    id: 45,
    name: "Y2K Black Press-On Nails",
    description: "Playful and trendy Y2K nails inspired by early-2000s fashion, featuring bold colors, glossy finishes, and fun details. Perfect for a statement look that’s nostalgic, edgy, and full of personality.",
    price: "Rs. 1,650",
    mainImage: "images/a4332aab4e57400f6352a7fbdf57a890.jpg"
  },

  {
    id: 46,
    name: "Blue Black Silver Star Design Press-On Nails",
    description: "Bold blue and black nails accented with sparkling silver stars for a playful, cosmic look.",
    price: "Rs. 1,850",
    mainImage: "images/9d368ecc57283f15911144832ab52209.jpg"
  },

  {
    id: 47,
    name: "Black & White Geometric Press-On Nails",
    description: "Striking black and white geometric patterns for a modern, minimalist style.",
    price: "Rs. 1,400",
    mainImage: "images/09743d6945227278082bc076ea7014d1.jpg"
  },

  {
    id: 48,
    name: "Lavender Coloured Press-On Nails",
    description: "Soft lavender nails with crisp geometric shapes for a chic and trendy vibe.",
    price: "Rs. 1,600",
    mainImage: "images/23c9cf4bcfae8ec481d88703889add38.jpg"
  },

  {
    id: 49,
    name: "Black & Silver Chrome  Press-On Nails",
    description: "“Sleek black and white nails with a shiny chrome finish for a futuristic touch.",
    price: "Rs. 2,000",
    mainImage: "images/il_1588xN.7516454974_a087.webp"
  },

  {
    id: 50,
    name: "Abstract Art Press-On Nails",
    description: "Creative abstract designs in vibrant colors for a unique, artistic look.",
    price: "Rs. 1,200",
    mainImage: "images/1ef82e1e6a3b6c8f2e9e5ddbd927f350.jpg"
  },

  {
    id: 51,
    name: "Cozy Sweater Winter Press-On Nails",
    description: "Warm, textured sweater-inspired nails perfect for a cozy winter feel.",
    price: "Rs. 1,500",
    mainImage: "images/il_1588xN.7489082658_nerm.webp"
  },

  {
    id: 52,
    name: "Winter Themed  Press-On Nails",
    description: "Nails featuring snowflakes, icy tones, and winter motifs for a festive seasonal look.",
    price: "Rs. 1,850",
    mainImage: "images/68cc08a999038b32208ae78270724b7e.jpg"
  },

  {
    id: 53,
    name: "Retro Y2K Pop Art Press-On Nails",
    description: "Fun, colorful nails with bold Y2K-inspired pop art patterns for a playful retro vibe.",
    price: "Rs. 1,450",
    mainImage: "images/53d8bcb4fc4db30e2a5367851bf3de72.jpg"
  },

  {
    id: 54,
    name: "Cyberpunk Blue Silver Press-On Nails",
    description: "Futuristic cyberpunk nails in electric blue and silver with edgy metallic accents.",
    price: "Rs. 1,550",
    mainImage: "images/f3bd6cd69e1130af0ca8754ea3cc89f0.jpg"
  },
];
