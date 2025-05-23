"use client"

import ProductSwiper from "@/components/product-swiper"
import UndoHeader from "@/components/undo-header"
import { useState } from "react"

export default function Home() {
  const [undoHistory, setUndoHistory] = useState<number[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      <div className="w-full max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">SwipeShop</h1>
        <UndoHeader
          undoHistory={undoHistory}
          onUndo={(newHistory, restoredIndex) => {
            setUndoHistory(newHistory)
            setCurrentIndex(restoredIndex)
          }}
        />
        <ProductSwiper
          undoHistory={undoHistory}
          setUndoHistory={setUndoHistory}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </main>
  )
}
