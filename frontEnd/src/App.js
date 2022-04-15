import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react";

import Footer from '../src/Components/utils/footer.jsx';
import Header from '../src/Components/utils/header.jsx';
import HomePage from "./Components/homePage.jsx";
import Login from './Components/login.jsx';
import AddPeep from '../src/Components/utils/AddPeep.jsx'
import Register from './Components/Register.jsx';

function App() {

  const [loginUser, setLoginUser] = useState()

  return (
    <>
      <Router>
        < Header user={{ loginUser, setLoginUser }} />

        <Routes>

          <Route path="/" element={<HomePage loginUser={loginUser} />} />

          <Route path="/login" element={<Login user={{ loginUser, setLoginUser }} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addPeep/:_id" element={<AddPeep user={loginUser} />} />
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App;

