import React, { useState, useEffect, useCallback } from "react";
import { makeApiCall } from "../DataLayer/Uihelper";
import { Card } from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Product.css";

const Products = () => {
  const [productData, setProductData] = useState({
    data: null,
    allData: [],
    productCategoryId: "",
    productId: "",
  });
  const [page, setPage] = useState(1);

  const fetchData = (id = "") => {
    const queryParams = {
      visitId: "869c3ec1-ab88-409f-9870-c102c15f4c2b",
      page: 1,
      productCategoryId: id,
    };

    makeApiCall(queryParams)
      .then((result) => {
        setProductData({
          data: result,
          allData: result.productData,
          productCategoryId: id,
        });
      })
      .catch((error) => {
        console.error("API Call Error:", error);
      });
  };

  const fetchMoreData = useCallback(async () => {
    try {
      const queryParams = {
        visitId: "869c3ec1-ab88-409f-9870-c102c15f4c2b",
        page,
        productCategoryId: productData.productCategoryId,
      };

      const newData = await makeApiCall(queryParams);
      setProductData((prevData) => ({
        ...prevData,
        allData: [...prevData.allData, ...newData.productData],
      }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [page, productData.productCategoryId]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchMoreData();
  }, [fetchMoreData, page]);

  return (
    <div className="header-container">
      {productData.data && (
        <>
          <img
            src={productData?.data?.vibeImageUrl}
            className="image"
            alt="furrl"
          />
          <div>Products</div>
          <div className="total-count">
            {productData?.data?.totalStoredProductIdsCount} Products
          </div>
        </>
      )}
      <div className="button-container">
        {productData.data && (
          <button className="nav-button" onClick={() => fetchData("")}>
            All
          </button>
        )}
        {productData.data?.furrlProductCategoryList?.map((e, index) => (
          <button
            className="nav-button"
            key={index}
            onClick={() => fetchData(e.furrlProductCategoryId)}
          >
            {e?.furrlProductCategoryName}
          </button>
        ))}
      </div>

      <InfiniteScroll
        dataLength={productData.allData.length}
        next={() => setPage((prevPage) => prevPage + 1)}
        hasMore={true}
      >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {productData.allData &&
            productData.allData.map((e, index) => {
              return <Card e={e} key={index} />;
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Products;
