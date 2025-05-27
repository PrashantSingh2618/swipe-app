export const getProductResposne = (productId: string) => {
    console.log('Debug ', {productId})
    switch(productId){
        case '4599':
            return {
                id: "4599",
                name: "European Linen Oversized Lumbar Pillow Cover - Set of 2 ",
                description:
                  "<p>Our oversized lumbar pillow cover is crafted from 100% European linen, offering a luxurious, breathable texture that feels soft against your skin. The natural fibers lend a relaxed look and the oversized length provides comfort and style, making this the easiest way to upgrade your bedroom.</p>",
                price: 135.61,
                discountedPrice: 119.29,
                colors: ["#FFFFFF", "#FFFF00", "#000000", "#FF0000"],
                images: [
                  "https://images.quince.com/3iVAfAu0PmRG90aT7PWl4w/61493d98290435606d665a9ede4bf9a4/W-BLO-97-FGRN-3244_EDITED.jpg", 
                  "https://images.quince.com/1rS14dLRvuyFndljxjil3J/db2065c96f1e0a7629c1be4b47c22ed5/W-BLO-97-FGRN-3301_EDITED.jpg",
                  "https://images.quince.com/5rdAPXiKlTQXNhs5HYqwVH/2c695262dcf1f791af0cb0cfce2fd8ad/W-BLO-97-FGRN-3270_EDITED.jpg", 
                  "https://images.quince.com/7qDLvbNYUeCwygL98fiTid/4c28201c6244f9150bd7af31c33d2cde/W-BLO-97-FGRN-3314_EDITED.jpg", 
                  "https://images.quince.com/3CpzJ2owtAToX5VbOUVylf/8a1898d53737f4ae67b8118f77935726/W-BLO-97-FGRN-3288_EDITED.jpg"
                ],
                features: ["High-quality materials", "Durable construction"],
                size: ["M", "L", "XXL"],
                rating: 4.2,
                category: "Mens_Sweaters",
                internal_product_name:
                  "European Linen Oversized Lumbar Pillow Cover - Set of 2 ",
                style_number: "U-TEXT-61",
                gender: "unisex",
                details:
                  "<ul><li>Made from 100% European heavy-weight linen, pre-washed for a soft hand feel</li><li>Features a knife edge finish with hidden zipper closure</li><li>Insert not included</li><li>Produced in Sedex certified factories which aim to improve working conditions throughout the supply chain</li><li>Crafted with care in India</li></ul>",
                seo_title: "European Linen Oversized Lumbar Pillow Cover - Set of 2 ",
                subclass_name: "Pillow Covers",
                class_name: "Pillow Covers",
                subdepartment_name: "Linen Pillows and Throws",
                department_name: "Pillows and Throws",
                division_name: "Home",
              };
        default:
            return  {
                id: "7350",
                name: "European Linen Pants ",
                description:
                  "<p>Our oversized lumbar pillow cover is crafted from 100% European linen, offering a luxurious, breathable texture that feels soft against your skin. The natural fibers lend a relaxed look and the oversized length provides comfort and style, making this the easiest way to upgrade your bedroom.</p>",
                price: 135.61,
                discountedPrice: 119.29,
                colors: ["#FFFFFF", "#FFFF00", "#000000", "#FF0000"],
                sora_image: "https://images.quince.com/3ibkVWcQA6RxkGvMST7BEO/805a71b415b61fcc20a171b5b2388ab1/W-PNT-6-OWHT_0260_1.jpg",
                images: [
                   "https://images.quince.com/7jtqeGKQCDL6LKeVoKKLgC/a09344c76a086c3bd450aa956a0c16a1/W-PNT-6-OWHT_0260.jpg", 
                    "https://images.quince.com/6lJoVqZdfTsqw3JqWzDQca/6a5e0e38c032f7a25a2d0f3e290b910c/W-PNT-6-OWHT_0309.jpg", 
                    "https://images.quince.com/1uXub6B98amh6iGUYCx2ML/a46681b06096a01e46033d5fe107d0e9/W-PNT-6-OWHT_0298.jpg", 
                    "https://images.quince.com/1WukcuR6kikSlyotb88kK/cdf0ba29b90fd80f648d794c0fff4de0/W-PNT-6-OWHT_0294.jpg"
                ],
                features: ["High-quality materials", "Durable construction"],
                size: ["M", "L", "XXL"],
                rating: 4.2,
                category: "Mens_Sweaters",
                internal_product_name:
                  "European Linen Oversized Lumbar Pillow Cover - Set of 2 ",
                style_number: "U-TEXT-61",
                gender: "unisex",
                details:
                  "<ul><li>Made from 100% European heavy-weight linen, pre-washed for a soft hand feel</li><li>Features a knife edge finish with hidden zipper closure</li><li>Insert not included</li><li>Produced in Sedex certified factories which aim to improve working conditions throughout the supply chain</li><li>Crafted with care in India</li></ul>",
                seo_title: "European Linen Oversized Lumbar Pillow Cover - Set of 2 ",
                subclass_name: "Pillow Covers",
                class_name: "Pillow Covers",
                subdepartment_name: "Linen Pillows and Throws",
                department_name: "Pillows and Throws",
                division_name: "Home",
              };
    }
}
export const recommendations = {
  user_id: "user1",
  recommendations: ["4599", "5517", "5706", "6438", "5523", "3867", "4351"],
  message: null,
};

export const soraImageResponse = {
    sora_image: "https://images.quince.com/2rMAgvoIWI0GHhi8R2VxlG/9e83150a6dcab1fbcca6b51e0bd66071/W-BLO-97-FGRN-3244_EDITED_1.jpg",
}

export const swipeResponse = {
    "user_id": "user123",
    "item_id": "73500998",
    "status": "Swipe logged successfully.",
    "message": null
}

export const handleBackResponse =  {
    item_id: 7350
}

// More product Images
// https://images.quince.com/3ibkVWcQA6RxkGvMST7BEO/805a71b415b61fcc20a171b5b2388ab1/W-PNT-6-OWHT_0260_1.jpg, 
// https://images.quince.com/7jtqeGKQCDL6LKeVoKKLgC/a09344c76a086c3bd450aa956a0c16a1/W-PNT-6-OWHT_0260.jpg, 
// https://images.quince.com/6lJoVqZdfTsqw3JqWzDQca/6a5e0e38c032f7a25a2d0f3e290b910c/W-PNT-6-OWHT_0309.jpg, 
// https://images.quince.com/1uXub6B98amh6iGUYCx2ML/a46681b06096a01e46033d5fe107d0e9/W-PNT-6-OWHT_0298.jpg, 
// https://images.quince.com/1WukcuR6kikSlyotb88kK/cdf0ba29b90fd80f648d794c0fff4de0/W-PNT-6-OWHT_0294.jpg