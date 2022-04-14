import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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
                        <Link className="navbar-brand" to="/">                     </Link>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link" to="/"> <em>Home</em> </Link>

                                {!loginUser && <Link className="nav-link" to="/register"> <em>Register</em> </Link>}

                                {!loginUser && <Link className="nav-link" to="/login"> <em>Login</em> </Link>}

                                {loginUser && <Link className="nav-link" to="/" onClick={logOut}> <em>LogOut</em> </Link>}

                                {loginUser && <Link className="nav-link" to={`/addPeep/${loginUser._id}`}> <em>addPeep</em> </Link>}
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

