const hello = function (req, res, next){
    return res.json({
        name : 'HWH'
    });
}

const saveUser = function(req, res, next){
    const user = req.body;
    user.id = 100;
    res.status(200).send(user);
}

module.exports = {
    hello,
    saveUser
}