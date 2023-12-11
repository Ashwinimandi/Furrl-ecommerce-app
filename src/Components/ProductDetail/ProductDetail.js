import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../DataLayer/Uihelper";
import ProductCard from "./ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await getProductDetail(id);
          setProductData(response);
        }
      } catch (error) {
        console.error("Error fetching product detail:", error);
        setError("Error fetching product detail");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {productData && (
        <ProductCard
          title={productData.data.title}
          price={productData.furrlVariants[0].price}
          image={productData.variants[0].images[0].src}
          discount={productData.furrlVariants[0].furrlDiscountPercent}
          vendor={productData.data.vendor}
          compareprice={productData.furrlVariants[0].compare_at_price}
        />
      )}
    </div>
  );
};

export default ProductDetail;
