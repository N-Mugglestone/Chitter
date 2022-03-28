import { useState } from "react"
import PropTypes from "prop-types";
import axios from 'axios';

import Model from './Model.jsx';


const AddPeep = ({ user }) => {

    const { firstName, lastName, userHandle } = user;

    const { newPost, setNewPost } = useState('');
    const { postMessage, setPostMessage } = useState('');

    const makeNewPost = async (e) => {
        e.preventDefault();

        const date = new Date().toISOString().toString();

        const newPeep = new Model(firstName, lastName, userHandle, date, newPost)

        if (newPost.length > 0) {
            try {
                const res = await axios.post('http://localhost:27017/post/:_id', newPeep)
                setPostMessage(res.data.message);
                setNewPost('');
            } catch (err) {
                setPostMessage('There are issues, try again')
            }
        }

    }


    return (
        <>
            <div id="postComponent">
                <div>
                    <h2 className="peepName">{firstName} &nspw; {lastName}</h2>
                    <h3 className="peepHandle">{userHandle}</h3>
                    <form onSubmit={makeNewPost}>
                        <textarea type="text" placeholder="Write here..." value={newPost}></textarea>
                        {postMessage && <small>{postMessage}</small>}
                        <div id="postWarning"></div>
                        <input id="newPostButton" type="submit" value="post"></input>
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