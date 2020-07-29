const middle = function (req, res, next) {

    console.log('this is middleware');

    next()

}

// const firstMid = function (req, res, next) {
//     console.log("first middleware")

//     next()


//     //     if(req.body != undefined){
//     //         next()
//     //     } else {
//     //         console.log('Alert the body is not defined!');

//     //         res.send('Body was not defined')

//     //     }
// }

module.exports = middle;