import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import productImage from './perfume.jpg'

const ProductCard = ({ product }) => {
    const cardStyle = {
        maxWidth: '600px',
        margin: '0 auto',
    }

    const imgStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    }

    const buttonStyle = {
        width: '100%',
    }

    return (
        <Card className="my-3 p-0" style={cardStyle}>
            <Row className='no-gutters'>
                <Col md={6} className='p-0'> 
                    <Card.Img src={productImage} alt={product.name} style={{imgStyle}} />
                </Col>
                <Col md={6}>
                    <Card.Body>
                        <div style={{ fontSize: '0.9rem', color: 'gray' }}>PERFUME</div>
                        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <div>
                            <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>${product.oldPrice}</span>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'green' }}>${product.price}</span>
                        </div>
                        <Button variant="success" className="mt-3" style={buttonStyle} onClick={() => alert('Product added to cart!')}>Add to Cart</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default ProductCard;
