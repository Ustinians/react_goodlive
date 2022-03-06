import React, { useState, useEffect } from 'react';
// 引入api
import api from "../../../api";
// 引入需要的路由组件
import { withRouter } from "react-router-dom";
// 引入需要的antd-mobile组件
import { NavBar, Tabs } from "antd-mobile";
// 引入样式文件
import "./index.less"
import Swiper from "../../../components/Swiper";
import BuyAndStore from '../BuyAndStore';
import Comment from '../Comment';

function DetailsView(props) {
    const [detailsData, setDetailsData] = useState({});
    const images = detailsData.imgs || [];
    useEffect(() => {
        api.details({
            id: props.id
        }).then(res => {
            if (res.status === 200) {
                setDetailsData(res.data);
            }
        })
    })
    const goBack = () => {
        props.history.goBack();
    }
    // console.log(props.id);
    // console.log(detailsData);
    return (
        <div className='detail-view'>
            <NavBar onBack={goBack} style={{ backgroundColor: "#ff5555", color: "#fff" }}>详情页</NavBar>
            {
                detailsData.title ? <div>
                    <Swiper images={images}></Swiper>
                    <Tabs>
                        <Tabs.Tab title='详情' key='details'>
                            <div className='detail-info'>
                                <h3>{detailsData.title}</h3>
                                <div className='box'>
                                    <ul>
                                        <li>
                                            <span>{detailsData.price} / 月</span>
                                            <p>租金</p>
                                        </li>
                                        <li>
                                            <span>{detailsData.info.type} / 月</span>
                                            <p>房屋类型</p>
                                        </li>
                                        <li>
                                            <span>{detailsData.houseType}</span>
                                            <p>面积</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className='info'>
                                    <div className='info-list'>
                                        <p>类型: {detailsData.info.type}</p>
                                        <p>朝向: {detailsData.info.orientation}</p>
                                    </div>
                                    <div className='info-list'>
                                        <p>楼层: {detailsData.info.level}</p>
                                        <p>装修: {detailsData.info.style}</p>
                                    </div>
                                    <div className='info-list'>
                                        <p>年代: {detailsData.info.years}</p>
                                    </div>
                                </div>
                            </div>
                        </Tabs.Tab>
                        <Tabs.Tab title='评价' key='commit'>
                            <Comment id={props.id} />
                        </Tabs.Tab>
                    </Tabs>

                    <BuyAndStore id={props.id} />
                </div> : <div>正在加载数据...</div>
            }
        </div>
    )
}

export default withRouter(DetailsView);