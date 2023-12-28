const fetchdata= require('./app')
fetchdata('',(error,data)=>{
    if(data){
    console.log(data);
    }
    else{
        console.log(error);
    }
})