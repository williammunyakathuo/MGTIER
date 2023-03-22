import './Account.css'
import accounticon from '../../assets/icons/verified-account.png'
// import FileRename from '@mui/icons-material/DriveFileRenameOutline';
const Account = () => {
    return (

        <div className="account">
            <div className="profile">
                <img src={accounticon} alt="profile img here" />
                <div className="names">
                    <div><p>First name </p> <span>WILLIAM JAMES</span> </div>
                    <div><p>Second name </p> <span>MUNYAKA </span></div>
                    <div><p>Surname </p> <span>THUO</span></div>
                    <div><p>Email </p> <span>example@gmail.com</span></div>
                    <div><p>Phone </p> <span>0000000000 </span></div>
                    <div><p>Designation </p> <span>admin</span></div>
                    <div><p>Account descrition </p> <span>WILLIAM JAMES</span></div>

                </div>
            </div>
            {console.log(window.location.href)}

        </div>
      
    );
}

export default Account;