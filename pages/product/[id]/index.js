import Loading from "@/utils/loading";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
const ProductDetail = dynamic(
  () => import("@/components/ProductComponents/ProductDetail"),
  {
    loading: () => <Loading />,
  }
);

const ProductDetails = ({ product }) => {
  return (
    <>
      <Head>
        <title>EHA | {product?.data?.attributes?.name}</title>
        <meta name="description" content="Get all electronics products" />
      </Head>
      <ProductDetail product={product} />
    </>
  );
};

export default ProductDetails;

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_API_PUBLIC_URL}/api/products/${id}?populate=*`
    );
    const product = await res.json();
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: {
        product: null,
      },
    };
  }
}
