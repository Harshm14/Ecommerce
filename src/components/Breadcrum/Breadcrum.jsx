// import React from 'react';
// import './Breadcrum.css'
// import arrow_icon from '../components/assets1/breadcrum_arrow.png'
// const Breadcrum = (props) => {
//     const{product}=props;
//     return (
//         <div className='breadcrum'>
//             HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
//         </div>
//     );
// };

// export default Breadcrum;
import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../assets1/breadcrum_arrow.png';

const Breadcrum = ({ product }) => {
    return (
        <div className='breadcrum'>
            <span>HOME</span>
            <img src={arrow_icon} alt="Arrow icon" />
            <span>SHOP</span>
            <img src={arrow_icon} alt="Arrow icon" />
            <span>{product.category}</span>
            <img src={arrow_icon} alt="Arrow icon" />
            <span>{product.name}</span>
        </div>
    );
};

export default Breadcrum;
