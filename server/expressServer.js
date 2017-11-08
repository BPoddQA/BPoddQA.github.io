let express = require('express');
const open = require("open");
const path = require("path");
const port = 3000;
let app = express();

app.use(express.static("src"));


app.listen(port, (err) => {
    if (err) { console.log(err); }
    else { open(`http://localhost:${port}`) }
});
