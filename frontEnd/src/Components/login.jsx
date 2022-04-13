import { useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom'
import './CSS/login.css'

const Login = ({ user: { loginUser, setLoginUser } }) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    // const [loggedIn, setLoggedIn] = useState(false)

    // const location = useLocation()

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:3000/login', user)
        alert(res.data.message);
        // setLoggedIn(res.data.user ? true : false);
        setUser({ email: '', password: '' });
        setLoginUser(res.data.user);
        // return (
        //     <Navigate to={res.data.user ? `/` : `/login`} />
        // )
    }

    return (
        <>
            {/* {loggedIn && <Navigate to='/' state={{ from: location }} />} */}
            {loginUser && <Navigate to="/" />}
            <h1> Log into your account</h1>
            <form onSubmit={login}>
                <label className="formLabel" htmlFor='Email'>Email</label>
                <br />
                <input type='email' id='sign-in-email' name='email' value={user.email} onChange={handleChange} placeholder='email' />
                <br />
                <label className="formLabel" htmlFor='password'>Password</label>
                <br />
                <input type='password' id='sign-in-password' name='password' value={user.password} onChange={handleChange} placeholder='password' />
                <br />
                <input type='submit' value='Login' />
            </form>
            <Link to='/register'>
                <p>No account? Sign up now!</p>
            </Link>

        </>
    )
}

export default Login;


