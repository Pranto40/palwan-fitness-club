import React from 'react';
import {Card, CardImg } from 'react-bootstrap';

const ServicesDetails = ({servicesItem}) => {
    const {img, title, description, price} = servicesItem
    return (
        <div className='servicesInfo'>
            <CardImg className='top' src={img} />
                <Card.Body className='border rounded border-ligh border-top-0'>
                    <Card.Title><h3>{title}</h3></Card.Title>
                    <Card.Title>Price: {price}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <button className="btn btn-main">Buy Now</button>
                </Card.Body>
        </div>        
    );
};

export default ServicesDetails;