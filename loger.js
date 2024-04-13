function loger(req, res, next){
    console.log('logger ...')
    next()
}
 function authentication(req, res, next){
    console.log('authenticating ....')
    next()
 }
 module.exports.loger = loger 
module.exports.auth = authentication