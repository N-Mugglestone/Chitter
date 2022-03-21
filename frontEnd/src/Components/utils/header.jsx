

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> &nbsp; </a>
                    <a class="nav-link disabled"> Sign-up </a>
                    <button class="navbar-toggler" type="button" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarAltMArkup" aria-expanded="false" aria-label="Toggle navigation" >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href='#'>Profile</a>
                            <a class="nav-link" href='#'>Edit</a>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Header;