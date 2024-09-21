import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    city  : {
        type: String,
        required: true
    },
    state  : {
        type: String,
        required: true
    },
    pincode : {
        type: Number,
        required: true
    }
},{timestamps : true});


const AddressModel = mongoose.model('Address', AddressSchema);
export default AddressModel;

