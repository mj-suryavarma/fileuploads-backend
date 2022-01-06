const express = require('express');
const Router = express.Router();
const {uploads} = require('../helper/filehelper');
const {singleFileUploader,multipleFileUploads, getAllSingleFiles, getAllMultipleFiles} = require('../controller/fileupload');

Router.post('/singleFile', uploads.single('file'),singleFileUploader);
Router.post('/multipleFiles',uploads.array('files'),multipleFileUploads);
Router.get('/getSingleFiles',getAllSingleFiles);
Router.get('/getMultipleFiles', getAllMultipleFiles);


module.exports = Router

