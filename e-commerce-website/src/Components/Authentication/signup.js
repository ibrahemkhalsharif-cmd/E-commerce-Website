import { act, use, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './authentication.module.css'

export default function Signup({ setActiveTab, activeTab }) {

    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSignup = () => {

        const users = JSON.parse(localStorage.getItem('userData')) || [];
        const userData = {
            email: email,
            user: user,
            password: password
        };
        if (!email || !user || !password) {
            setError('All fields are required');
            return;
        }
        const user_exists = users.find((user) => user.email === email);
        if (user_exists) {
            setError('User already exists');
            return;
        }
        users.push(userData);
        localStorage.setItem('userData', JSON.stringify(users));

        setEmail('');
        setUser('');
        setPassword('');
        setError('');

    }
    const handleNavigate =()=>{
        navigate('/login');
        setActiveTab('login');
    }

    return (
        <div className={styles.container}>
            <h1>Signup</h1>
            <p className={styles.error}>{error}</p>
            <input type="email" id="email" placeholder="Email" className="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
            <input id='user' className={styles.user} value={user} placeholder='User' onChange={(e) => { setUser(e.target.value) }}></input>

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />



            <div className={styles.buttons}>
                <button type="button" id="submit" className={ `${activeTab == 'login' ? styles.submit : styles.buttonNotActive }`} onClick={handleNavigate}>Login</button>
                <button type="submit" id='submit' className={`${activeTab == 'signup' ? styles.submit : styles.buttonNotActive}`} onClick={() => {handleSignup();}}>Signup</button>
            </div>

        </div>
    );
}