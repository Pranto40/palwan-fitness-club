import React from 'react';
import { Button, Card, CardImg } from 'react-bootstrap';

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
                    <Button className="primary">Go somewhere</Button>
                </Card.Body>
        </div>        
    );
};

export default ServicesDetails;