import { useState } from "react"
import PropTypes from "prop-types";
// import { useParams } from 'react-router'
import axios from 'axios';

import '../CSS/addPeeps.css'
import Model from './Model.jsx';


const AddPeep = ({ user }) => {

    const { firstName, lastName, userHandle } = user;

    const { newAddPeep, setNewAddPeep } = useState('');  // Wrong brackets!
    const { addPeepMessage, setAddPeepMessage } = useState('');         // Wrong brackets!


    // Not needed as it isn't used
    // const { _id } = useParams();

    const makeNewPeep = async (e) => {
        e.preventDefault();

        const date = new Date().toISOString().toString();

        {/* setNewAddPeep is always going to be '' as it is never changed by the textarea */ }
        const newPeep = new Model(firstName, lastName, userHandle, date, newAddPeep)
        console.log(newPeep);
        if (newPeep.length > 0) {
            // This never enters - length is not the right thing to check on newPeep
            // You could use Object.keys(newPeep).length - that would be better
            try {
                const res = await axios.post('http://localhost:3000/addPeep/:_id', newPeep)     // localhost:3000!
                // The _id on the end of this is causing a problem
                setAddPeepMessage(res.data.message);
                setNewAddPeep('');
            } catch (err) {
                setAddPeepMessage('There are issues, try again')
            }
        }

    }

    // form action="/Wall" ---------push to json file? push to the wall array? 
    return (
        <>
            <div id="postComponent">
                <div>
                    <h1> Make a new Peep </h1>
                    <h2 className="peepName">{firstName} {lastName}</h2>
                    <h3 className="peepHandle">{userHandle}</h3>
                    <form onSubmit={makeNewPeep}>
                        <textarea type="text" placeholder="Write here..." value={newAddPeep}></textarea>
                        {/* There is nothing on the textarea to get the value the user types...does it need an onChange? */}
                        {addPeepMessage && <small>{addPeepMessage}</small>}
                        <br />
                        {/* <input id="newPeepButton" type="submit" value="Peep"></input> // inputs should self close */}
                        <input id="newPeepButton" type="submit" value="Peep" />
                    </form>
                </div>
            </div>
        </>
    )
}

AddPeep.propTypes = {
    user: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            userHandle: PropTypes.string
        })
    ])
}

export default AddPeep;


// const CreatePeep = ({ onSubmit }) => {
//     const [writerValue, setwriterValue] = useState('');

//     const handleWriterValueChange = (e) => {
//         setwriterValue(e.target.value)
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault('')

//         onSubmit(writerValue);
//         setwriterValue('');
//     };

//     return (
//         <form className="compose-form-submit" onSubmit={handleSubmit}>
//             <div className="compose-form-container">
//                 <textarea
//                     vlue={writerValue}
//                     onChange={handleWriterValueChange}
//                     className="compose-form-textarea"
//                     placeholder="Where am I?"
//                 />
//             </div>
//             <button className="compose-form-submit">Peep</button>
//         </form>
//     )
// }

// CreatePeep.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }

// export default CreatePeep;