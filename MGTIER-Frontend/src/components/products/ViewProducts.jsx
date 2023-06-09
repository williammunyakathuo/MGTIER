import { useState } from "react";
import { productsData } from "../../dummy";
import Addproduct from "./AddProduct";
import './Products.css'

const ViewProducts = () => {
    const [newproduct, setnewproduct] = useState(false)

    return ( 
        <div className="ViewProducts">
            <div className="products">
                <div className="producttab">
                <select name="" id="">
                    <option value="">All categories</option>
                    {productsData.map((category)=>(
                       
                            <option value={category.category}>{category.category}</option>
                        
                    ))}
                    </select>
                </div>
                <div className="top">
                    <input type="text" placeholder='Search for product' />
                    <button onClick={() => setnewproduct(true)}>Add product</button>
                    <button onClick={() => setnewproduct(true)}>Add category</button>
                </div>

                <div className="salesdisplay">
                    <table>
                        <thead>
                            <th>id</th>
                            <th>product name</th>
                            <th>category</th>
                            <th>price</th>

                        </thead>

                        {productsData.map((product) => (
                            <tr className='sale' key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>

                            </tr>

                        ))}

                    </table>
                </div>

            </div>
            <Addproduct newproduct={newproduct} close={() => setnewproduct(false)} />
        
        </div>
     );
}
 
export default ViewProducts;