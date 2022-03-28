import '../CSS/header.css'

const Header = () => {
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
                            </div>
                        </div>
                    </div>
                </nav>
            </nav>
        </>
    )
}

export default Header;

