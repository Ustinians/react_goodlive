import React, { useEffect, useRef } from 'react';
import "./index.less"

export default function LoadMore(props) {
    const more = useRef();
    useEffect(() => {
        // getBoundingClientRect
        let timer = null; // 创建一个計時器
        // 视口高度
        let winHeight = document.documentElement.clientHeight;
        // 滚动事件监听
        window.addEventListener("scroll",() => {
            if(more.current){
                if(timer){
                    clearTimeout(timer); // 在一个时间间隔内,只能发起一次请求
                }
                else{
                    setTimeout(() => {
                        if(winHeight > more.current.getBoundingClientRect().top){
                            // console.log("加载更多数据");
                            props.onLoadMore();
                        }
                    },300)
                }

            }
        });
        // return () => {
        //     // clearTimeout(timer);
        //     // window.removeEventListener("scroll",scorllHandle()); // 取消滚动事件监听
        // }
    }, [])
    return (
        <div className='load' ref={more}>
            加载更多...
        </div>
    )
}
