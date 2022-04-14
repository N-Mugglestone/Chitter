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

        const newPeep = new Model(firstName, lastName, userHandle, date, newAddPeep)

        if (Object.keys(newPeep).length) {
            try {
                const res = await axios.post('http://localhost:3000/addPeep:_id', newPeep)
                setAddPeepMessage(res.data.message);
                setNewAddPeep('');
            } catch (err) {
                setAddPeepMessage('There are issues, try again')
            }
        }
    }


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