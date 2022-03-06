import React from 'react';
import "./index.less";
import Star from '../../../../components/Star';


export default function Item(props) {
  return (
    <div className='comment-item'>
        <h3>
            <i className='icon-user'></i>
            {props.data.username}
        </h3>
        <div>
            <Star num={props.data.star}></Star>
        </div>
        <p>{props.data.comment}</p>
    </div>
  )
}
