import PropTypes from 'prop-types'


function Peeps({ peepBody }) {

    const { firstName, userHandle, timeStamp, peepContent } = peepBody;
    const formattedDate = new Date(timeStamp).toDateString()

    return (
        <>
            <div className="card">
                <div className="container">
                    <h4 className='PeepName'>{firstName}</h4>
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



export default Peeps;