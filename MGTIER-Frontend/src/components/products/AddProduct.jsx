const Addproduct = ({newproduct, close}) => {
    if(!newproduct) return null
    return (
        <div className="addproducts">
             <div className="user">
                <p onClick={close} className="closebtn">X</p>
                <form action="" className='addone'>
                    <label htmlFor="name">Name</label><br />
                    <input type="text"  /><br />
                    <label htmlFor="email">Product name</label><br />
                    <input type="text" /><br />
                    <label htmlFor="phone">price</label><br />
                    <input type="text" /><br />
                    <label htmlFor="designation">category</label><br />
                    <select name="" id="">
                        <option value="admin">Electronic</option>
                        <option value="customer">food</option>
                        <option value="clerk">clothes</option>
                        <option value="clerk">jewerally</option>
                    </select><br />
                    <button> product</button>
                </form>
            </div>

        </div>
     );
}
 
export default Addproduct;