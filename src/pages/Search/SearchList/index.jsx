import React, { useState, useEffect } from 'react';

// 引入需要的样式文件
import "./index.less";

// 引入网络请求的API
import api from "../../../api";

// 引入需要的组件
import LoadMore from "../../../components/LoadMore";
import SearchListView from "../SearchListView";

export default function SearchList(props) {
  // 合并数据
  const [searchData, setSearchData] = useState([]);
  const [hasMore, setHasMore] = useState(false); // 是否加载更多

  useEffect(() => {
    http();
    // return () => {
    //   setSearchData([]);
    //   // setHasMore(false);
    // }
  },[props.search]) // 监听数据的变化

  const loadMoreHandle = () => {
    // console.log("数据加载中...");
    http();
  }

  const http = () => {
    api.search({
      search: props.search
    }).then(res => {
      if (res.status === 200) {
        setSearchData(searchData.concat(res.data.result.data));
        setHasMore(res.data.result.hasMore);
      }
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div>
      {
        searchData.length > 0 ? <SearchListView search={searchData}></SearchListView> : <div>数据加载中...</div>
      }
      {
        hasMore ? <LoadMore onLoadMore={loadMoreHandle} /> : <div className='data-done'>数据已加载完毕...</div>
      }

    </div>
  )
}
