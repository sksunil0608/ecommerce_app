import React from "react";
import { ProductData } from "../../types/types";

interface ProductListProps {
  productList: ProductData[] | null;
  onDelete: (productId: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ productList, onDelete }) => {
  if (!productList) {
    return <div>Loading products...</div>;
  }

  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-center mx-10 border-2 border-red-300 rounded-md mt-10">
        <ul>
          {productList.map((product) => (
            <li key={product.productId} className="my-2">
              <div>
                <strong>{product.productName}</strong> - ${product.sellingPrice}
                <button
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    if (product.productId) {
                      onDelete(product.productId);
                    }
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
