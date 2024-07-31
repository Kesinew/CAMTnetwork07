const express = require('express')
const app = express()

app.get('/hello', function(req, res){
    res.send("Name : Nopphawit Chamnanuea <br>Login date : 31/7/2567")
    })
    

app.listen(4535,function(){
console.log("Server is running on PORT 4535")
})
