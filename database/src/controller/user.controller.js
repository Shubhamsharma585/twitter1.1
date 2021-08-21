const express = require("express")
const router = express.Router()
const User = require("../model/user.model")
 

router.get("/", async(req,res) => { 

    const users = await User.find({}).populate("following").lean().exec()
    res.status(200).json({data: users})
})
 

router.get("/:id", async (req,res) => {
    
    const user = await User.findById(req.params.id).populate("following").lean().exec()
    res.status(200).json({data: user})
})
  

router.patch("/:id", async(req,res) => {

    id = req.params.id;
    body = req.body;
    const itm = await User.findByIdAndUpdate(id, body, {new: true }).populate("following");
    res.status(201).json({data: itm})
}) 

router.patch("/follow/:id", async(req,res) => {

    const user = await User.findById(req.params.id).lean().exec()
    const following = user.following
    const follow = req.body.follow
 
    var nfollowing = [...following,follow]
    var newfollowing = {
        following: nfollowing
    }
    const itm = await User.findByIdAndUpdate(req.params.id, newfollowing, {new: true }).populate("following");
    //console.log(following, newfollowing, follow)


    const nextuser = await User.findById(follow).lean().exec()
    const follower = nextuser.follower
    var nfollower = [...follower, req.params.id]
    var newfollower = {
        follower: nfollower
    }
    const nextperson = await User.findByIdAndUpdate(follow, newfollower, {new: true }).lean().exec()

    res.status(200).json({data: itm})
})


router.delete("/:id", async(req,res) => {
    id = req.params.id;
    await User.findByIdAndDelete(id);
    const item = await Post.find().lean().exec();
    res.status(201).json({data: item})
})


 
module.exports = router;