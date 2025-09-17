import styles from './authentication.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function ForgotPassword({ setActiveTab, activeTab }) {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resetStage, setResetStage] = useState(1);
    const navigate = useNavigate();
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
            setPassword('');
            setError('');
            setResetStage(1);
            navigate('/login');




        }
    }
    return (
        <div className={styles.container}>
            <h1>Forgot Password</h1>
            <p className={styles.error}>{error}</p>
            <input type='email' placeholder='Email' className={styles.email} onChange={(e) => { setEmail(e.target.value) }}></input>
            {resetStage == 2 && (
                <input
                    type="password"
                    placeholder="New Password"
                    className={styles.password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            )}
            <button className={styles.resetPassword + ' ' + styles.submit} onClick={handleForgotPassword}>{resetStage == 1 ? "Next" : "Reset password"}</button>

        </div>
    );
}