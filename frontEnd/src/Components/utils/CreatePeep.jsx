import { useState } from "react"
import PropTypes from "prop-types";


const CreatePeep = () => {
    const [writerValue, setwriterValue] = useState('');

    const handleWriterValueChange = (e) => {
        setwriterValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault('')

        outSubmit(writerValue);
        setwriterValue('');
    };

    return (
        <form className="compose-form-submit" onSubmit={handleSubmit}>
            <div className="compose-form-container">
                <textarea
                    vlue={writerValue}
                    onChange={handleWriterValueChange}
                    className="compose-form-textarea"
                    placeholder="Where am I?"
                />
            </div>
            <button className="compose-form-submit">Peep</button>
        </form>
    )
}

ComposeForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default CreatePeep;