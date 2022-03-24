import '../Components/CSS/homepage.css'
import Peeps from './utils/peeps'
import peepPhoto1 from '../images/peepPhoto1.jpg'
import peepPhoto2 from '../images/peepPhoto2.jpg'
import peepPhoto3 from '../images/peepPhoto3.jpg'


const HomePage = () => {
    return (
        <body>
            <h1> CHITTER </h1>
            <Peeps />
            <Peeps />
            <img src={peepPhoto1} alt='The sky' align='right' height='400px' />
            <img src={peepPhoto2} alt='The sky' align='right' height='400px' />
            <img src={peepPhoto3} alt='The sky' align='right' height='400px' />
        </body>
    )
}






export default HomePage


// const Peeps = () => {
//     return (
//         <div className='peeps'>
//             <newPeeps peep={peep} />
//         </div >
//     )
// }


// import { useState } from 'react'

// import Peeps from './utils/peeps'
// import Header from '../Components/utils/header'
// import Footer from '../Components/utils/footer'

// const HomePage = () => {
// const [peep, setPeeps] = useState([
//     { title: 'mew peep', body: 'lorem ipsum...', author: 'harry', id: 1 }
// ]);