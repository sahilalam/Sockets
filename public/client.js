$(()=>{
    let socket=io();
    socket.on('connect',()=>{
        $('#1').text(socket.id);
    })

    $("#btn").click(()=>{
        let color=$("#selector").val();
        socket.emit('colorit',color);  

    })
    
    socket.on('ci',(data)=>{
        console.log(data);
        colorbox(data);
    })

})
function colorbox(color)
{
    document.querySelector('#'+color).style.backgroundColor = color;
    setTimeout(()=>{
        document.querySelector('#'+color).style.backgroundColor = null;
    },500)  
}


