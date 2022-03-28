import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({
    first: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    date: { type: Date, required: true },
    messagecontent: { type: String, required: true }
});

const Peep = new mongoose.model("Peep", peepSchema)

export default Peep;