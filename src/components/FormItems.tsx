import React, { useState } from "react";
import { ProductData } from "../../types/types";

interface FormItemsProps {
  onAdd: (productData: ProductData) => Promise<void>;
}

const FormItems: React.FC<FormItemsProps> = ({ onAdd }) => {
  const [productId, setProductId] = useState<string | null>(null);
  const [sellingPrice, setSellingPrice] = useState<number | null>(null);
  const [productName, setProductName] = useState<string | null>(null);
  const [productCategory, setProductCategory] = useState<string | null>(null);

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const productData = {
      productId: productId,
      sellingPrice: sellingPrice,
      productName: productName,
      productCategory: productCategory,
    };
    try {
      await onAdd(productData);
      console.log("Data Stored Successffully!");
    } catch (error) {
      console.log("Error Storing Data");
    } finally {
      setProductId("");
      setSellingPrice(null);
      setProductName("");
      setProductCategory("");
    }
  };

  return (
    <div className="flex items-center justify-center mx-5 md:mx-10 lg:mx-80 rounded-md py-10 border-2 border-fuchsia-400">
      <form onSubmit={onFormSubmit} className="">
        <div className="py-1 w-full">
          <label htmlFor="product_id" className="text-2xl m-2">
            Product Id:
          </label>
          <input
            type="text"
            name="product_id"
            placeholder="Enter Product Id"
            value={productId || ""}
            className="border-2 border-black rounded-md py-2 px-4 w-full"
            onChange={(e) => {
              setProductId(e.target.value);
            }}
          />
        </div>
        <div className="py-1">
          <label htmlFor="selling_price" className="text-2xl m-2">
            Selling Price:
          </label>
          <input
            type="number"
            name="selling_price"
            value={sellingPrice || ""}
            placeholder="Enter Selling Price"
            onChange={(e) => {
              const newValue = e.target.value;
              const numericValue =
                newValue !== "" ? parseFloat(newValue) : null;
              setSellingPrice(numericValue);
            }}
            className="border-2 border-black rounded-md py-2 px-4 w-full"
          />
        </div>
        <div className="py-1">
          <label htmlFor="product_name" className="text-2xl m-2">
            Produt Name:
          </label>
          <input
            type="text"
            name="product_name"
            value={productName || ""}
            placeholder="Enter Product Name"
            className="border-2 border-black rounded-md py-2 px-4 w-full"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>
        <div className="py-1">
          <label htmlFor="product_category" className="text-2xl m-2">
            Select Product Category:{" "}
          </label>
          <select
            name="product_category"
            className="border-2 border-black rounded-md py-2 px-4 w-full"
            onChange={(e) => {
              setProductCategory(e.target.value);
            }}
            value={productCategory || ""}
          >
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="General">General</option>
            <option value="Grocery">Grocery</option>
          </select>
        </div>

        <div className="py-10">
          <button
            type="submit"
            className=" py-2 px-4 border-2 border-blue-700 rounded-lg w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormItems;
