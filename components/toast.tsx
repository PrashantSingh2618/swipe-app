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

export default function Toast({
  message,
  type = "success",
  duration = 3000,
  onClose,
}: ToastProps) {
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
          initial={{ opacity: 0, x: 100, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: -20 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-xl text-white shadow-xl flex items-center gap-4 w-[320px] ${getToastColor()}`}
        >
          <div className="flex-1 font-semibold text-base">{message}</div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 transition"
          >
            <X size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}