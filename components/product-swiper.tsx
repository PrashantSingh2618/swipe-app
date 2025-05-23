"use client"

import { useState } from "react"
import { motion, useMotionValue, useTransform, useAnimation, type PanInfo } from "framer-motion"
import ProductDetails from "./product-details"
import Toast from "./toast"
import StarRating from "./star-rating"
import { type Product, products } from "@/lib/products"

// Configuration for the undo history
const UNDO_HISTORY_SIZE = 5

interface ProductSwiperProps {
  undoHistory: number[]
  setUndoHistory: (history: number[]) => void
  currentIndex: number
  setCurrentIndex: (index: number) => void
  products: Product[]
}

export default function ProductSwiper({
  undoHistory,
  setUndoHistory,
  currentIndex,
  setCurrentIndex,
  products
}: ProductSwiperProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [cart, setCart] = useState<Product[]>([])
  const [isAnimating, setIsAnimating] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const controls = useAnimation()

  // Transform values for rotation and opacity based on drag
  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 0.8, 1, 0.8, 0.5])
  const scale = useTransform(x, [-200, 0, 200], [0.9, 1, 0.9])

  const currentProduct = products[currentIndex] || {}
  const nextProduct = products[currentIndex + 1] || products[0]

  const addToCart = (product: Product) => {
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product])
      setToastMessage('Added to Cart! 🛒')
      setShowToast(true)
    }
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (isAnimating) return

    const threshold = 100
    const upThreshold = 80
    const velocity = info.velocity.x

    if (info.offset.y < -upThreshold && Math.abs(info.offset.x) < 50) {
      // Swiped up - show details
      setShowDetails(true)
      controls.start({
        y: 0,
        x: 0,
        transition: { type: 'spring', stiffness: 400, damping: 40 },
      })
    } else if (info.offset.x > threshold || velocity > 500) {
      // Swiped right - add to cart (don't add to undo history)
      setIsAnimating(true)
      controls
        .start({
          x: 1000,
          rotate: 30,
          opacity: 0,
          transition: { type: 'spring', stiffness: 400, damping: 40, velocity: info.velocity.x * 0.2 },
        })
        .then(() => {
          addToCart(currentProduct)
          setTimeout(() => {
            setIsAnimating(false)
            controls.set({ x: 0, rotate: 0, opacity: 1 })
            x.set(0)
            y.set(0)
            if (currentIndex < products.length - 1) {
              setCurrentIndex(currentIndex + 1)
            } else {
              setCurrentIndex(0)
            }
          }, 300)
        })
    } else if (info.offset.x < -threshold || velocity < -500) {
      // Swiped left - discard and add to undo history
      setIsAnimating(true)
      controls
        .start({
          x: -1000,
          rotate: -30,
          opacity: 0,
          transition: { type: 'spring', stiffness: 400, damping: 40, velocity: info.velocity.x * 0.2 },
        })
        .then(() => {
          // registerSwipe()
          // Add current index to undo history
          setUndoHistory(prev => {
            // Keep only the last N-1 items to make room for the new one
            const newHistory = [...prev]
            if (newHistory.length >= UNDO_HISTORY_SIZE) {
              newHistory.pop() // Remove the oldest item
            }
            return [currentIndex, ...newHistory] // Add new item at the beginning
          })

          setToastMessage('Product discarded')
          setShowToast(true)
          setTimeout(() => {
            setIsAnimating(false)
            controls.set({ x: 0, rotate: 0, opacity: 1 })
            x.set(0)
            y.set(0)
            if (currentIndex < products.length - 1) {
              setCurrentIndex(currentIndex + 1)
            } else {
              setCurrentIndex(0)
            }
          }, 300)
        })
    } else {
      // Not enough swipe distance, reset position
      controls.start({
        x: 0,
        y: 0,
        rotate: 0,
        transition: { type: 'spring', stiffness: 500, damping: 50 },
      })
    }
  }

  return (
    <div className="relative h-[700px] w-full">
      {/* Toast Notification */}
      {showToast && (
        <Toast
          message={toastMessage}
          type="success"
          onClose={() => {
            setShowToast(false)
          }}
        />
      )}

      <div className="relative h-full w-full shadow-lg">
        {/* Next Card (Background) */}
        <motion.div
          className="absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden"
          style={{ zIndex: 1 }}
          initial={{ scale: 0.95, opacity: 0.8 }}
          animate={{ scale: 0.95, opacity: 0.8 }}
        >
          <div className="h-full flex flex-col">
            <div className="relative flex-grow">
              <img
                src={nextProduct?.images[0] || '/placeholder.svg'}
                alt={nextProduct?.name}
                className="w-full h-full object-cover"
              />

              {/* Category Chip */}
              <div className="absolute top-4 left-4">
                <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-medium">
                  {nextProduct?.category}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-[16px] font-bold text-white">{nextProduct?.name}</h2>
                    <div className="flex items-center mt-1 mb-2">
                      <StarRating rating={nextProduct.rating} size={14} />
                      <span className="text-xs text-white ml-1">{nextProduct.rating.toFixed(1)}</span>
                    </div>
                    <div className="flex space-x-2">
                      {nextProduct.colors.map(color => (
                        <div
                          key={color}
                          className="w-4 h-4 rounded-full border border-white"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[16px] font-bold text-white">${nextProduct.discountedPrice}</p>
                    <p className="text-[15px] text-gray-300 line-through">${nextProduct.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Current Card (Foreground) */}
        <motion.div
          className="absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden cursor-grab active:cursor-grabbing touch-none"
          style={{
            x,
            y,
            rotate,
            opacity,
            scale,
            zIndex: showDetails ? 0 : 2,
          }}
          drag={!showDetails && !isAnimating}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          animate={controls}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 40 }}
        >
          <div className="h-full flex flex-col pointer-events-none">
            <div className="relative flex-grow">
              <img
                src={currentProduct.images[0] || '/placeholder.svg'}
                alt={currentProduct.name}
                className="w-full h-full object-cover"
              />

              {/* Category Chip */}
              <div className="absolute top-4 left-4">
                <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[12px] font-medium">
                  {currentProduct.category}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="text-[16px] font-bold text-white">{currentProduct.name}</h2>
                    <div className="flex items-center mt-1 mb-2">
                      <StarRating rating={currentProduct.rating} size={14} />
                      <span className="text-[12px] text-white ml-1">{currentProduct.rating.toFixed(1)}</span>
                    </div>
                    <div className="flex space-x-2">
                      {currentProduct.colors.map(color => (
                        <div
                          key={color}
                          className="w-4 h-4 rounded-full border border-white"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[16px] font-bold text-white">${currentProduct.discountedPrice}</p>
                    <p className="text-[15px] text-gray-300 line-through">${currentProduct.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Product Details Overlay */}
        {showDetails && (
          <motion.div
            className="absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ zIndex: 3 }}
          >
            <ProductDetails
              product={currentProduct}
              onClose={() => {
                setShowDetails(false)
              }}
              onAddToCart={() => {
                addToCart(currentProduct)
                setShowDetails(false)
                setTimeout(() => {
                  if (currentIndex < products.length - 1) {
                    setCurrentIndex(currentIndex + 1)
                  } else {
                    setCurrentIndex(0)
                  }
                }, 300)
              }}
            />
          </motion.div>
        )}
      </div>

      {/* <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm text-gray-500">Cart: {cart.length} items</p>
        <p className="text-xs text-gray-400 mt-1">
          Swipe right to add to cart • Swipe left to discard • Swipe up for details
        </p>
      </motion.div> */}
    </div>
  )
}
