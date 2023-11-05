function pickedOff(req, res, next){
    req.customProperty = "Custom Property added to Picked Off!"
    next()
}

module.exports = pickedOff;

