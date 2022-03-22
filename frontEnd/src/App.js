// import { Routes, Route, Link } from "react-router-dom"
import { useState } from "react"

import Footer from '../src/Components/utils/footer'
import Header from '../src/Components/utils/header'
import HomePage from "./Components/homePage";

function App() {
  return (
    <>
      <head> CHITTER </head>
      <Header />
      <HomePage />
      <Footer />
    </>
  )
};


export default App;