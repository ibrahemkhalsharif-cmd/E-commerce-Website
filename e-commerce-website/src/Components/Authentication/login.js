import { act, use, useState } from 'react';
import styles from './authentication.module.css'
import { useNavigate } from 'react-router-dom';

export default function Login({ setActiveTab, activeTab }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [resetStage, setResetStage] = useState(1);
    const [action, setAction] = useState('Login');
    const [user, setUser] = useState('');
    const navigate = useNavigate();


    const handleLogin = () => {

        if (action == "Login") {
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
    }
    const handleForgotPassword = () => {
        const users = JSON.parse(localStorage.getItem('userData')) || [];
        if (resetStage == 1) {
            const user_found = users.find((user) => user.email == email);
            if (user_found) {
                setError('');
                setResetStage(2);
            }
            else {
                setError('Email not found');
            }


        }
        else if (resetStage == 2) {
            users.forEach((user) => {
                if (user.email == email) {
                    user.password = password;
                }
            });

            localStorage.setItem('userData', JSON.stringify(users));
            alert('Password reset successful!');
            setEmail('');
            setUser('');
            setPassword('');
            setError('');
            setAction('Login');
            setResetStage(1);
        }
    }
    return (
        <div className={styles.container}>
            <h1>{action}</h1>
            <p className={styles.error}>{error}</p>
            <input type="email" id="email" placeholder="Email" className={styles.email} value={email} onChange={(e) => { setEmail(e.target.value) }}></input>

            {!(action == "Forgot password" && resetStage == 1) && (
                <input
                    type="password"
                    placeholder="Password"
                    className={styles.password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            )}
            {action == 'Login' && (
                <div className={styles.forgotpassword}>
                    <a href='#' className={styles.forgetpassword} onClick={() => { setAction("Forgot password") }}>Forgot Password?</a>
                </div>
            )}
            {!(action == "Forgot password") && (
                <div className={styles.buttons}>
                    <button type="submit" id="submit" className={`${styles.submit} ${activeTab == 'login' ? styles.login : styles.buttonnotactive}`} onClick={() => { setActiveTab("login"); handleLogin(); }}>Login</button>
                    <button type="submit" id='submit' className={`${styles.submit} ${activeTab == 'signup' ? styles.signup : styles.buttonnotactive}`} onClick={() => {
                        navigate('/signup');
                        setActiveTab('signup');


                    }}>Signup</button>
                </div>
            )}
            {(action == "Forgot password") && (
                <button className={styles.resetPassword + ' ' + styles.submit} onClick={handleForgotPassword}>{resetStage == 1 ? "Next" : "Reset password"}</button>
            )}




        </div>
    );
}