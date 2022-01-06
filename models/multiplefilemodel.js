const mongoose = require('mongoose');

const multipleFileShema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "please provide file title"]
    },
    files : [Object]
}, {timestamps : true})

module.exports = mongoose.model("multiple-files",multipleFileShema);
