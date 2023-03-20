import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from 'react';
import { Outlet } from "react-router-dom";
import './Dashboard.css'
import Common from "../../components/common/Commonheader";

const FullDashboard = () => {
    const [navLinks, setnavLinks] = useState([
        { id: 1, link: 'Sales', icon: '/assets/revenue.png' },
        { id: 1, link: 'Users', icon: '/assets/man.png' },
        { id: 2, link: 'Products', icon: '/assets/boxes.png' },
        { id: 1, link: 'Reports', icon: '/assets/sale-report.png' },
        { id: 1, link: 'Account', icon: '/assets/verified-account.png' },
        { id: 1, link: 'Notification', icon: '/assets/notification1.png' },
    ])
    return ( 
        <div className="Dashboard">
            <div className="headersection">
                <Header />
            </div>
            <div className="sidebarsection">
                <Sidebar navlinks={navLinks} />
            </div>
            <div className="landingpage">
                <Common/>
                <Outlet />
            </div>
        </div>
     );
}
 
export default FullDashboard;