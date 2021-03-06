const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/')));


app.get("/*", (req,res) => {
	res.sendFile(path.resolve(__dirname,  "index.html"));
});



const port = process.env.client_port || 3000;

app.listen(port, () => console.log("Server is running!"));