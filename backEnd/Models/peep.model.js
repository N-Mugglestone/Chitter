import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({
    name: {
        first: { type: String, requires: true },
        lastname: { type: String, required: true }
    },
    username: { type: String, requires: true },
    date: { type: Date, required: true },
    messagecontent: { type: String, required: true }
});

export default mongoose.model('Peep', peepSchema);