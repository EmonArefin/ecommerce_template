
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ProductRequest } from '../../APIRequest/apiRequest';
import "../productComponent/products.css"

const ProductList = () => {
    let [data, setData] = useState([]);
    useEffect(()=> {
        (async()=> {
            let res = await ProductRequest();
            setData(res)
        })()
    },[])

    return (
        <section id="product">
            <div className="container">
                <div className="feedback-section-title mt-5">
                    <p className="text-center">Featured Products</p>
                    <h3 className="text-center">We Provide Best Products</h3>
                    <p className="text-center">
                    Our customers are the true ambassadors of our products, and we value their experiences immensely. Delving into their testimonials reveals authentic reflections of the unparalleled support we offer.
                    </p>
                    <hr
                        className="hr-style"
                        style={{ borderColor: "#0d6efd", marginBottom: "50px" }}
                    />
                </div>
        <Row>
            {
                data.sort((a, b) => b.price - a.price).map((item, index)=> {
                    return(
                        
                        <Col md={3} className="mb-4">
                        <Card className='cardControll'>
                        <Card.Img className='productImg' variant="top" src={item['images'][0]} alt="{title}" />
                        <Card.Body>
                            <Card.Title>{item['title']}</Card.Title>
                            <Card.Text>${item['price']}</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    );
                })
            }
        </Row>
        </div>
        </section>
      );
};

export default ProductList;

