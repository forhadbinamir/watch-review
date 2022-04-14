import React from 'react';

const DetailsInfo = (props) => {
    console.log(props)
    const { picture, about } = props.product
    return (
        <div>
            <h2>details info</h2>
            <img src={picture} alt="" />
            <p>{about}</p>
        </div>
    );
};

export default DetailsInfo;