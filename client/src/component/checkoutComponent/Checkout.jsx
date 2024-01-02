import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Checkout = () => {
  // Static product data
  const staticProducts = [
    {
      id: 1,
      name: 'Product 1',
      color: 'Red',
      quantity: 2,
      price: 20,
    },
    {
      id: 2,
      name: 'Product 2',
      color: 'Blue',
      quantity: 1,
      price: 30,
    },
    {
      id: 3,
      name: 'Product 3',
      color: 'Green',
      quantity: 3,
      price: 15,
    },
  ];

  // Calculate total cost
  const totalCost = staticProducts.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);

  return (
    <section id="checkoutPage">
      <div className="container mb-5">
        <div className="feedback-section-title mt-5">
          <p className="text-center">Checkout</p>
          <h3 className="text-center">Review Your Order</h3>
          <hr className="hr-style" style={{ borderColor: '#0d6efd', marginBottom: '50px' }} />
        </div>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Color</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {staticProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.color}</td>
                <td>{product.quantity}</td>
                <td>${product.price}</td>
                <td>${product.quantity * product.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="text-center">
          <h4>Total: ${totalCost}</h4>
          <Button variant="success" className="mt-3">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
