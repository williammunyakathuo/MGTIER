import logo from '../../assets/png/logo-no-background.png'
import notification from '../../assets/icons/notification.png'
import users from '../../assets/icons/verified-account.png'
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div className="headerCont">
                <div className="headerLogo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="headerSearch">
                    <input type="text" placeholder="Search" />
                    <p>MGTIER Dashboard</p>
                </div>
                
                <div className="headerUser">
                    <img src={notification} alt="notificatioa" />
                    <img src={users} alt="user" />
                </div>
            </div>
        </div>
    );
}

export default Header;