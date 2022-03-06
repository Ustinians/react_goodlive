const express = require("express");
const url = require("url");
const router = express.Router();
// 引入需要的数据
const homehot = require("./data/home/homehot");
const searchData = require("./data/search");
const detailsData = require("./data/details");
const commentData = require("./data/comment");
const orderData = require("./data/order");


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

// GET获取详情页数据
router.get("/details",(req,res) => {
    const id = url.parse(req.url,true).query.id;
    // console.log(id);
    res.send(detailsData);
})

// GET方法获取评价
router.get("/comment",(req,res) => {
    const id = url.parse(req.url).query.id;
    res.send({
        status: 200,
        result: commentData
    })
})

// GET方法获取订单信息
router.get("/order",(req,res) => {
    const username = url.parse(req.url,true).query.username;
    res.send({
        status: 200,
        result: orderData
    })
})

module.exports = router;