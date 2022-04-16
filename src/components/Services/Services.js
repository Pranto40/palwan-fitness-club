import React from 'react';
import { Card } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
import './Services.css';

const Services = () => {
    const [servicesItems] = useServices([])
    console.log(servicesItems);
    return (
        <div>
            <div className="heading mt-5">
                <h1>Our Services</h1>
            </div>
                <Card className="services">
                    {
                        servicesItems.map((servicesItem) => <ServicesDetails
                        key={servicesItem.id}
                        servicesItem = {servicesItem}
                        ></ServicesDetails>)
                    }
                </Card>
        </div>
    );
};

export default Services;