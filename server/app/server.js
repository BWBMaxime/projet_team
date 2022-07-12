import express from "express";
import bodyParser from "body-parser" ;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.all('', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/",(request, repsonse) =>{
    repsonse.json({
        message:"welcom API TEAM"
    })
});


app.listen(3000,() => {
    console.log("Server est démarré sur le port 3000.")
});