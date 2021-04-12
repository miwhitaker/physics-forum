import React from 'react';

export default function Category(props) {
    return(
      <div 
        className = {`${props.active} scale`}
        key = {props.val.toString()}
        onClick = {() => props.clickCat(props.val)}>
          {props.name}
      </div>
    );
}

