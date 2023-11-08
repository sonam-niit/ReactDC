import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import list from './products.json';
function Details() {
    
    const {id}=useParams();
     //set the default value of products which is coming from json file
     const [product,setProduct] = useState(list[0]);

     useEffect(()=>{
         setProduct(list.find(item=>item.id==id));
     },[])
    return ( <div>
                <h3>{product.id} </h3>
                <h4>name: {product.name}</h4>
                <h4>Price: {product.price}</h4>
                <h4>Rating: {product.rating}</h4>
    </div> );
}

export default Details;