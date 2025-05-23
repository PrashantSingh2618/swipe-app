"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarRating from "./star-rating"
import type { Product } from "@/lib/products"

interface ProductDetailsProps {
  product: Product
  onClose: () => void
  onAddToCart: () => void
}

export default function ProductDetails({ product, onClose, onAddToCart }: ProductDetailsProps) {
  product = {
    ...product,
    images: [
      'https://images.quince.com/2rMAgvoIWI0GHhi8R2VxlG/9e83150a6dcab1fbcca6b51e0bd66071/W-BLO-97-FGRN-3244_EDITED_1.jpg',
      'https://images.quince.com/3iVAfAu0PmRG90aT7PWl4w/61493d98290435606d665a9ede4bf9a4/W-BLO-97-FGRN-3244_EDITED.jpg',
      'https://images.quince.com/1rS14dLRvuyFndljxjil3J/db2065c96f1e0a7629c1be4b47c22ed5/W-BLO-97-FGRN-3301_EDITED.jpg',
      'https://images.quince.com/5rdAPXiKlTQXNhs5HYqwVH/2c695262dcf1f791af0cb0cfce2fd8ad/W-BLO-97-FGRN-3270_EDITED.jpg',
      'https://images.quince.com/7qDLvbNYUeCwygL98fiTid/4c28201c6244f9150bd7af31c33d2cde/W-BLO-97-FGRN-3314_EDITED.jpg',
      'https://images.quince.com/3CpzJ2owtAToX5VbOUVylf/8a1898d53737f4ae67b8118f77935726/W-BLO-97-FGRN-3288_EDITED.jpg',
    ]
  }
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.size[0])

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right

  const nextImage = () => {
    setDirection(1)
    setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setDirection(-1)
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  const format = (str: string)=>{
    return str.replace(/<[^>]*>/g, '').trim();
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header with Image */}
      <motion.div
        className="relative"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={20} />
        </motion.button>

        <div className="relative h-70 overflow-hidden">
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.img
              key={currentImageIndex}
              src={product.images[currentImageIndex] || "https://redthread.uoregon.edu/files/large/affd16fd5264cab9197da4cd1a996f820e601ee4.jpg"}
              alt={product.name}
              className="w-full h-full object-cover"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.8,
              }}
            />
          </AnimatePresence>

          {/* Category Chip */}
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
              {product.category}
            </div>
          </div>

          {product.images.length > 1 && (
            <>
              <div className="absolute inset-y-0 left-0 flex items-center">
                <motion.button
                  onClick={prevImage}
                  className="ml-2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg z-10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ width: 40, height: 40 }}
                >
                  <ChevronLeft size={18} />
                </motion.button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                <motion.button
                  onClick={nextImage}
                  className="mr-2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg z-10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ width: 40, height: 40 }}
                >
                  <ChevronRight size={18} />
                </motion.button>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {product.images.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => {
                      setDirection(index > currentImageIndex ? 1 : -1)
                      setCurrentImageIndex(index)
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </motion.div>

      {/* Scrollable Content */}
      <motion.div
        className="flex-1 overflow-y-auto p-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex justify-between items-start">
          <motion.h2
            className="text-xl font-bold"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {product.name}
          </motion.h2>

          <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
            <StarRating rating={product.rating} />
          </motion.div>
        </div>

        <motion.div
          className="flex justify-between items-center mt-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold">${product.discountedPrice}</span>
            <span className="text-sm text-gray-500 line-through">${product.price}</span>
            <motion.span
              className="text-sm text-green-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              {Math.round((1 - product.discountedPrice / product.price) * 100)}% OFF
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          className="mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-sm font-medium">Colors</h3>
          <div className="flex space-x-2 mt-2">
            {product.colors.map((color, index) => (
              <motion.div
                key={color}
                className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                  selectedColor === color ? "border-black" : "border-transparent"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>


        <motion.div
          className="mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-[12px] font-medium">Size</h3>
          <div className="flex space-x-2 mt-2">
            {product.size.map((size, index) => (
              <motion.div
                key={size}
                className={`w-14 h-14 flex items-center justify-center text-lg rounded border transition-colors duration-200 cursor-pointer ${
                  selectedSize === size ? 'border-black text-black font-semibold' : 'border-gray-300 text-gray-700'
                }`}
                onClick={() => {
                  setSelectedSize(size)
                }}
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {size}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-sm font-medium">Description</h3>
          <p className="text-sm text-gray-600 mt-2">{format(product.description)}</p>
        </motion.div>

        <motion.div
          className="mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-sm font-medium">Features</h3>
          <ul className="text-sm text-gray-600 mt-2 list-disc pl-5">
            {product.features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Sticky Footer */}
      <motion.div
        className="sticky bottom-0 left-0 right-0 p-4 bg-white border-t"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: 'spring' }}
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button className="w-full bg-[#ffa273] text-black text-[12px] h-12" onClick={onAddToCart}>
            Add to Cart
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
