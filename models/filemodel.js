const mongoose = require('mongoose');


const signlefileShema = new mongoose.Schema({
    fileName : {
        type: String,
        required: [true, "please provide file name"],
    },
    filePath : {
        type: String,
        required: [true, "please provide file path"],
    },
    fileType : {
        type: String,
        required: [true, "please provide file type"],
    },
    fileSize : {
        type: String,
        required: [true, "please provide file Size"],
    }
}, {timestamps: true});


module.exports = mongoose.model("singleFile",signlefileShema);
