import { useState } from "react";

function App() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);

  const addToCart = (product) => {
    const isProductInCart = addedProducts.some(
      (addedProduct) => addedProduct.name === product.name
    );
    if (isProductInCart) {
      return;
    }
    setAddedProducts((curr) => [...curr, { ...product, quantity: 1 }]);
  };
  return (
    <>
      <h1>Prodotti</h1>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <p>
                {product.name} €{product.price.toFixed(2)}
              </p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          );
        })}
      </ul>
      {addedProducts.length > 0 && (
        <>
          <h2>Cart</h2>
          <ul>
            {addedProducts.map((product, index) => {
              return (
                <li key={index}>
                  <p>
                    {product.name} €{product.price.toFixed(2)} Qt.
                    {product.quantity}
                  </p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
export default App;
