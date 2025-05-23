export interface Product {
  image_url: string
  name: string
  description: string
  price: number
  discountedPrice: number
  colors: string[]
  images: string[]
  features: string[]
  rating: number
  category: string
  size: string[]
  id: number
}

export const products: Product[] = [
  {
    id: '1',
    name: '100% European Linen Sleeveless Swing Dress',
    description:
      'Sleeveless style with a little swing. This spring summer staple can do it all. Featuring pin-tucking up top, shell buttons, and pleat detailing. Our linen collection is made from 100% European flax linen—an eco-friendly, and resource light material. Also offered in sizes 1X-3X.',
    price: 299.99,
    discountedPrice: 118.99,
    colors: ['#000000', '#FFFFFF', '#C0C0C0'],
    images: [
      'https://images.quince.com/2rMAgvoIWI0GHhi8R2VxlG/9e83150a6dcab1fbcca6b51e0bd66071/W-BLO-97-FGRN-3244_EDITED_1.jpg',
      'https://images.quince.com/3iVAfAu0PmRG90aT7PWl4w/61493d98290435606d665a9ede4bf9a4/W-BLO-97-FGRN-3244_EDITED.jpg',
      'https://images.quince.com/1rS14dLRvuyFndljxjil3J/db2065c96f1e0a7629c1be4b47c22ed5/W-BLO-97-FGRN-3301_EDITED.jpg',
      'https://images.quince.com/5rdAPXiKlTQXNhs5HYqwVH/2c695262dcf1f791af0cb0cfce2fd8ad/W-BLO-97-FGRN-3270_EDITED.jpg',
      'https://images.quince.com/7qDLvbNYUeCwygL98fiTid/4c28201c6244f9150bd7af31c33d2cde/W-BLO-97-FGRN-3314_EDITED.jpg',
      'https://images.quince.com/3CpzJ2owtAToX5VbOUVylf/8a1898d53737f4ae67b8118f77935726/W-BLO-97-FGRN-3288_EDITED.jpg',
    ],
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0',
      'Built-in microphone',
      'Touch controls',
    ],
    size: ['XS', 'S', 'L', 'M', 'XL'],
    rating: 4.5,
    category: 'Audio',
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description:
      'Track your fitness goals with our advanced smart watch. Features heart rate monitoring, sleep tracking, and 50+ sport modes.',
    price: 199.99,
    discountedPrice: 149.99,
    colors: ['#000000', '#FF0000', '#0000FF'],
    images: [
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
    ],
    features: [
      'Heart rate monitoring',
      'Sleep tracking',
      '50+ sport modes',
      'Water resistant (5 ATM)',
      '7-day battery life',
    ],
    rating: 4.2,
    category: 'Wearables',
    size: ['XS', 'S', 'L', 'M', 'XL'],
  },
  {
    id: '3',
    name: 'Ultra-Slim Laptop',
    description:
      'Powerful performance in an ultra-slim design. Features the latest processor, 16GB RAM, and 512GB SSD storage.',
    price: 1299.99,
    discountedPrice: 1099.99,
    colors: ['#808080', '#C0C0C0'],
    images: [
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
    ],
    features: [
      'Latest generation processor',
      '16GB RAM',
      '512GB SSD storage',
      '14-inch 4K display',
      '12-hour battery life',
    ],
    rating: 4.8,
    category: 'Computers',
    size: ['XS', 'S', 'L', 'M', 'XL'],
  },
  {
    id: '4',
    name: 'Professional Camera Kit',
    description:
      'Capture stunning photos and videos with our professional camera kit. Includes camera body, 2 lenses, and accessories.',
    price: 1999.99,
    discountedPrice: 1799.99,
    colors: ['#000000'],
    images: [
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
    ],
    features: [
      '24.2MP full-frame sensor',
      '4K video recording',
      '5-axis image stabilization',
      'Weather-sealed body',
      'Dual SD card slots',
    ],
    rating: 4.9,
    category: 'Photography',
    size: ['XS', 'S', 'L', 'M', 'XL'],
  },
  {
    id: '5',
    name: 'Designer Sunglasses',
    description:
      'Stylish designer sunglasses with 100% UV protection. Lightweight frame and polarized lenses for maximum comfort.',
    price: 199.99,
    discountedPrice: 149.99,
    colors: ['#000000', '#A52A2A', '#008000'],
    images: [
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
      '/placeholder.svg?height=500&width=500',
    ],
    features: [
      '100% UV protection',
      'Polarized lenses',
      'Lightweight frame',
      'Scratch-resistant coating',
      'Includes protective case',
    ],
    rating: 4.3,
    category: 'Fashion',
    size: ['XS', 'S', 'L', 'M', 'XL'],
  },
]

