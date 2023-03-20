import { useState } from "react";

const Makeasale = ({ sale, close }) => {

    const [itemId, setitemid] = useState('')
    const [itemname, setitemname] = useState('')
    const [itemIdquantity, setitemquantity] = useState('')

    let  [total, settotal] = useState(0);

    // settotal(itemIdquantity *10)
        

    if (!sale) return null;

    

    return (


        <div className="makesale">
            <div className="addsale">
            <p onClick={close} className="closebtn">X</p>
                <form action="" className='form1'>
                    Customer Id <br/>
                    <input type="text" 
                        placeholder='customer id here' 
                    /> 
                    <input type="text " placeholder='customer name her' />
                    <br/><button>CONFIRM CUSTOMER</button>
                    <p>new custom</p>
                </form>
                <form action="" className='form2'>
                    Sale details<br/>
                    <input type="text" 
                    required 
                    value={itemId}
                    onChange={(e)=>  setitemid(e.target.value)}
                    placeholder='item id here' />

                    <input type="text" 
                    value={itemname}
                    onChange={(e)=>  setitemname(e.target.value)} placeholder='item name here' />
                    <input type="number" 
                    value={itemIdquantity}
                    onChange={(e)=>  setitemquantity(e.target.value)} />
                    <br/><span>total amount  </span><br/>
                    <button>place sale</button>
                </form>

                <table>
                       <tr>
                        <td>item id</td>
                        <td>item name</td>
                        <td>quantity</td>
                        <td>total price</td>
                        </tr>
                        <tr>
                            <td>{itemId}</td>
                            <td>{itemname}</td>
                            <td>{itemIdquantity}</td>
                            <td>{total}</td>
                        </tr>
                </table>


            </div>

        </div>
    );
}

export default Makeasale;