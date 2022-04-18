import React from 'react';
import {Card, CardImg } from 'react-bootstrap';

const ServicesDetails = ({servicesItem}) => {
    const {img, title, description} = servicesItem
    return (
        <div className='servicesInfo'>
            <CardImg className='top' src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                    <button className="btn btn-main">Go somewhere</button>
                </Card.Body>
        </div>        
    );
};

export default ServicesDetails;