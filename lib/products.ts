export interface Product {
  id: string
  name: string
  description: string
  price: number
  discountedPrice: number
  colors: string[]
  images: string[]
  features: string[]
  rating: number
  category: string
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear sound with our premium wireless headphones. Featuring active noise cancellation and 30-hour battery life.",
    price: 299.99,
    discountedPrice: 249.99,
    colors: ["#000000", "#FFFFFF", "#C0C0C0"],
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Built-in microphone",
      "Touch controls",
    ],
    rating: 4.5,
    category: "Audio",
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description:
      "Track your fitness goals with our advanced smart watch. Features heart rate monitoring, sleep tracking, and 50+ sport modes.",
    price: 199.99,
    discountedPrice: 149.99,
    colors: ["#000000", "#FF0000", "#0000FF"],
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    features: [
      "Heart rate monitoring",
      "Sleep tracking",
      "50+ sport modes",
      "Water resistant (5 ATM)",
      "7-day battery life",
    ],
    rating: 4.2,
    category: "Wearables",
  },
  {
    id: "3",
    name: "Ultra-Slim Laptop",
    description:
      "Powerful performance in an ultra-slim design. Features the latest processor, 16GB RAM, and 512GB SSD storage.",
    price: 1299.99,
    discountedPrice: 1099.99,
    colors: ["#808080", "#C0C0C0"],
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    features: [
      "Latest generation processor",
      "16GB RAM",
      "512GB SSD storage",
      "14-inch 4K display",
      "12-hour battery life",
    ],
    rating: 4.8,
    category: "Computers",
  },
  {
    id: "4",
    name: "Professional Camera Kit",
    description:
      "Capture stunning photos and videos with our professional camera kit. Includes camera body, 2 lenses, and accessories.",
    price: 1999.99,
    discountedPrice: 1799.99,
    colors: ["#000000"],
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    features: [
      "24.2MP full-frame sensor",
      "4K video recording",
      "5-axis image stabilization",
      "Weather-sealed body",
      "Dual SD card slots",
    ],
    rating: 4.9,
    category: "Photography",
  },
  {
    id: "5",
    name: "Designer Sunglasses",
    description:
      "Stylish designer sunglasses with 100% UV protection. Lightweight frame and polarized lenses for maximum comfort.",
    price: 199.99,
    discountedPrice: 149.99,
    colors: ["#000000", "#A52A2A", "#008000"],
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    features: [
      "100% UV protection",
      "Polarized lenses",
      "Lightweight frame",
      "Scratch-resistant coating",
      "Includes protective case",
    ],
    rating: 4.3,
    category: "Fashion",
  },
]
