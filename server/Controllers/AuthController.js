import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const newUser = new UserModel({
    username,
    password: hashPassword,
    firstname,
    lastname,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

// Login user

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username: username });

    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      validity ? res.status(200).json(user):res.status(400).json("wrong Password")
    }else
    {
        res.status(404).json("User does not exists")
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
