import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextAPIData } from '../../App';

const ReviewInfo = () => {
    const [products, setProducts] = useContext(ContextAPIData)
    const [details, setDetails] = useState({})
    const { reviewId } = useParams()
    const detailsProduct = products.find(pd => pd.id === reviewId)
    useEffect(() => {
        setDetails(detailsProduct)

    }, [])


    return (
        <div className='flex justify-center items-center mt-10'>
            <img className='w-2/6 h-2/6 rounded mr-5' src={details.picture} alt="" />
            <p className='w-96 h-96 p-3 shadow' >{details.about}</p>
        </div>
    );
};

export default ReviewInfo;