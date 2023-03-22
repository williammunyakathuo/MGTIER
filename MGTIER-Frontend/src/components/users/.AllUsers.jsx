import { customersData } from '../../dummy'
import Adduser from './Adduser';
import { useState } from 'react';
import './Users.css'
const Users = () => {

    const [newuser, setnewuser] = useState(false)
    return (
        <div className="users">
            <div className="sales">
                <div className="userstab">
                    <p>All users</p>
                    <p>Customers</p>
                    <p>Admins</p>
                    <p>Clerks</p>
                </div>
                <div className="salestop">
                    <input type="text" placeholder='Search for user' />
                    <button onClick={() => setnewuser(true)}>Add user</button>
                </div>

                <div className="salesdisplay">
                    <table>
                        <thead>
                            <th>id</th>
                            <th>itemname</th>
                            <th>customerName</th>
                            <th>dateOfSale</th>

                        </thead>

                        {customersData.map((customer) => (
                            <tr className='sale' key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.phone}</td>

                            </tr>

                        ))}

                    </table>
                </div>

            </div>
            <Adduser newuser={newuser} close={() => setnewuser(false)} />
        </div>
    );
}

export default Users;