import React, { useEffect, useState } from 'react';
import list from './products.json';
import { Link, useParams } from 'react-router-dom';

function Products() {

    const {category}= useParams();

    //set the default value of products which is coming from json file
    const [products,setProducts] = useState(list);

    useEffect(()=>{
        console.log(category);
        const result=list.filter((item)=>item.category==category);
        console.log(result);
        setProducts(result);
    },[category])
    return ( <div>
        <h3>Product List</h3>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.rating}</td>
                            <Link to={`/details/${item.id}`}>View</Link>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div> );
}

export default Products;