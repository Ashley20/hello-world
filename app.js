const express = require('express'),
      app = express();


app.use('/', (req, res)=>{
    res.send("HELLO WORLD, I AM DİDEM");
});

app.listen(3000,function(){
    console.log("App is listening on port 3000");
});