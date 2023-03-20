import { Link } from "react-router-dom";

const Signup = () => {
    return ( 
        <div className="signup">
            <div className="loginForm">
            <img src={process.env.PUBLIC_URL + '/logo-color.png'} alt="logo" />
                <b>SIGN UP</b>
                <input type="text" placeholder="Enter your full name here"/>
                <input type="text" placeholder="Enter email here"/>
                <input type="text" placeholder="Enter your designation here"/>
                
                <Link to='/' className="logina">Request for account</Link> 
                <p>Already have an account? <Link to='/'> Login here</Link></p>
            </div>
        </div>
     );
}
 
export default Signup;