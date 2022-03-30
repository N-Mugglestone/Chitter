import '../Components/CSS/homepage.css'
import Peeps from './utils/peeps.jsx'
import peepPhoto1 from '../images/peepPhoto1.jpg'
import peepPhoto2 from '../images/peepPhoto2.jpg'
import peepPhoto3 from '../images/peepPhoto3.jpg'

import Wall from './utils/Wall.jsx'


const HomePage = () => {
    return (
        <body>
            <h1> CHITTER </h1>
            <div class="row">
                <div class="column">
                    <img src={peepPhoto1} alt='The sky' />
                    <img src={peepPhoto2} alt='The human' />
                    <img src={peepPhoto3} alt='The dog' />
                </div>
                <div class="column">
                    <Wall />
                </div>

                <div class="column">


                </div>
            </div>


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

    // < img src = { peepPhoto1 } alt = 'The sky' float = 'right' height = '400px' />
    //         <img src={peepPhoto2} alt='The dog' align='right' height='400px' />
    //         <img src={peepPhoto3} alt='The human' align='right' height='400px' />