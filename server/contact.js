const mongoose =require ('mongoose')

var contactSchema = mongoose.Schema({
    firstlName: {
        type:String,
         required:true
        },
        lastName: {
            type:String,
             required:true
            },
        email: {
            type: String,
            required:true
        },
        message: {
            type: String,
            required:true
        },


        })

        module.exports.mongoose.model('Contact',contactSchema)

    
