import './Notification.css';

const Notification = () => {
    return ( 
        <div className="notification">
            <div className="allnotification">
                <div className="oneNotification">
                    <p>new user requested for account</p>
                </div>
                <div className="oneNotification">
                    <p>new category added by admin</p>
                </div>

            </div>
        </div>
     );
}
 
export default Notification;