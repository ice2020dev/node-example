const express  = require('express')
const friendsController = require('../controllers/friends.controller')

const friendsRouter = express.Router();

//中间件
friendsRouter.use((req,res,next)=>{
  console.log('ip address:',req.ip)
  next();
})
friendsRouter.get('/pic',friendsController.getFriendsPic)
friendsRouter.get('/',friendsController.getFriends)
friendsRouter.get('/:id',friendsController.getOneFriend)
friendsRouter.post('/',friendsController.postFriends)
module.exports = friendsRouter;