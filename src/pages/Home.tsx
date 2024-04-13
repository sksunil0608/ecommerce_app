import React, { useEffect, useState } from "react";
import { ProductData } from "../../types/types";
import FormItems from "../components/FormItems";
import ProductList from "../components/ProductList";
import {
  fetchProductsFromLocalStorage,
  deleteProductFromLocalStorage,
  storeToLocalStorage,
} from "../components/api";

const Home = () => {
  const [productList, setProductList] = useState<ProductData[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await fetchProductsFromLocalStorage();
        setProductList(products || []);
      } catch (error) {
        console.log("Error Fetching Products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteProduct = async (productId: string) => {
    try {
      await deleteProductFromLocalStorage(productId);

      if (productList) {
        const updatedProductList = productList.filter(
          (product) => product.productId !== productId
        );
        setProductList(updatedProductList);
      }
    } catch (error) {
      console.log("Error Deleting Product:", error);
    }
  };

  const handleAddProduct = async (productData: ProductData) => {
    try {
      await storeToLocalStorage(productData);
      if (productList) {
        const updatedProductList = [...productList, productData];
        setProductList(updatedProductList);
      }
    } catch (error) {
      console.log("Error Deleting Product:", error);
    }
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-2 pb-4">
        Welcome to E-commerce Dashboard
      </h1>
      <div>
        <FormItems onAdd={handleAddProduct} />
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold py-2 pb-4">
          Displaying the Products
        </h1>
        <ProductList productList={productList} onDelete={handleDeleteProduct} />
      </div>
    </div>
  );
};

export default Home;
