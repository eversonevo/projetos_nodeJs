const express = require('express');
const app = express();

app.get('/' , function(req , res, next){

   res.send('SEja bem vindo')

});

app.listen(process.env.PORT || 3000,function(){
    console.log("Servidor rodando porta");
});


