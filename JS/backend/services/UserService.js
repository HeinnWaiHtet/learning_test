const User = require('./../model/User');
const {config} = require('../config/Config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = async (username, password) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = new User({
        username: username,
        password: hashPassword
    });
    return user.save();
}

const login = async (username, password) => {
    const filter = {
        username: username
    };

    const user = await User.findOne(filter);
    if(user){
        const validPass = await bcrypt.compare(password, user.password);
        if(validPass){
            return user;
        }else{
            throw Error('Invalid User or Password');
        }
    }

    throw Error('Invalid User or Password');
}

const getUserById = async (userId) => {
    return {
        userId : userId,
        name: 'some data from db'
    };
}

module.exports = {
    getUserById,
    register,
    login
}