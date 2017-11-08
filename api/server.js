let express = require('express');
const open = require("open");
const bodyParser = require("body-parser");

const port = process.env.port || 3000;
const router = express.Router();
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/", router);


app.listen(port, (err) => {
    if (err) { console.log(err); }
    else { open(`http://localhost:${port}`) }
});
