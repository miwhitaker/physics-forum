import React from 'react';

export default function Category(props) {
    return(
      <div 
        className = {`scale ${props.active}`}
       
        onClick = {() => props.clickCat(props.val)}
        key = {props.val}>
          {props.name}
      </div>
    );
}

//style = {{background: props.active ? 'rgba(189, 164, 209, 0.8)': 'rgba(189, 164, 209, 0.3)'}}