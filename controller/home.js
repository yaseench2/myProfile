const feedback=require('../Model/Feedback')
exports.ViewProfile=async(req,res)=>{
    res.render('HomeProfile')
}
exports.feedback=async(req,res)=>{
    let {username,email,feedback1}=req.body
    await feedback.create({
        name:username,
        feedback:feedback1,
        email:email,
    })
    res.redirect('/')
}