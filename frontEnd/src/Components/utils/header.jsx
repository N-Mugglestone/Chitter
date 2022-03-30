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
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href='#'>
                        </a>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link" href="/"> <bold>Home</bold> </a>

                                <a class="nav-link" href='/register'> <bold>Register</bold> </a>

                                <a class="nav-link" href='/login'> <bold>Login</bold> </a>

                                <a class="nav-link" href='/' onClick={logOut}> <bold>LogOut</bold> </a>

                                <a class="nav-link" href='/addPeep'> <bold>addPeep</bold> </a>
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

