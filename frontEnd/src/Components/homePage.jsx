import '../Components/CSS/homepage.css'
import Peeps from './utils/peeps'
// import { useState } from 'react'

// import Peeps from './utils/peeps'
// import Header from '../Components/utils/header'
// import Footer from '../Components/utils/footer'

// const HomePage = () => {
// const [peep, setPeeps] = useState([
//     { title: 'mew peep', body: 'lorem ipsum...', author: 'harry', id: 1 }
// ]);


const HomePage = () => {
    return (
        <body>
            <h1> CHITTER </h1>
            <Peeps />
        </body>
    )
}




// const Peeps = () => {
//     return (
//         <div className='peeps'>
//             <newPeeps peep={peep} />
//         </div >
//     )
// }

export default HomePage