const exp=require('express');
const http=require('http');
const app=exp();
const server=http.createServer(app);
const socketio=require('socket.io');
const io=socketio(server)
let PORT=process.env.PORT||1234;
app.use('/',exp.static(__dirname+'/public'));
io.on('connection',(socket)=>
{
    console.log(socket.id);
    socket.on('colorit',(data)=>{
        console.log(data)
        io.emit('ci',data);
    })
})
server.listen(PORT,()=>{
    console.log("server satrted")
})