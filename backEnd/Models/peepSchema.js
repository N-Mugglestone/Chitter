import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    userHandle: { type: String, required: true },
    timeStamp: { type: Date, required: true },
    peepContent: { type: String, required: true }
});

db.peeps.find().sort({ age: -1 })

const Peep = mongoose.model("Peep", peepSchema)

export default Peep;