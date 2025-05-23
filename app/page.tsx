"use client";

import Footer from "@/components/footer";
import ProductSwiper from "@/components/product-swiper";
import UndoHeader from "@/components/undo-header";
import { Product, products } from "@/lib/products";
import { getProductDetails, getRecommendationsApi, getSoraImage } from "@/service";
import { useEffect, useState } from "react";

interface PropsType {
  data: Product[];
  loading: boolean;
  error: string;
}

export default function Home() {
  const [undoHistory, setUndoHistory] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<PropsType>({
    data: [],
    loading: true,
    error: "",
  });

  const getRecommendations = async () => {
    try {
      const res = await getRecommendationsApi();
      const recommendationIds = res.recommendations;

      if (!recommendationIds || recommendationIds.length === 0) {
        setProducts({ data: [], loading: false, error: "" });
        return;
      }

      const finalData = await Promise.all(
        recommendationIds.map(async (productId: number) => {
          const [
            soraImage,
            productDetails
          ] = await Promise.all([
            getSoraImage(productId),
            getProductDetails(productId),
          ]);

          return {
            productId,
            ...soraImage,
            ...productDetails, // merge product details fields
          };
        })
      );
      console.log('Debug ', {finalData})

      setProducts((prev) => ({
        ...prev,
        loading: false,
        data: [...prev.data, ...finalData],
      }));
    } catch (err) {
      setProducts({
        ...products,
        error: "Something went wrong",
      });
      console.log("Debug err", err);
    }
  };

  useEffect(() => {
    getRecommendations();
  }, []);

  console.log('Debug products array is ', {products})

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
        {products?.data.length > 0 ? (
          <ProductSwiper
            products={products?.data}
            undoHistory={undoHistory}
            setUndoHistory={setUndoHistory}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            appendMoreProducts={getRecommendations}
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
