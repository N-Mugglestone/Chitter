const Home = ({ setLoginUser, user }) => (
    <>
        <h1>Welcome to the homepage, {user.name}, which is only visible when you are logged in</h1>
        <br />
        <p>Your email address is: {user.email}</p>
        <button onClick={() => setLoginUser({})}>Log out</button>
    </>
);

export default Home;