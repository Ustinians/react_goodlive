const express = require("express");
const router = express.Router();
const homehot = require("./data/home/homehot");

// GET方法获取首页热门数据
router.get("/home/hot1",(req,res) => {
    res.send({
        // 成功时返回的结果
        status: 200,
        data: homehot.hot1
    })
});

router.get("/home/hot2",(req,res) => {
    res.send({
        status: 200,
        data: homehot.hot2
    })
})

module.exports = router;