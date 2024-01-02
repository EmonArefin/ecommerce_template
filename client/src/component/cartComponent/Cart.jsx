import React from 'react';
import { Table } from 'react-bootstrap';

const StaticProductList = () => {
  // Static product data
  const staticProducts = [
    {
      id: 1,
      name: 'Apple Watch',
      color: 'Red',
      quantity: 2,
      price: 20,
    },
    {
      id: 2,
      name: 'Iphone 15',
      color: 'Blue',
      quantity: 1,
      price: 30,
    },
    {
      id: 3,
      name: 'Lenovo G-20',
      color: 'Green',
      quantity: 3,
      price: 15,
    },
    {
      id: 4,
      name: 'Xiaomi Smart Band 5',
      color: 'Yellow',
      quantity: 1,
      price: 25,
    },
    {
      id: 5,
      name: 'Sony SX1455',
      color: 'Orange',
      quantity: 2,
      price: 18,
    },
  ];

  return (
    <section id="staticProductList">
      <div className="container mb-5">
        <div className="feedback-section-title mt-5">
          <p className="text-center">Cart List</p>
          <h3 className="text-center">All Your Cart Data</h3>
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
      </div>
    </section>
  );
};

export default StaticProductList;



