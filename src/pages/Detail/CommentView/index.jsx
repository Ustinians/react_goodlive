import React from 'react';
import Item from './Item';
import "./index.less"

export default function CommentView(props) {

    // console.log(comment);
  return (
    <div className='comment-list'>
        <ul>
        {
            props.data.map((ele,index) => {
                return <Item data={ele} key={index} />
            })
        }
        </ul>
    </div>
  )
}
