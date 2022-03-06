import React from 'react';
// 引入Antd-mobile组件
import {Swiper} from "antd-mobile";

export default function HomeSwiper(props) {
    const swipers = props.images.map((image,index) => (
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
