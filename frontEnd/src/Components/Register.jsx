import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CSS/register.css'

const Register = () => {
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userHandle: '',
        password: ''
    });

    const register = async (e) => {
        e.preventDefault()
        const { firstName, lastName, email, userHandle, password } = newUser;
        if (firstName && lastName && email && userHandle && password) {
            try {
                const res = await axios.post('http://localhost:3000/register', newUser)
                setNewUser({
                    firstName: '',
                    lastName: '',
                    email: '',
                    userHandle: '',
                    password: '',
                })
                return;
            } catch (err) {

            }
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value
        });
    }

    return (
        <>
            <h1> Create Account</h1>
            <form onSubmit={register}>
                <label className="formLabel" htmlFor='firstName'>First name</label>
                <br />
                <input type="text" id="user-first-name" name="firstName" value={newUser.firstName} onChange={handleChange} placeholder="FirstName" />
                <br />
                <label className="formLabel" htmlFor='lastName'>Last name</label>
                <br />
                <input type="text" id="user-last-name" name="lastName" value={newUser.lastName} onChange={handleChange} placeholder="LastName" />
                <br />
                <label className="formLabel" htmlFor='email'>Email</label>
                <br />
                <input type="email" id="new-user-email" name="email" value={newUser.email} onChange={handleChange} placeholder="Email" />
                <br />
                <label className="formLabel" htmlFor="userHandle">User handle</label>
                <br />
                <input type="text" id="user-handle-name" name="userHandle" value={newUser.userHandle} onChange={handleChange} placeholder="UserHandle" />
                <br />
                <label className="formLabel" htmlFor='password'>Password</label>
                <br />
                <input type="password" id="new-user-password" name="password" value={newUser.password} onChange={handleChange} placeholder="Password" />
                <br />
                <input id="registerButton" type="submit" value="Register" />
            </form>
            <p> Already have a account? <Link to="/login"><br /> Sign in </Link></p>
        </>
    )
}

export default Register;