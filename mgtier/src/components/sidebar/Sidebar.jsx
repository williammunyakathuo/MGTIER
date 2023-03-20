import './Sidebar.css'
import { NavLink } from 'react-router-dom';

const Sidebar = ({navlinks}) => {
    
    return ( 
        <div className="sidebar">
            
           <div className="sidebarlinks">
            {navlinks.map((links)=>(
                <NavLink to={links.link}>
                    <img src={process.env.PUBLIC_URL + links.icon} alt="logo" />
                    {links.link}
                </NavLink>
            ))}
           </div>
           <div className="settings">
            seting
           </div>
            
        </div>
     );
}
 
export default Sidebar;