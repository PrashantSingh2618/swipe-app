"use client";

import Footer from "@/components/footer";
import ProductSwiper from "@/components/product-swiper";
import UndoHeader from "@/components/undo-header";
import { products } from "@/lib/products";
import { getRecommendationsApi } from "@/service";
import { useEffect, useState } from "react";

export default function Home() {
  const [undoHistory, setUndoHistory] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getRecommendations = async () => {
    try {
      const res = await getRecommendationsApi()
      // setProducts([...res])
      console.log('Debug ', { res })
    } catch (err) {
      console.log('Debug err', err)
    }
  }

  useEffect(() => {
    getRecommendations()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
  <div className="w-full max-w-lg mx-auto flex flex-col flex-grow">
    <UndoHeader
      undoHistory={undoHistory}
      onUndo={(newHistory, restoredIndex) => {
        setUndoHistory(newHistory);
        setCurrentIndex(restoredIndex);
      }}
    />
    {products.length > 0 ? (
      <ProductSwiper
        products={products}
        undoHistory={undoHistory}
        setUndoHistory={setUndoHistory}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    ) : (
      <div className="flex flex-1 justify-center items-center">
        <div className="w-6 h-6 border-2 border-[#ffa273] border-t-transparent rounded-full animate-spin" />
      </div>
    )}
  </div>

  <Footer />
</main>

  );
}
