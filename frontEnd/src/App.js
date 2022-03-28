import { BrowserRouter as Router, Routes, Route, Protec } from "react-router-dom"
import { useState } from "react";

import Footer from '../src/Components/utils/footer.jsx';
import Header from '../src/Components/utils/header.jsx';
import HomePage from "./Components/homePage.jsx";
import Login from './Components/Login.jsx';
import AddPeep from '../src/Components/utils/AddPeep.jsx'
import House from './Components/utils/House.jsx';
import Register from './Components/Register.jsx';



function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loggedInStatus, setLoggedInStatus] = useState(false);

  return (
    <>
      <Router>
        < Header user={loggedInStatus} setUserLoggedIn={setUserLoggedIn} setLoggedInStatus={setLoggedInStatus} userObject={userLoggedIn} />

        <Routes>

          <Route path='/' element={
            <>
              {loggedInStatus ? <HomePage component={<House currentUser={userLoggedIn} />} id={"House"} /> : <HomePage component={<Login setLoggedInStatus={setUserLoggedIn} loggedInStatus={loggedInStatus} />} />}
            </>
          } />

          <Route path="/register" element={<HomePage component={<Register />} />} />
          <Route path="/house" element={<HomePage component={<House />} />} />
          <Route path="/post/:_id" element={<HomePage component={<AddPeep user={userLoggedIn} />} />} />

        </Routes>
        <Footer />
      </Router>

    </>
  )
}


export default App;




// function App() {
//   return (
//     <>
//       <head> CHITTER </head>
//       <Header />
//       <HomePage />
//       <Footer />
//     </>
//   )
// };

// function App() {

//   const [peeps, setPeeps] = useState(mockData);

//   const handlePostPeeps = (content) => {
//     const newPeeps = {
//       content,
//       id: nanoid(),
//       created_on: Date(Date.now()),
//       user: CURRENT_USER,
//     };
//     setPeeps([...peeps, newPeeps])
//   }

//   return (
//     <div className="app">
//       <ComposeForm onSubmit={handlePostPeep} />
//       <div className="separator"></div>
//       <TimeStamp peeps={peeps} />
//     </div>
//   );
// };