import React, { useRef } from "react";

export const ListProductsReactComponent = (props) => {
  const { onClick, products } = props;

  const addWishlist = (product) => {
    onClick(product);
  };

  const addToCart = useRef(null);

  return (
    <React.Fragment>
      {products.map((product, i) => (
        <div key={product.id} className="p-4 bg-white rounded shadow">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover object-center w-full h-auto rounded"
          />
          <h2 className="mb-2 text-xl font-bold">{product.name}</h2>
          <div>
            <div ref={addToCart}></div>
            <p className="text-lg text-gray-700">$ {product.price}</p>
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              onClick={() => addWishlist(product)}
            >
              Add to wishlist
            </button>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
