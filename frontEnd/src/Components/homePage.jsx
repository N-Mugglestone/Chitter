import '../Components/CSS/homepage.css'
// import Peeps from './utils/peeps.jsx'
import { Navigate } from 'react-router-dom'
import peepPhoto1 from '../images/peepPhoto1.jpg'
import peepPhoto2 from '../images/peepPhoto2.jpg'
import peepPhoto3 from '../images/peepPhoto3.jpg'

import Wall from './utils/Wall.jsx'


const HomePage = ({ loginUser }) => {
    return (
        <>
            <h1> CHITTER </h1>
            <div className="row">
                <div className="column">
                    <img src={peepPhoto1} alt='The sky' />
                    <img src={peepPhoto2} alt='The human' />
                    <img src={peepPhoto3} alt='The dog' />
                </div>
                <div className="column">
                    {/* {loginUser && <Wall />} */}
                    <Wall />
                    {/* {!loginUser && <Navigate to="/login" />} */}
                </div>

                <div className="column">


                </div>
            </div>


        </>
    )
}



export default HomePage