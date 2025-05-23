"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ToastProps {
  message: string
  type?: "success" | "error" | "info"
  duration?: number
  onClose: () => void
}

export default function Toast({ message, type = "success", duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const getToastColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500"
      case "error":
        return "bg-red-500"
      case "info":
        return "bg-blue-500"
      default:
        return "bg-green-500"
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed top-4 left-1/2 -translate-x-1/2 ${getToastColor()} text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <span className="text-lg font-bold">{message}</span>
          <button onClick={() => setIsVisible(false)} className="ml-2">
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
