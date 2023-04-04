import React from 'react';

export const ListProductsReactComponent = (props) => {
  const { onClick, products } = props;

  const addWishlist = (product) => {
    onClick(product);
  };

  return (
    <>
      {products.map((product, i) => (
        <div key={product.id} className='p-4 bg-white rounded shadow'>
          <img src={product.image} alt={product.name} className='object-cover object-center w-full h-auto rounded' />
          <h2 className='mb-2 text-xl font-bold'>{product.name}</h2>
          <div>
            <p className='text-lg text-gray-700'>$ {product.price}</p>
            <button className='addToCart' onClick={() => addWishlist(product)}>
              Add to wishlist
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
