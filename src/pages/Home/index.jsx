import React from 'react'
// 引入顶部导航栏
import HeaderNav from "../../components/HeaderNav";
// 引入轮播图组件
import HomeSwiper from "../../components/HomeSwiper"
// 引入首页热门推荐组件
import HomeHotList from './HomeHotList';
// 引入Redux相关
import {useSelector} from "react-redux";

export default function Home() {
  const city = useSelector(state => state.city)
  // console.log(city);
  return (
    <div>
      <HeaderNav cityName={city.cityName}></HeaderNav>
      <HomeSwiper></HomeSwiper>
      <HomeHotList cityName={city.cityName}></HomeHotList>
    </div>
  )
}
