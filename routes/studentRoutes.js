// Import dependencies
const express = require('express');
const { getStudentRecords, getStudentById, saveStudentRecord, updateStudentRecord, deleteStudentRecord } = require('../Controller/studentController');


// router object
const  router = express.Router();


// routes

// GET All Students Records || GET Method
router.get('/getAllStudentRecord' , getStudentRecords);

router.get('/getStudentById/?:id' , getStudentById);

router.post('/saveStudentRecord' , saveStudentRecord);

router.put('/updateStudentRecord/?:id' , updateStudentRecord);

router.delete('/deleteStudentRecord/?:id' , deleteStudentRecord);

// Exports
module.exports = router;