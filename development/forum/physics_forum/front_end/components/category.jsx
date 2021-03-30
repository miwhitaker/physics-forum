import React from 'react';

export default function Category(props) {
    return(
      <div className = 'scale' onClick = {() => props.clickCat(props.val)}>{props.name}</div>
    );
}