import PropTypes from 'prop-types'
import { Router, Link, NavLink } from 'react-router-dom'
import '../CSS/header.css'

const Header = ({ setUserLoggedIn, setLoggedInStatus, userObject }) => {

    const logOut = () => {
        setUserLoggedIn({});
        setLoggedInStatus(false);
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

                                <a className="nav-link" href='/register'> <em>Register</em> </a>

                                <a className="nav-link" href='/login'> <em>Login</em> </a>

                                <a className="nav-link" href='/' onClick={logOut}> <em>LogOut</em> </a>

                                <a className="nav-link" href='/addPeep'> <em>addPeep</em> </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </nav>
        </>
    )

    // return (
    // <>
    //     <nav>
    //         <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //             <div class="container-fluid">
    //                 <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //                     <div class="navbar-nav">

    //                         <NavLink class="nav-link" to="/register"> Register</NavLink>



    //                         <NavLink class="nav-link" to="/"> Home </NavLink>



    //                         <NavLink class="nav-link" to="/login"> Login </NavLink>



    //                         <NavLink class="nav-link" to="/" onClick={logOut}> logOut</NavLink>



    //                         <NavLink class="nav-link" to={`/post/${userObject?._id}`}> addPeep </NavLink>
    //                     </div>
    //                 </div>
    //             </div>
    //         </nav>
    //     </nav >
    //</>
    // )


}

Header.propTypes = {
    user: PropTypes.bool,
    setUserLoggedIn: PropTypes.func,
    setUserLoggedInStatus: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ])
}

export default Header;

