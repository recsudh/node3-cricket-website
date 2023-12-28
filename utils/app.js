
const request=require('request')

const fetchdata =(value,callback)=>{
    const url= `https://api.cricapi.com/v1/series?apikey=f706f25b-3617-427e-8df2-11b686301988&offset=0`;
    if(value){
        url+=`&search=${value}`;
    }
    console.log(url);
    request({url,json:true},(error,response)=>{
        if(error){
            callback(' NETWORK ERROR!',undefined)
        }else if(response.body.data.length==0){
            callback(' ERROR with url !',undefined)
        }else{
            for(let i=0;i<response.body.data.length;i++){
                // console.log(response.body.data.length);
                callback(undefined,response.body.data[i].name)
            }   
            
        }

    })
}
module.exports=fetchdata;
