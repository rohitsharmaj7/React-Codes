import {useParams } from 'react-router-dom';
import React from 'react';

const ProductDetail = () =>{
    const params = useParams();

     return <>
       <section>
          <h1>Details of the product</h1>
          <h1>{params.productId}</h1>
       </section>
     </>
}

export default ProductDetail;