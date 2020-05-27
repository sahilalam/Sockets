const exp=require('express');
const http=require('http');
const app=exp();
const server=http.createServer(app);
const socketio=require('socket.io');
const io=socketio(server);
app.use('/',exp.static(__dirname+'/public'));
io.on('connection',(socket)=>
{
    console.log(socket.id);
    socket.on('colorit',(data)=>{
        console.log(data)
        io.emit('ci',data);
    })
})
server.listen(1234,()=>{
    console.log("server satrted at http://localhost:1234")
})