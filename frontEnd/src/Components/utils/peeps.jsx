import PropTypes from 'prop-types'
import { useState } from 'react'

function Peeps(props) {
    const { user, timeStamp, message } = props

    return (
        <>
            <div class="card">
                <div class="container">
                    <h4> User Name </h4>
                    <h5> Time Stamp</h5>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quaerat porro necessitatibus dolor veniam ipsum placeat quo
                        dolores dolore. Modi, dicta. </p>

                </div>
            </div>
        </>
    )
}




Peeps.propTypes = {
    user: PropTypes.string,
    timeStamp: PropTypes.string
}

export default Peeps;


// const newPeeps = (props) => {
//     const peeps = props.peeps
//     return (
//         <div className="peeps">
//             {Peeps.map((peep) => (
//                 <div className="peep-message" key={peep.id}>
//                     <h2>{peep.user}</h2>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default newPeeps;