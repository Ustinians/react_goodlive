const express = require("express");
const router = express.Router();
const homehot = require("./data/home/homehot");
const searchData = require("./data/search");
const url = require("url");

// GET方法获取首页热门数据
router.get("/home/hot1",(req,res) => {
    const cityName = url.parse(req.url,true).query.cityName;
    // console.log(cityName);
    res.send({
        // 成功时返回的结果
        status: 200,
        data: homehot.hot1,
        city: cityName
    })
});

router.get("/home/hot2",(req,res) => {
    const cityName = url.parse(req.url,true).query.cityName;
    // console.log(cityName);
    res.send({
        status: 200,
        data: homehot.hot2,
        city: cityName
    })
})

// GET获取search搜索内容
// searchData
router.get("/search",(req,res) => {
    const search = url.parse(req.url,true).query.search;
    console.log(search);
    res.send({
        status: 200,
        result: searchData
    })
})

module.exports = router;