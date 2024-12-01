
const SMTPServer = require("smtp-server").SMTPServer;

const server = new SMTPServer({

    allowInsecureAuth:true,
    authoptional :true,

    
    onConnect(session, cb){
        console.log(`onConnect`, session.id)
        cb()//Accept  the connection
    },

    onMailFrom(address,seesion,cb){
        console.log(`onMailFrom`,address.address ,session.id)
        cb()
    },

    onRcptTo(address,session,cb){
        console.log(`onRcptTo`,address.address,session.id)
        cb()
    },

    ondata(stream, session,sb){
        stream.on('data',(data) => console.log(`onData ${data.toString()}`))
        stream.on('end',cb)
    }
});


server.listen(25, () => console.log ('Server Running on port 25'));