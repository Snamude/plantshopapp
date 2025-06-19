import React, { useState } from 'react'
import Data from '../../Data.json'
import Product from '../Components/Product'


const Products = () => {
    const [products, setProducts] = useState(Data.products)

    return (
        
<<<<<<< HEAD
     
        <div className="mt-2"><center><h2>Plants</h2></center>
=======
        <div className="mt-2"><center><h4>Plants</h4></center>
>>>>>>> origin/main
        
        <div className="container mt-4">
            <div className='row row-cols-1 row-cols-md-3 g-4'>
        
            {
                products.map(p => (

                     <Product product = {p}/>
                ))
            }
            
        </div>
        </div>
<<<<<<< HEAD
        </div>
    
=======
        </div> 
>>>>>>> origin/main
    )


 }

export default Products







