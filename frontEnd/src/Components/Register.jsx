import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
            <h3> Create Account</h3>
            <p> Already have a account?  &nbpw; <Link to="/login"> Sign in </Link></p>
            <form onSubmit={register}>
                <label className="formLabel" htmlFor='firstName'>First name</label>
                <br />
                <input type="text" id="user-first-name" name="firstName" value={newUser.firstName} onChange={handleChange} placeholder="FullName" />
                <br />
                <label className="formLabel" htmlFor='lastName'>Last name</label>
                <br />
                <input type="email" id="user-last-name" name="lastName" value={newUser.lastName} onChange={handleChange} placeholder="Email" />
                <br />
                <label className="formLabel" htmlFor='email'>Email</label>
                <br />
                <input type="password" id="new-user-email" name="email" value={newUser.email} onChange={handleChange} placeholder="Password" />
                <br />
                <label className="formLabel" htmlFor='userHandle'>User handle</label>
                <br />
                <input type="password" id="new-user-handle" name="userhandle" value={newUser.userHandle} onChange={handleChange} placeholder="Password" />
                <br />
                <label className="formLabel" htmlFor='password'>Password</label>
                <br />
                <input type="password" id="new-user-password" name="password" value={newUser.password} onChange={handleChange} placeholder="Password" />
                <br />
                <imput id="registerButton" type="submit" value="Register" />
            </form>
        </>
    )
}

export default Register;