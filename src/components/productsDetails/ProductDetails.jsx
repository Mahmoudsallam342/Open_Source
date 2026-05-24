import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  let [productDetails, setProductDetails] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    async function getProductDetails() {
      let response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      );

      setProductDetails(response.data.data);
    }
    getProductDetails();
  }, []);

  if (!productDetails) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <section className="container mx-auto px-4 py-10 mt-14">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={productDetails.imageCover}
          alt={productDetails.title}
          className="w-full rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-bold mb-4">{productDetails.title}</h2>

          <p className="text-gray-600 mb-6">{productDetails.description}</p>

          <h3 className="text-3xl font-bold text-green-600 mb-6">
            ${productDetails.price}
          </h3>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
}
