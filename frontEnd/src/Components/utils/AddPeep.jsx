import { useState } from "react"
import PropTypes from "prop-types";
import axios from 'axios';

import '../CSS/addPeeps.css'
import Model from './Model.jsx';


const AddPeep = ({ user }) => {

    const { firstName, lastName, userHandle } = user;

    const [newAddPeep, setNewAddPeep] = useState('');
    const [addPeepMessage, setAddPeepMessage] = useState('');


    const makeNewPeep = async (e) => {
        e.preventDefault();
        const date = new Date().toISOString().toString();

        const newPeep = new Model(firstName, lastName, userHandle, date, newAddPeep)

        if (Object.keys(newPeep).length) {
            try {
                const res = await axios.post('http://localhost:3000/addPeep/', newPeep)
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
                    <h3 className="userHandle">{userHandle}</h3>
                    <form onSubmit={makeNewPeep}>
                        <textarea
                            onChange={e => setNewAddPeep(e.target.value)} type="text" placeholder="Write here..." value={newAddPeep} ></textarea>
                        {addPeepMessage && <small>{addPeepMessage}</small>}
                        <br />
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