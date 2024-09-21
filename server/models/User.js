import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name  : {
        type: String,
        required: true
    },
    addresses: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Address',
          required: true
        }
      ]
   
},{timestamps : true});

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;

