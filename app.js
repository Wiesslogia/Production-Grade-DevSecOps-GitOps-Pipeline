import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send("Hello from GitOps");
})

app.listen(8000,()=>{
    console.log("server is running, http://127.0.0.1:8080");
})

