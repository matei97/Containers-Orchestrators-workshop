const express = require('express');
const crypto = require("crypto");


// Constants
const PORT = 5000;
const HOST = '0.0.0.0';
const id = crypto.randomBytes(16).toString("hex");

// App
const app = express();
app.get('/', (req, res) => {

    result = CheckAuthentication(req);
    if (result === true) {
        res.send('Back end application with id ===> ' + id);

    }
    else{
        return res.status(401).send('');
    }
});


function CheckAuthentication(req) {
    auth = req.get('authorization');

    if (auth !== undefined) {
        buff = Buffer.from(auth.substring(6), 'base64');
        user_pass = buff.toString('ascii');
        console.log(user_pass);

        if (user_pass === "cloud:computing") {
            return true;
        }
    }

    return false;
}
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);