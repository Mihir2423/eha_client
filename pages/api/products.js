
export default async function handler(req, res) {
  try {
    const apiRes = await fetch(`${process.env.NEXT_PUBLIC_NEXT_API_PUBLIC_URL}/api/products?populate=*`);
    const apiData = await apiRes.json();
    
    const filteredItems = apiData?.data?.filter(
      (item) => item.attributes.category.data.attributes.name === "laptops"
    );

    res.status(200).json({ filteredItems });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
}
