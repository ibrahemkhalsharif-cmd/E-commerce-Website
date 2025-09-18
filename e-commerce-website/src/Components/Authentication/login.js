import { useState } from 'react';
import styles from './authentication.module.css'
import { useNavigate, useLocation } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();

    const handleLogin = () => {
        const users = JSON.parse(localStorage.getItem('userData')) || [];
        const user_found = users.find((user) => user.email === email && user.password === password);
        if (user_found) {
            alert('Login successful!');
            setEmail('');
            setPassword('');
            setError('');
        }
        else {
            setError('Invalid email or password');

        }
    }

    const handleNavigateSignup = () => {
        navigate('/signup');

    }
    const handleLoginClick = () => {

        handleLogin();
    }
    const handleForgotPasswordClick = () => {

        navigate('/forgot-password');

    }
    return (
        <div className={styles.container}>
            <h1>Login</h1>
            <p className={styles.error}>{error}</p>
            <input type="email" id="email" placeholder="Email" className={styles.email} value={email} onChange={(e) => { setEmail(e.target.value) }}></input>

            <input
                type="password"
                placeholder="Password"
                className={styles.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <div className={styles.forgotPassword}>
                <button className={styles.forgetPasswordButton} onClick={handleForgotPasswordClick}>Forget password?</button>
            </div>
            <div className={styles.buttons}>
                <button type="submit" id="submit" className={` ${currentPath == "/login" ? styles.submit : styles.buttonNotActive}`} onClick={handleLoginClick}>Login</button>
                <button type="button" id='submit' className={` ${currentPath == "/signup" ? styles.submit : styles.buttonNotActive}`} onClick={handleNavigateSignup}>Signup</button>
            </div>

        </div>
    );
}
