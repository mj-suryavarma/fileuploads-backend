'use strict';
const  multer  = require('multer');
const path = require('path');
const cloudinary = require('cloudinary');


const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename : (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g,'-') + '-'+file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
 
    if(file.mimetype === 'image/jpg' || file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === 'image/gif' || file.mimetype === 'image/pdf' ||  flie.mimetype === 'image/tiff' || mimetype === 'image/psd' || mimetype === 'image/eps' || mimetype === 'image/ai'){
        cb(null, true)
    }
      
    else {
        cb(null, false)
    }
}

const uploads = multer({storage : storage, fileFilter : fileFilter})


// upload image here
cloudinary.uploader.upload(data.image)
.then((result) => {
  response.status(200).send({
    message: "success",
    result,
  });
}).catch((error) => {
  response.status(500).send({
    message: "failure",
    error,
  });
})

module.exports  = {uploads};
