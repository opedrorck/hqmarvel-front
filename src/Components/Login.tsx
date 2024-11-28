import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Login.scss"

const Login: React.FC = () =>  {
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent)  => {
        e.preventDefault();
        navigate("/home");
    }

    return (
        <main className="main">
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit" className="btn">Login</button>

                <div className="register-link">
                    <p>Don't have an account? <Link to={"/signup"}>Register</Link></p>
                </div>
            </form>
        </div>
        </main>
    );
}


export default Login;