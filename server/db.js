const mongoose =require('mongoose')




mongoose=mongoose.connect('mongodb'//localhost:27017/contactDB',{
    userNewurlParser: true
},
err  =>  {
    if (!err){
        console.log('connection succeeded')
    }
    else
    {
        console.log('Erro in connection'+err)
    }
    
})
