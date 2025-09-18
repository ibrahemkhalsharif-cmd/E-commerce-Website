import {  useState } from 'react';
import styles from './authentication.module.css'
import { useNavigate } from 'react-router-dom';

export default function Login({ setActiveTab, activeTab }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
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
    
    const handleNavigateSignup =()=>{
        navigate('/signup');
        setActiveTab('signup');
    }
    const handleLoginClick =()=>{
        setActiveTab('login');
        handleLogin();
    }
    const handleForgotPasswordClick =()=>{
        setActiveTab('forgotPassword');
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
                    <button className={styles.forgetPasswordButton}onClick={handleForgotPasswordClick}>Forget password?</button>
                </div>
            
           
                <div className={styles.buttons}>
                    <button type="submit" id="submit" className={` ${activeTab == 'login' ?  styles.submit : styles.buttonNotActive}`} onClick={ handleLoginClick }>Login</button>
                    <button type="button" id='submit' className={` ${activeTab == 'signup' ?  styles.submit: styles.buttonNotActive}`} onClick={handleNavigateSignup}>Signup</button>
                </div>
            
    

        </div>
    );
}
