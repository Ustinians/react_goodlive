const express = require("express");
const cors = require("cors"); // cors跨域
const app = express();
const router = require("./router");

app.use(cors()); // 使用跨域
app.use("/api",router);

app.listen(5566,() => {
    console.log("服务器运行在5566端口");
})