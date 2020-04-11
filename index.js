const express = require('express');
const app = express();
const route = require("./route");
const cors = require("cors");

const port = process.env.PORT || 3001;
app.use(cors());
app.use("/api", route);

app.listen(port,  () => {
    console.log( `Server Running at ${port}`);
})