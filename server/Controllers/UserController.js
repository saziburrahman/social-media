import UserModel from "../Models/userModel.js";

//get a user

export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("no such user Exist");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update user

export const updateuser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;
  if(id===currentUserId || currentUserAdminStatus){
    try {
        const user = await UserModel.findByIdAndUpdate(id,req.body,{new:true})

        res.status(200).json(user)
    } catch (error) {
    res.status(500).json(error);
        
    }
  }
};



