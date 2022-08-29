const friends = require('../models/friends.model')
const path = require('path')
function getFriends(req,res){
    res.json(friends)
}
function postFriends(req,res){
    if(!req.body.name){
        res.status(400).json({
            error:'Missing friend'
        })
     }else {
         const friend = {
             name:req.body.name,
             id:friends.length
         }
         friends.push(friend);
         res.status(200).json(friend)
     }
}
function getOneFriend(req,res){
    const friendId = +req.params.id
    const friend = friends[friendId]
     if(friend){
       res.status(200).json(friend)
     }else {
         res.status(404).json({
             error:'friend not exist'
         })
     }
}
function getFriendsPic(req,res){
 res.sendFile(path.join(__dirname,'..','public','images','002.jpg'))
}

module.exports = {
    getFriends,
    postFriends,
    getOneFriend,
    getFriendsPic
}