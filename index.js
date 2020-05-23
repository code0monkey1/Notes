
const express=require("express")
const app=express()
const cors=require('cors')



app.use(cors())
app.use(express.json())
app.use(express.static('build'))

let notes=[
    {
    id:1,
    content:"first note",
    important:true
    },
    {
    id:2,
    content:"second note",
    important:false
     }

]
app.get("/api/notes",(req,res)=>{
    res.send(notes)
})
app.post('/api/notes',(req,res)=>{
    console.log("The request body is ",req.body)
    notes=notes.concat(req.body)
})
app.get("/api/notes/:id",(req,res)=>{
    const id=Number(req.params.id)
    const note = notes.find( note => note.id===id)
    
    res.send(note)
})

const PORT=process.env.PORT||3001

app.listen(PORT,()=>{
    console.log("Listening to port",PORT)
})