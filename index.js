const fs = require("fs");
const express = require("express");
const app = express();


// create a folder
// http://localhost:3001/folder (post)
app.post("/folder", (req, res) => {
  try{
    fs.mkdir("./Nodejs_Filesystem", function () {
      console.log("Folder Created");
      res.json({ message: "Folder Created" });
    });
  }catch(error){
    console.log(error)
  }
 
});

let times = Date.now();
let today = new Date();
let date = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
let hours = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
let msec = today.getMilliseconds();

// file content - current timeStamp
// filename     - current time&date
// http://localhost:3001/file   (post)
app.post("/file", (req, res) => {
  try{
    fs.writeFile(
      `Nodejs_Filesystem/Date ${date}-${month}-${year}  Time ${hours}-${min}-${sec}-${msec}.txt`,
      `My Timestamp is:${times}`,
      function (err) {
        if (err) throw err;
        console.log("File Created");
        res.json({ message: "File Created" });
      }
    )
  }
  catch(error){
    console.log(error)
  }
 
});

// // Retrieve all the files
// http://localhost:3001/file   (get)
app.get("/file", (req, res) => {
  try{
    fs.readdir("Nodejs_Filesystem", function (err, files) {
      if (err) throw err;
      console.log(files);
      res.json({ message: "Retrieve all the files", files });
    })
  }
  catch(error){
console.log(error)
  }
 
});

app.listen(3001);




