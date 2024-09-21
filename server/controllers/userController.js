import UserModel from '../models/User.js';
import AddressModel from '../models/Address.js';


/********** User Creation **********/
export const userCreation = async (req, res) => {
  const { name, city, state, pincode } = req.body;

  if (!name || !city || !state || !pincode) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    const newUser = await new UserModel({ name }).save();
    const newAddress = await new AddressModel({
      user: newUser._id,
      city,
      state,
      pincode
    }).save();

    // Push the new address to the user's 'addresses' field
    newUser.addresses.push(newAddress._id);
    await newUser.save();

    // Respond with both the new user and new address
    res.status(201).json({ newUser, newAddress });

  } catch (error) {
    res.status(500).json({ message: "Failed to save user data." });
  }
};


