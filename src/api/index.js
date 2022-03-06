import axios from "../utils/request";
/**
 * 路径地址
 */
const base = {
    baseUrl: "http://localhost:5566",
    homehot1: "/api/home/hot1",
    homehot2: "/api/home/hot2",
    search: "/api/search",
    details: "/api/details",
    comment: "/api/comment"
}

/**
 * 请求方法
 */
const api = {
    // 获取首页热门产品
    getHomeHot1(params){
        return axios.get(base.baseUrl + base.homehot1,{
            params
        });
    },
    getHomeHot2(params){
        return axios.get(base.baseUrl + base.homehot2,{
            params
        });
    },
    // 搜索
    search(params){
        return axios.get(base.baseUrl + base.search,{
            params
        })
    },
    // 获取详情页
    details(params){
        return axios.get(base.baseUrl + base.details,{
            params
        })
    },
    // 获取评论
    comment(params){
        return axios.get(base.baseUrl + base.comment,{
            params
        })
    }
}

export default api;