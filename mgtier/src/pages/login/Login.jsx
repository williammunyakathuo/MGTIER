import { Link } from "react-router-dom";

const Login = () => {
    return (  
        <div className="login">
             <div className="loginForm">
            <img src={process.env.PUBLIC_URL + '/logo-color.png'} alt="logo" />
                <p><b>LOGIN</b></p>
                <input type="text" placeholder="enter your id or name here"/>
                <input type="text" placeholder="enter password here"/>
                <Link to='/dashboard' className="logina"> LOGIN </Link>
                <p>New user <Link to='/signup'> Request for an account here</Link></p>
            </div>
        </div>
    );
}
 
export default Login;