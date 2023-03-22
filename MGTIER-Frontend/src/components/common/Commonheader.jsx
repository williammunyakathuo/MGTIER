import './Common.css'
import { useLocation } from 'react-router-dom';


const Common = () => {
    const location = useLocation();
    return (

        <div className="common">
            <div className="commonheader">
                <div>Karibu <span>William(superadmin)</span></div>
                <div className='active'>
                    <h2> {location.pathname}</h2>
                </div>
            </div>
        </div>);
}

export default Common;