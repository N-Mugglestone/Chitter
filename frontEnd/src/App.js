// import { Routes, Route, Link } from "react-router-dom"
import { useState } from "react";
import Footer from '../src/Components/utils/footer';
import Header from '../src/Components/utils/header';
import HomePage from "./Components/homePage";
import TimeStamp from '../src/Components/TimeStamp'
import CreatePeep from '../src/Components/utils/CreatePeep'
import mockData from '../src/mockData.json'


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