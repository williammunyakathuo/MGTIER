import './Sales.css'
import { salesData } from '../../dummy'
import Makeasale from './MakeSale';
import { useState } from 'react';

const AllSales = () => {
    const [sale, setsale] = useState(false)


    return (
        <div className="allSales">

            <div className="sales">
                <div className="salestop">
                    <input type="text" placeholder='search' />
                    <button onClick={()=> setsale(true)}>make a sale</button>
                </div>
                <div className="salesdisplay">
                    <table>
                        <thead>
                            <th>itemname</th>
                            <th>customerName</th>
                            <th>dateOfSale</th>
                            <th>status</th>
                        </thead>

                        {salesData.map((sale) => (
                            <tr className='sale' key={sale.id}>
                                <td>{sale.itemname}</td>
                                <td>{sale.customerName}</td>
                                <td>{sale.dateOfSale}</td>
                                <td>sold</td>
                            </tr>
                        ))}
                    </table>
                </div>
                
            </div>

           <Makeasale sale={sale} close={()=> setsale(false)} />
            

            <div className="confirmsale">

            </div>

        </div>
    );
}

export default AllSales;