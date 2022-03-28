import { useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useLocation } from 'react-router-dom'

const Login = ({ setLoginUser }) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [loggedIn, setLoggedIn] = useState(false)

    const location = useLocation()

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:4000/login', user)
        alert(res.data.message);
        setLoggedIn(res.data.user ? true : false);
        setUser({ email: '', password: '' });
        setLoginUser(res.data.user)
    }

    return (
        <>
            {loggedIn && <Navigate to='/' state={{ from: location }} />}
            <h3> Log into your account</h3>
            <form onSubmit={login}>
                <input type='email' id='sign-in-email' name='email' value={user.email} onChange={handleChange} placeholder='your email' />
                <br />
                <input type='password' id='sign-in-password' name='password' value={user.password} onChange={handleChange} placeholder='your password' />
                <br />
                <input type='submit' value='Login' />
            </form>
            <Link to='/register'>
                No account? Sign up now!
            </Link>
        </>
    )
}

export default Login;