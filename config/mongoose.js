const mongoose=require('mongoose')
const url=process.env.DB_URL
function connectdb(){
    mongoose.connect(url)
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((x)=>{
        console.log(x);
    })
}
module.exports=connectdb