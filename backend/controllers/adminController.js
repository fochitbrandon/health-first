import validator from "validator";
import  bcrypt from "bcrypt" 
import{v2 as cloudinary} from "cloudinary"
import doctorModel from "../models/doctorModel.js";
import pkg from 'jsonwebtoken'
const {JsonWebTokenError} = pkg
//API for adding doctors
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    //chercking for all data to add doctor
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({ success: false, message: "Missing Details" });

      //validating email format
      if (!validator.isEmail(email)) {
        return res.json({
          success: false,
          message: "Please enter a valid email",
        });
      }
      //validating strong password
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "Please enter a strong password",
        });
      }
     //hashing doctor password
     const salt = await bcrypt.get.gensalt(10)
      hashedPassword = await bcrypt.hash(password , salt)

  //upload image to cloudinart
      const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
      const imageUrl = imageUpload.secure_url
      const doctorData ={
        name,
        email,
        image:imageUrl,
        password:hashedPassword,
        speciality,
        degree,
        experience,
        about,
        fees,
        address,
        date:Date.now()

      }
      const newDoctor = new doctorModel(doctorData)
      await newDoctor.save()
      res.jon({success:true, message:"Doctor Added"})

    }

  } catch (error) {
console.log(error)
res.json({success:false,message:error.message})
  }
};
//API For admin Login
const loginAdmin =async(req , res)=>{
  try{
const {email,passward} =req.body
if(email===process.env.AMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

const token = jwt.sign(email+passward,process.env.JWT_SECRET )

res.json({success:true,token})

}else{
  res.json({success:false,message:"invalid credentials"})
}


   } catch (error) {
console.log(error)
res.json({success:false,message:error.message})
   } 
  
}
export { addDoctor, loginAdmin };
