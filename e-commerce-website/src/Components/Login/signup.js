import { act, use, useState } from 'react';
import './login.css'

export default function Signup() {
    const [action, setAction] = useState('Login');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [resetStage, setResetStage] = useState(1);

    const handleSignup = () => {
        if (action == "Signup") {
            const users = JSON.parse(localStorage.getItem('userData')) || [];
            const userData = {
                email: email,
                user: user,
                password: password
            };
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
    }
    const handleLogin = () => {

        document.querySelector('.hidden').classList.add('hidden');
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
        <div className="container">
            <h1>{action}</h1>
            <p className='error'>{error}</p>
            <input type="email" id="email" placeholder="Email" className="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
            <input id='user' className={action == "Signup" ? "user" : 'hidden'} value={user} placeholder='User' onChange={(e) => { setUser(e.target.value) }}></input>
            {!(action === "Forgot password" && resetStage === 1) && (
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            )}
            <div className='forgot-password'>
                <a href='#' className={action == "Signup" || action == "Forgot password" ? 'hidden' : "forgot-password"} onClick={() => { setAction("Forgot password") }}>Forgot Password?</a>
            </div>
            {!(action == "Forgot password") && (
                <div className='buttons'>
                    <button type="submit" id="submit" className={action == 'Login' ? 'submit login' : 'button-notacitve'} onClick={() => { setAction("Login"); handleLogin(); }}>Login</button>
                    <button type="submit" id='submit' className={action == 'Signup' ? 'submit signup' : 'button-notacitve'} onClick={() => {
                        setAction("Signup"); handleSignup();
                    }}>Signup</button>
                </div>
            )}
            {(action == "Forgot password") && (
                <button className='reset_password submit' onClick={handleForgotPassword}>{resetStage == 1 ? "Next" : "Reset password"}</button>
            )}




        </div>
    );
}