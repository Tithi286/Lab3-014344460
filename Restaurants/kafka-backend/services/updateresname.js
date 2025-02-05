var { mongoose } = require('.././db/mongoose');
var {Restaurant} = require('.././models/res_signup');

function handle_request(msg, callback){
    var name = {
        resname: msg.resname,
        email: msg.email
    }
        
    Restaurant.updateOne({email: name.email}, { $set : {"res_name": name.resname}}) 
    .then((result, err)=>{
        console.log("update email")
            if (err) {
                console.log(err)
                if(err.code === 'ER_DUP_ENTRY'){
                    callback(msg,"Error");
                }
                else{
                    console.log(err)
                    callback(msg,"Error");
                    
                }
                
            }
            else{
                console.log(result);
                callback(msg,result);
                
            }
        });
    }

    exports.handle_request = handle_request;