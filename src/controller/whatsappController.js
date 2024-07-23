const fs = require("fs")
const myConsole = new console.Console(fs.createWriteStream('./src/logs/whatsapp.log'));

const VerifyToken = (req, res) => {
    console.info("Hola VerifyToken");
    try{
        var accessToken = "KTc7qdiuPq5MPqrijwiYasNGVgi7pg8yI4sftIbbDlO1smzgAYx7G0seZGVlBrEr";
        var token = req.query['hub.verify_token'];
        var challenge = req.query['hub.challenge'];
        console.log("Token: " + token);
        console.log("Challenge: " + challenge);
        if(challenge != null && token != null && token == accessToken){
            res.send(challenge);
        }
        else{
            console.log("Error: No se pudo verificar el token");
            res.status(400).send();
        }
    }
    catch(err){
        res.status(400).send();
        console.error(err);
    }
}

const ReceivingMessage = (req, res) => {

    try{
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"])[0];
        var values = changes["value"];
        var messageObject = values["messages"];

        myConsole.log(messageObject);

        res.send("EVENT_RECEIVED");
    }
    catch(err){
        res.send("EVENT_RECEIVED");
        console.error(err);
    }
}


module.exports = {
    VerifyToken,
    ReceivingMessage
}