import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    //states used for the user to type in their info/for program to respond

    //function that handles when user clicks sign in
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            //send a login request and receive a response object
            const response = await fetch('/api/auth/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password }),  
            });
            //parse the response body as JSON
            const data = await response.json();
            if (response.ok) {
                navigate('/dashboard');
            } else {
                //can add more error messages later
                setError(data.message || "Login failed");
            }
        } catch (err) {
            setError("Server error");
        }
    };
    return(
        <div className="login-container">

            <h1 className="logo-title">
                <span>💰</span>
                <span className="logo-title-text">FinanceIT</span>
                <span>💰</span>   
            </h1>
            <div className="login-box">
                <h2>Sign in to your account</h2>
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSubmit}>
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type = "password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign In</button>
                </form>
                <div className="login-footer">
                    <div><a href="#">Forgot password?</a></div>
                    <div>New to FinanceIt? <a href="#">Create an account</a></div>
                </div>
            </div>
        </div>
    );
}

