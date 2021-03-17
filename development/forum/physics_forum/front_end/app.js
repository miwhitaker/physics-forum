import React from "react";
import ReactDOM from "react-dom";

function Category() {
    return(
    <div>
      <div className = 'scale-container col-md-4'>
        <div className = 'universe'>Universe Scale Questions</div>
        <div className = 'astro'>Astrophysics Scale Questions</div>
        <div className = 'planet'>Earth Scale Questions</div>
        <div className = 'quantum'>Quantum Scale Questions</div>
      </div>
      <div className = "col-md-8">
        This is the explanation of categories on left
      </div>
    </div>);
}

ReactDOM.render(
    <Category/>,
    document.getElementById('root')
)
