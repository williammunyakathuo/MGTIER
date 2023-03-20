const Adduser = ({newuser, close}) => {
    if (!newuser) return null;

    return (
        <div className="adduser">
            <div className="user">
                <p onClick={close} className="closebtn">X</p>
                <form action="" className='addone'>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" placeholder="name here please" /><br />
                    <label htmlFor="email">Email</label><br />
                    <input type="text" placeholder="email here please" /><br />
                    <label htmlFor="phone">Phone number</label><br />
                    <input type="text" placeholder="name here please" /><br />
                    <label htmlFor="designation">designation</label><br />
                    <select name="" id="">
                        <option value="admin">admin</option>
                        <option value="customer">customer</option>
                        <option value="clerk">clerk</option>
                    </select><br />
                    <button>Add user</button>
                </form>
            </div>


        </div>
    );
}

export default Adduser;