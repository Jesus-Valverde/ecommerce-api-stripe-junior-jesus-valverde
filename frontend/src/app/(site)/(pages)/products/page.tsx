import React from "react";
import Products from "@/components/Products";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Productos | Jesus Val Ecommerce",
  description: "Aqui se muestran los productos",
  // other metadata
};

const ProductsPage = () => {
  return (
    <main>
      <Products />
    </main>
  );
};

export default ProductsPage;