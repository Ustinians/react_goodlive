import React from "react"
import "./index.less"
import { withRouter } from "react-router-dom"
// 引入存储数据的util
import memoryUtils from "../../../utils/memoryUtils"

const CityList = (props) => {

    function clickCityHandle(cityName){
        props.onEvent(cityName)
        props.history.push("/"); // 修改完所在城市后跳转到主页面
        // console.log(city);
    }

    const cityList = memoryUtils.cityList;

    return (
        <div className="city-list-container">
            <h3>热门城市</h3>
            <ul className="clear-fix">
                {
                    cityList.map((item,index) => (
                        <li key={index} onClick={ () => clickCityHandle(item.label) }><span>{item.label}</span></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default withRouter(CityList)