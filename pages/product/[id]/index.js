import Loading from "@/utils/loading";
import axios from "axios";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useState } from "react";
const ProductDetail = dynamic(
  () => import("@/components/ProductComponents/ProductDetail"),
  {
    loading: () => <Loading />,
  }
);

const ProductDetails = () => {
  const { data: session, status } = useSession();
  const [product, setProduct] = useState(null); // Make sure to initialize product with a default value

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    const productData = async () => {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    productData();
  }, []); 

  // console.log("Index page product",product);

  return (
    <>
      {/* <Head> */}
      {/* <title>EHA | {product?.data?.attributes?.name}</title> */}
      {/* <meta name="description" content="Get all electronics products" /> */}
      {/* </Head> */}
      <ProductDetail product={product} />
    </>
  );
};

export default ProductDetails;
