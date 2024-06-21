// const express = require("express")

// const app = express()

// // localhost:3001/api/user

// app.listen(3000,()=>{
//     console.log("Server started on 3000")
// })

// app.get("/create",
//     async(req,res)=>{
//         console.log("Routeeee");
//         res.status(200).json({
//             message:"Route got hiteed"
//         })
//     }
// )

export async function GET(request){
    const data = [1,2,5,1,2,5,1,5]
    console.log("Response")
    return new Response(JSON.stringify(data))
}