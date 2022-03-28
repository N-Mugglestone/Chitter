import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userHandle: { type: String, required: true },
    timeStamp: { type: Date, required: true },
    peepcontent: { type: String, required: true }
});

const Peep = new mongoose.model("Peep", peepSchema)

export default Peep;