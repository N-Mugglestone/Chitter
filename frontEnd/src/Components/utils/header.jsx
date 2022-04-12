import PropTypes from 'prop-types'
import { Router, Link, NavLink } from 'react-router-dom'
import '../CSS/header.css'

const Header = ({ user: { loginUser, setLoginUser } }) => {

    const logOut = () => {
        setLoginUser(null)
    }

    return (
        <>
            <nav>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href='#'>
                        </a>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" href="/"> <em>Home</em> </a>

                                {!loginUser && <a className="nav-link" href='/register'> <em>Register</em> </a>}

                                {!loginUser && <a className="nav-link" href='/login'> <em>Login</em> </a>}

                                {loginUser && <a className="nav-link" href='/' onClick={logOut}> <em>LogOut</em> </a>}

                                <a className="nav-link" href='/addPeep'> <em>addPeep</em> </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </nav>
        </>
    )


}

Header.propTypes = {
    user: PropTypes.exact({
        loginUser: PropTypes.object,
        setLoginUser: PropTypes.func
    })
}

export default Header;

