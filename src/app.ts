import express from "express";
import config from "config";
import routes from "./routes";
import bodyParser from "body-parser";
import cors from "cors"
import db from "./db";



const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});


app.use(
    cors({
        origin: config.get("corsOrigin"),
    })
);

const port = config.get("port");

//parse application/json
app.use(bodyParser.json());


app.listen(port, () =>{
    console.log(`Application is listening at http://localhost:${port}`);
    routes(app);
    db()
});