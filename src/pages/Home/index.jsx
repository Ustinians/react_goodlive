import React from 'react'
// 引入顶部导航栏
import HeaderNav from "../../components/HeaderNav";
// 引入轮播图组件
import Swiper from "../../components/Swiper"
// 引入首页热门推荐组件
import HomeHotList from './HomeHotList';
// 引入Redux相关
import {useSelector} from "react-redux";
// 引入图片
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";

export default function Home() {
  const city = useSelector(state => state.city)
  // console.log(city);
  const images = [banner1,banner2,banner3];
  return (
    <div>
      <HeaderNav cityName={city.cityName}></HeaderNav>
      <Swiper images={images}></Swiper>
      <HomeHotList cityName={city.cityName}></HomeHotList>
    </div>
  )
}
