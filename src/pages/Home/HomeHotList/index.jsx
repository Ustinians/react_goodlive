import React, {useState,useEffect} from 'react';
import api from "../../../api";
// 引入视图组件
import HomeHotView from '../HomeHotView';
// 负责获取Home相关的数据
export default function HomeHotList(props) {
    const [hot1List,setHot1List] = useState([]);
    const [hot2List,setHot2List] = useState([]);
    const [city,setCity] = useState(props.cityName);
    // 使用useEffect()做网络请求
    // 使用useState()来存储数据
    useEffect(() => {
        api.getHomeHot1({
            cityName: props.cityName
        }).then(res => {
            if(res.data.status === 200){
                // console.log(res.data.data);
                setHot1List(res.data.data);
                setCity(res.data.city);
            }
        })
    }, []);
    useEffect(() => {
        api.getHomeHot2({
            cityName: props.cityName
        }).then(res => {
            if(res.data.status === 200){
                // console.log(res.data.data);
                setHot2List(res.data.data);
                setCity(res.data.city);
            }
        })
    }, []);
    return (
        <div>
        {
            hot1List.length > 0 ? <HomeHotView data={hot1List} title={"新品推荐"} city={city} /> : <div>等待数据加载</div>
        }
        {
            hot2List.length > 0 ? <HomeHotView data={hot2List} title={"热门商品"} city={city} /> : <div>等待数据加载</div>
        }
        </div>
    )
}
