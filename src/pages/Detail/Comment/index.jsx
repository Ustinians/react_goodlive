import React, {useState,useEffect}  from 'react';
import CommentView from '../CommentView';
import api from "../../../api";

export default function Comment(props) {
  const [comment,setCommet] = useState([]);
  useEffect(() => {
      api.comment({id:props.id}).then(res => {
          // console.log(res);
          if(res.data.status === 200){
              setCommet(res.data.result.data);
          }
      }).catch(error => {
          console.log(error);
      })
  })
  return (
    <div>
        {
          comment.length > 0 ? <CommentView data={comment} /> : <div>数据加载中...</div>
        }
    </div>
  )
}
