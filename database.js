const mongoose = require('mongoose');


module.exports = (uri) => {
    mongoose.connect(uri,{
     useNewUrlParser : true, 
    }).then(res  =>  console.log("mongodb connected ..."))
    .catch(err => console.log(err))
}
