import PropTypes from 'prop-types';
import Peeps from '../Components/utils/peeps';


function TimeStamp({ peeps }) {
    return (
        <ul className="timeline">
            {peeps
                .sort((a, b) => new Date(b.created_on) - new Date(a.created_on))
                .map(({ id, user, created_on, content }) => (
                    <li key={id} className="timeStamp-item">
                        <Peeps user={user} createdOn={created_on}>
                            {content}
                        </Peeps>
                    </li>
                ))}
        </ul>
    );
}

TimeStamp.propTypes = {
    tweets: PropTypes.array,
};

export default TimeStamp;