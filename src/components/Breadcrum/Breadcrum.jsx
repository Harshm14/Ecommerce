import React from 'react';
import './Breadcrum.css'
import arrow_icon from '../assets1/breadcrum_arrow.png'
const Breadcrum = (props) => {
    console.log('hiiiiii');
    const{product}=props;
    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
        </div>
    );
};

export default Breadcrum;
