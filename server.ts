import express, { Application, Request, Response } from "express";
import ejs from "ejs"
import mustacheExpress from 'mustache-express';
import dotenv from 'dotenv'


dotenv.config({
    path: "./.env"
})



const app: express.Application = express();
const hostName: string | undefined = process.env.host;
const port: number | string = process.env.port || 5000;


// app.get("/",(request:Request ,response:Response)=>{
//    response.status(200).json({
//     msg:"this is home page"
//    })
// })

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");

//app.set("view engine","ejs");

// app.get("/",(req:Request,res:Response)=>{
//     let model = {x:1000, y:20};
//     res.render("index",model);
// });

// app.get("/login",(req:Request,res:Response)=>{
//     let model = {uname:"qode",Upwd:"qode@123"};
//     res.render("login",model)
// });

app.get("/student", (req: Request, res: Response) => {
    let model = {
        studentId: "5011",
        studentName: "Ramesh",
        studentMarks: "40",
        subjects: [
            { name: "maths", marks: "56" },
            { name: "science", marks: "68" },
            { name: "english", marks: "55" },
        ],
    };
    res.render("student", model)
});

if (port && hostName) {
    app.listen(Number(port), hostName, () => {
        console.log(`Server started at http://${hostName}:${port}`);
    });
}

