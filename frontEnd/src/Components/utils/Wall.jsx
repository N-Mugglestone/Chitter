import PropTypes from 'prop-types';
import Peeps from "./peeps";
import peepsArrayExternal from './deploymentData.json'
import { useEffect, useState } from 'react';
import axios from 'axios';


const Wall = () => {
    const [peepsArray, setPeepsArray] = useState([]);

    useEffect(() => {
        const getPeeps = async () => {
            const response = await axios.get(`http://localhost:3000/`);
            setPeepsArray(response.data);
        }
        getPeeps();
    }, [])


    const peeps = peepsArray?.map(peep => {
        return <Peeps key={peep?._id} peepBody={peep} />
    })

    return (
        <>
            {peeps}
        </>
    )
}

Wall.prototype = {
    peepsArray: PropTypes.array
}

export default Wall;