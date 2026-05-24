import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  let [products, setproducts] = useState([]);

  useEffect(() => {
    async function Getproducts() {
      let req = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products",
      );

      setproducts(req.data.data);
    }

    Getproducts();
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 py-10 mt-14">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-md p-6">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Home
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => {
              return (
                <Link to={`/product/${product.id}`}>
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition duration-300"
                  >
                    <img
                      src={product.imageCover}
                      alt={product.title}
                      className="w-full h-52 object-cover"
                    />

                    <div className="p-4 flex flex-col h-full">
                      <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                        {product.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-2 line-clamp-3 flex-grow">
                        {product.description}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-bold text-green-600">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
