import React, {useState} from 'react';

function Category() {
    return(<div className = 'scale-container'>
        <div className = 'universe'>Universe Scale Questions</div>
        <div className = 'astro'>Astrophysics Scale Questions</div>
        <div className = 'planet'>Earth Scale Questions</div>
        <div className = 'quantum'>Quantum Scale Questions</div>
    </div>);
}

ReactDOM.render(
    <Category/>,
    document.getElementById('root')
)