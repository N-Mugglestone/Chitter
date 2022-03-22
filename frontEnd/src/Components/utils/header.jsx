import '../CSS/header.css'

const Header = () => {
    return (
        <>
            <title> Chitter </title>
            <header>
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link" href="#">Home</a>
                                <a class="nav-link" href='#'>Register</a>
                                <a class="nav-link" href='#'>Login</a>
                                <a class="nav-link" href='#'>Logout</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;