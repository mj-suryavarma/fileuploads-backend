const singleFileModel = require('../models/filemodel');
const multipleFilesModel = require('../models/multiplefilemodel');

const singleFileUploader = async(req, res) => {
    try {
        const file = new singleFileModel({
            fileName: req.file.originalname,
            filePath :  req.file.path,
            fileType : req.file.mimetype,
            fileSize : fileFormatter(req.file.size,2)  ///0.00
        })
           await file.save();
        console.log(file)
        res.status(200).send("successfully file uploaded");
        
    } catch (error) {
         console.log(error)
         res.status(400).send(error.message);
        }
}


const multipleFileUploads = async(req, res) =>{
    try {
        let filesArray = [];
          req.files.forEach(element => {
              const file = {
                  fileName : element.originalname,
                  filePath :  element.path,
                  fileType :  element.mimetype,
                  fileSize : fileFormatter(element.size, 2)
              }
              filesArray.push(file);
          })
          const multipleFiles = new multipleFilesModel({
              title : req.body.title,
              files : filesArray
           })
           await multipleFiles.save();

        console.log(req.files);
        res.status(200).send("successfully multiple files uploaded.. " )
    } catch (error) {
        console.log(error)
    }
}

const fileFormatter = (bytes, decimal) =>{

    if(bytes === 0){
        return "0 bytes"
    }
    const dm = decimal || 2;
    const size = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB','YB', 'ZB']
    const index = Math.floor(Math.log(bytes)/ Math.log(1000))
    return parseFloat((bytes/ Math.pow(1000, index)).toFixed(dm))+'-' + size[index]
}

const getAllSingleFiles = async(req,res) => {
    try {
        const files = await singleFileModel.find();
        res.status(200).send(files);

    } catch (error) {
         console.log(error.message)
    }
}
  const getAllMultipleFiles = async(req, res) => {
    try {
        const getFiles = await multipleFilesModel.find();
        res.status(200).send(getFiles);

    } catch (error){
        console.log(error)
    }
}

module.exports = {singleFileUploader,multipleFileUploads,getAllSingleFiles, getAllMultipleFiles}