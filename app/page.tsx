"use client";

import Footer from "@/components/footer";
import ProductSwiper from "@/components/product-swiper";
import UndoHeader from "@/components/undo-header";
import { Product, products } from "@/lib/products";
import { getProductDetails, getRecommendationsApi, getSoraImage, handleBackApi } from "@/service";
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
  const [showDetails, setShowDetails] = useState(false);


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
    }
  };

  useEffect(() => {
    getRecommendations();
  }, []);

  const handleUndo =  async ()=> {
      try{
        const res = await handleBackApi()
        const productId = res.item_id
        const [soraImage, productDetails] = await Promise.all([
          getSoraImage(productId),
          getProductDetails(productId),
        ]);
        const restoredProduct = {
          productId,
          ...soraImage,
          ...productDetails,
        };
        setProducts((prev) => {
          const updated = [...prev.data];
          updated[currentIndex] = restoredProduct;
          return { ...prev, data: updated };
        });
        setCurrentIndex(currentIndex);
      }
      catch(err){
  
      }
    }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-8">
      <div className="w-full max-w-lg mx-auto flex flex-col flex-grow">
        <UndoHeader
          onUndo={handleUndo}
        />
        {products?.data.length > 0 ? (
          <ProductSwiper
            products={products?.data}
            undoHistory={undoHistory}
            setUndoHistory={setUndoHistory}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            appendMoreProducts={getRecommendations}
          />
        ) : (
          <div className="flex flex-1 justify-center items-center">
            <div className="w-10 h-10 border-2 border-[#ffa273] border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {!showDetails && <Footer />}
    </main>
  );
}
