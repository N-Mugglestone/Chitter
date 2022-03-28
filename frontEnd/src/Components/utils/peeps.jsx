import PropTypes from 'prop-types'
import { useState } from 'react';


function Peeps({ peepBody }) {

    const { firstName, lastName, userHandle, timeStamp, peepContent } = peepBody;
    const formattedDate = new Date(timeStamp).toDateString()

    return (
        <>
            <div class="card">
                <div class="container">
                    <h4 className='PeepName'>{firstName} &nspw; {lastName}</h4>
                    <h2>{userHandle}</h2>
                    <h5> {formattedDate}</h5>
                    <p> {peepContent} </p>

                </div>
            </div>
        </>
    )
}


Peeps.propTypes = {
    peepContent: PropTypes.shape({
        _id: PropTypes.string,
        firstName: PropTypes.string,
        secondName: PropTypes.string,
        userHandle: PropTypes.string,
        timeStamp: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Date),
        ]),
        peepBody: PropTypes.string
    })
}




// Peeps.propTypes = {
//     user: PropTypes.string,
//     timeStamp: PropTypes.string
// }

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

// return (
//     <>
//         <div class="card">
//             <div class="container">
//                 <h4> Placeholder user </h4>
//                 <h5> PLaceolder Time Stamp</h5>
//                 <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                     Quaerat porro necessitatibus dolor veniam ipsum placeat quo
//                     dolores dolore. Modi, dicta. </p>

//             </div>
//         </div>
//     </>
// )