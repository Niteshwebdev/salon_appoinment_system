const connectDB=require("../db/dbConnect");
const {ObjectId}=require("mongodb");



async function Updatepasswordapi(req,res){

    
    try{
       



       const db=await connectDB();
       const collection=db.collection("users");

       const { phone,newpassword}=req.body;

       const userExist=await collection.findOneAndUpdate({ phone }, { $set: { password: newpassword } });
        console.log(userExist);

        if(userExist){
       
       res.status(200).send('Password updated successfully');
        }
    }
    catch(err){
        console.log(err)
        res.status(500).send('Internal Server Error');
    }
}

module.exports={Updatepasswordapi}