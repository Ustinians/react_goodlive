import React from 'react'
// 顶部导航区
import PubHeader from "../../components/PubHeader";
import CurrentCity from './CurrentCity';
import CityList from './CityList';
// 引入Redux相关
import {useDispatch} from "react-redux";
import {changeCity} from "../../redux/actions/city";

import storageUtils from '../../utils/storageUtils';
import memoryUtils from '../../utils/memoryUtils';

export default function City() {
    // const [city,setCity] = useState("北京");
    const dispatch = useDispatch();
    const city = storageUtils.getUser().city || "北京";
    // || useSelector(state => state.city)
    // console.log(city);

    const onCityEvent = (city) => {
        let user = storageUtils.getUser();
        user.city = city;
        memoryUtils.city = city;
        storageUtils.saveUser(user);
        // setCity(city);
        // console.log(city);
        dispatch(changeCity(city))
        // console.log(city);
    }
    return (
        <div>
            <PubHeader title={"城市选择"}></PubHeader>
            <CurrentCity city={city}></CurrentCity>
            <CityList onEvent={onCityEvent}></CityList>
        </div>
    )
}
