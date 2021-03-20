import React from 'react';

export default function Category({name, val, clickCat}) {
    return(
      <div className = 'scale' onClick = {() => clickCat(val)}>{name}</div>
    );
}