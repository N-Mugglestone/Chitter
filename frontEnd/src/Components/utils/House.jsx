import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Wall from './Wall';

const House = ({ currentUser }) => {

    const [peepsError, setPeepsError] = useState('');
    const [allPeeps, setAllPeeps] = useState({});

    const getPeeps = async () => {
        try {
            const res = await axios.get('http://localhost:4000/Display');
            setAllPeeps(res.data);
        } catch (err) {
            setPeepsError('No peeps today')
        }
    }

    useEffect(() => {
        getPeeps();
    }, [])

    return (
        <>
            <div>
                {currentUser ? <h2> Hello {currentUser.firstName}here are some peeps.</h2> : <h2> Welcome, here are some peeps</h2>}
                {!allPeeps && <p>I am trying here, give me a moment...</p>}
            </div>
            <div>
                {allPeeps.length > 0 && <Wall peepsArray={allPeeps} />}
            </div>
        </>
    )
}

House.propTypes = {
    currentUser: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            email: PropTypes.string,
            userHandle: PropTypes.string
        })
    ])
}
export default House;