import userModel from "../models/userModel.js"
//for authentication
import jwt from "jsonwebtoken"
//encrypt user data and save in db
import bcrypt from "bcrypt"
//to check email password validation
import validator from "validator"

//login user
const loginUser = async (req, res) => {
    const  { email, password } = req.body;
    try {
        //user available with emailid or not
        const user =  await userModel.findOne({ email });
        //got any user not
        if (!user) {
            return res.json({success:false,message:"User doesn't exsist"})
        }
        //match user password with password stored in db
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({success:false,message:"Invalid password"})
        }
        //generate token
        const  token = createToken(user._id);
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

//create token
const createToken = (id) => {
    //create obj {id} to store id,salt to encrypt
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//regiter user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    // checking is user already esxsist
    try {
        const exsist = await userModel.findOne({ email });
        if (exsist) {
            return res.json({ success: false, message: "User already exsist" })
        }
    // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        // Check if the first character of the email is a letter
        if (!/^[A-Za-z]/.test(email)) {
            return res.json({ success: false, message: "The first letter of the email must be an alphabet" });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong Password (password must contains at least 8 digit)" })
        }
        //(encrypt password) hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })
        //save user in db
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({ success: true, token })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

export { loginUser, registerUser }