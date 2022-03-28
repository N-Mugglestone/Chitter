import PropTypes from 'prop-types';
import Peeps from "./Peeps";

const Wall = ({ peepsArray }) => {

    const peeps = peepsArray?.map(peep => {
        return <Peep key={peep?._id} peepContent={peep} />
    })

    return (
        <>
            {Peeps}
        </>
    )
}

Wall.prototype = {
    peepsArray: PropTypes.array
}

export default Wall;