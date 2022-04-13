import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react";

import Footer from '../src/Components/utils/footer.jsx';
import Header from '../src/Components/utils/header.jsx';
import HomePage from "./Components/homePage.jsx";
import Login from './Components/login.jsx';
import AddPeep from '../src/Components/utils/AddPeep.jsx'
import Register from './Components/Register.jsx';
// import Wall from "./Components/utils/Wall.jsx";



function App() {

  const [loginUser, setLoginUser] = useState()

  return (
    <>
      <Router>
        < Header user={{ loginUser, setLoginUser }} />

        <Routes>

          <Route path="/" element={<HomePage loginUser={loginUser} />} />
          {/*
          //   <>
          //     {loginUser ? <HomePage component={<Wall currentUser={loginUser} />} id={"Wall"} /> : < Navigate to="/login" />}
          //   </>
          // } />
  */}
          <Route path="/login" element={<Login user={{ loginUser, setLoginUser }} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addPeep" element={<AddPeep user={loginUser} />} />
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
        <Footer />
      </Router>

    </>
  )
}


export default App;






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




//function App() {
//   return (
//     <>
//       <head> CHITTER </head>
//       <Header />
//       <HomePage />

//       <Footer />
//     </>
//   )
// };