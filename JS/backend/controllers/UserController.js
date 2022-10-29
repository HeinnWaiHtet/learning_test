const service = require('./../services/UserService');
const {config} = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async function( req,res,next)
{
    let userName = req.body['username'];
    let password = req.body['password'];
    try
    {
        let user = await service.register(userName,password);
        let payload = { id: user._id };
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        res.status(200).send({ token });
    }catch (err) {
        res.status(400).send({message:"User already existed"});
    }
}

const login = async function(req,res,next)
{
    let userName = req.body['username'];
    let password = req.body['password'];
    try
    {
        let user = await service.login(userName,password);
        let payload = { id: user._id };
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        res.status(200).send({ token });
    }catch (err) {
        res.status(404).send({message:"Invalid user"});
    }
}

const getUserById = async function (req, res, next) {
    let userId = req.params.userId;
    let user = service.getUserById(userId);
    return res.status(200).json(user);
}

module.exports = {
    getUserById,
    registerUser,
    login,
}