const mySqlPool = require("../config/db")

// GET All students list. (Method Created for that)
const getStudentRecords = async (req , res) => {
  try{
    const data = await mySqlPool.query('SELECT * FROM students');
    if(!data){
      return res.status(404).send({
        success:false,
        message: "No Record Found"
      });
    }
    res.status(200).send({
      success:true,
      message:"Student Record are Present",
      total_Students : data[0].length,
      // To remove junk data we access only first array.
      data : data[0],
    });
  }catch(error){
    console.error(error);
    res.status(500).send({
      success : false,
      message : "Problem In Fetching Student Records",
      error : error,
    });
  }
}

// GET Student By ID
const getStudentById = async (req, res) => {
  try{
    // id is same text as /:id to works
    const studentId = req.params.id;
    if(!studentId){
      return res.status(404).send({
        success : false,
        message : "NO ID provided"
      });
    }
    // const recordById = await mySqlPool.query('SELECT * FROM students where id =' +studentId);
    // To make our query safe from SQL Injection
    const recordById = await mySqlPool.query('SELECT * FROM students where id = ?' , [studentId]);
    if(recordById[0].length === 0){
      return res.status(404).send({
        success : false,
        message : "No Student Found On This ID"
      });
    }
  res.status(200).send({
    success:true,
    message:"Student Found",
    data : recordById[0],

  });
  }catch(error){
    console.error(error);
    res.status(500).send({
      success:false,
      message:"Problem In Fetching Data",
      error,
    });
  }
}

// INSERT STUDENT RECORD || POST
const saveStudentRecord = async (req , res) => {
  try{
    const {name , roll_no , fees ,  class1 , medium} = req.body;
    if(!name || !roll_no || !fees || !class1 || !medium){
      return res.status(404).send({
        success:false,
        message:"Please Fill All Fields.",
      });
    }
    const saveStudentDetails = await mySqlPool.query('insert into students (name , roll_no , fees , class , medium) values (?,?,?,?,?)' , [name,roll_no,fees,class1,medium]);
    if(!saveStudentDetails){
      return res.status(404).send({
        success:false,
        message:"Student Record is Not Saved!!"
      });
    }
    res.status(201).send({
      success:true,
      message:"Student Record Saved Successfully",
      data : saveStudentDetails
    })
  }catch(error){
    console.error(error);
    res.status(200).send({
      success:false,
      message:"Problem In Connection With Server",
      error : error,
    });
  }
}

// UPDATE QUERY || PUT
const updateStudentRecord = async (req,res) => {
  try{
    const {name , roll_no , fees , class1 , medium} = req.body;
    const studentId = req.params.id;
    if(!studentId){
      return res.status(404).send({
        success:false,
        message:"Student ID is Missing or Invalid ID",
      });
    }
    if(!name || !roll_no || !fees || !class1 || !medium){
      return res.status(404).send({
        success:false,
        message:"Please Fill All required fields.",
      });
    }
    const updateRecord = await mySqlPool.query('update students set name = ? , roll_no = ? , fees = ? ,  class = ? , medium = ? where id=?' , [name , roll_no , fees , class1 , medium , studentId]);
    if(!updateRecord || updateRecord[0].affectedRows === 0){
      return res.status(500).send({
        success:false,
        message:"Student Record is not updated!!",
        error : updateRecord,
      });
    }
    res.status(201).send({
      success:true,
      message:"Student Record Updated Successfully!!",
      data : updateRecord,
    });
  }catch(error){
    res.status(500).send({
      success:false,
      message:"Problem On Server.Please Contact To Admin",
      error
    });
  }
}

// DELETE STUDENT RECORD
const deleteStudentRecord = async (req, res) => {
  try{
    const studentId = req.params.id;
    if(!studentId){
      return res.status(404).send({
        success:false,
        message:"Student ID is Null or Invalid",
        StudentID : req.params.id
      });
    }
    const deleteStudentRecord = await mySqlPool.query('DELETE from students where id=?' ,[studentId]);
    if(!deleteStudentRecord){
      return res.status(500).send({
        success:false,
        message:"Student Record is not Deleted!",
        data : deleteStudentRecord
      });
    }
    res.status(200).send({
      success:true,
      message:"Student Record Successfully Deleted",
      data : deleteStudentRecord
    });
  }catch(error){
    res.status(500).send({
      success:false,
      message:"Problem In Deleting Record. Contact To Admin",
      error
    });
  }
}

// Exports Methods we need to have multiple methods to exports 
module.exports = {getStudentRecords , getStudentById , saveStudentRecord , updateStudentRecord , deleteStudentRecord}