import './Sidebar.css'
import { NavLink } from 'react-router-dom';
import Dash from '../common/dash';


const Sidebar = ({navlinks}) => {
    
    return ( 
        <div className="sidebar">
            
           <div className="sidebarlinks">
            <NavLink to='/dashboard/'>Dashboard</NavLink>
            {navlinks.map((links)=>(
                <NavLink to={links.link}>
                    <img src={process.env.PUBLIC_URL + links.icon} alt="logo" />
                    {links.link}
                </NavLink>
            ))}
           </div>
           
            
        </div>
     );
}
 
export default Sidebar;