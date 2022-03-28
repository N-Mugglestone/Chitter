import PropTypes from 'prop-types';
import Peeps from "./Peeps";

const Wall = ({ peepsArray }) => {

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