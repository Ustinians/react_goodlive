import React from 'react';
// 引入Antd-mobile组件
import {Swiper} from "antd-mobile";
// 引入需要的图片
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";

const images = [banner1,banner2,banner3];

export default function HomeSwiper() {
    const swipers = images.map((image,index) => (
        <Swiper.Item key={index}>
          <div
            onClick={() => {
              console.log(`你点击了卡片 ${index + 1}`)
            }}
          >
            <img width="100%" alt={index} src={image}></img>
          </div>
        </Swiper.Item>
      ))
  return (
    <div>
        <Swiper loop autoplay allowTouchMove>{swipers}</Swiper>
    </div>
  )
}
