import React, {useState,useEffect}  from 'react';
import api from "../../../api";
import "./index.less";
//引入需要的组件
import CommentView from '../CommentView';
import LoadMore from "../../../components/LoadMore"

export default function Comment(props) {
  const [comment,setCommet] = useState([]);
  const [hasMore,setHasMore] = useState(false);
  useEffect(() => {
    http();
  },[])
  const loadMoreHandle = () => {
    http();
  }
  const http = () => {
      api.comment({id:props.id}).then(res => {
          // console.log(res);
          if(res.data.status === 200){
              setCommet(comment.concat(res.data.result.data));
              setHasMore(res.data.result.hasMore);
          }
      }).catch(error => {
          console.log(error);
      })    
  }
  // console.log(hasMore);
  return (
    <div style={{paddingBottom:"50px"}}>
        {
          comment.length > 0 ? <CommentView data={comment} /> : <div>数据加载中...</div>
        }
        {
          hasMore ? 
          <LoadMore onLoadMore={loadMoreHandle} />
          :
          <div className='load'>没有数据了...</div>
        }
    </div>
  )
}
