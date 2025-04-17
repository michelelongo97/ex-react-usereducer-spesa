import { useState } from "react";

function App() {
  const products = [
    { name: "Mela", price: 0.5 },
    { name: "Pane", price: 1.2 },
    { name: "Latte", price: 1.0 },
    { name: "Pasta", price: 0.7 },
  ];

  const [addedProducts, setAddedProducts] = useState([]);

  const updateProductQuantity = (name, quantity) => {
    setAddedProducts((curr) =>
      curr.map((product) => {
        if (product.name === name) {
          return { ...product, quantity };
        }
        return product;
      })
    );
  };

  const addToCart = (product) => {
    const productInCart = addedProducts.find(
      (addedProduct) => addedProduct.name === product.name
    );
    if (productInCart) {
      updateProductQuantity(productInCart.name, productInCart.quantity + 1);
      return;
    }
    setAddedProducts((curr) => [...curr, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (product) => {
    setAddedProducts((curr) => curr.filter((p) => p.name !== product.name));
  };

  const totalPrice = addedProducts.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

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
                  <button onClick={() => removeFromCart(product)}>
                    Remove from Cart
                  </button>
                </li>
              );
            })}
          </ul>
          <hr />
          <h4>Total price to pay: €{totalPrice.toFixed(2)}</h4>
        </>
      )}
    </>
  );
}
export default App;
