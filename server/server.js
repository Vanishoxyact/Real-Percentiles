const express = require("express")
var wlApiRouter = require("./wl_api");

let  app = express()
//app.get('/', (req, res) => res.send("HELLO FROM EXPRESS"));
app.use(express.static('public'))
app.listen(3000,  () => console.log("Example app listening on port 3000!"));
app.use("/wl_api", wlApiRouter);