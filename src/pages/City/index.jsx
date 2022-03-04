import React from 'react'
// 顶部导航区
import PubHeader from "../../components/PubHeader";
import CurrentCity from './CurrentCity';
import CityList from './CityList';
// 引入Redux相关
import {useSelector,useDispatch} from "react-redux";
import {changeCity} from "../../redux/actions/city";

export default function City() {
    // const [city,setCity] = useState("北京");
    const dispatch = useDispatch();
    const city = useSelector(state => state.city);
    // console.log(city);

    const onCityEvent = (city) => {
        // setCity(city);
        // console.log(city);
        dispatch(changeCity(city))
        // console.log(city);
    }
    return (
        <div>
            <PubHeader title={"城市选择"}></PubHeader>
            <CurrentCity city={city.cityName}></CurrentCity>
            <CityList onEvent={onCityEvent}></CityList>
        </div>
    )
}
