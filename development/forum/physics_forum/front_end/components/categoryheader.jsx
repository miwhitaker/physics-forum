import React from 'react';

export default function CategoryHeader(props) {
    if(props.mode === 'universe') {
        return(
            <div>
                <h3>Universe Scale Questions</h3>
                <p className = 'explanation'>(For things that are extremely large, such as galaxies or the whole universe)</p>
            </div>
        );
    }
    else if(props.mode === 'astro') {
        return(
            <div>
                <h3>Astrophysics Scale Questions</h3>
                <p className = 'explanation'>(For all objects inside of galaxies, such as nebulae, planets, and stars)</p>
            </div>
        );
    }
    else if(props.mode === 'planet') {
        return(
            <div>
                <h3>Earth Scale Questions</h3>
                <p className = 'explanation'>(For things that happen on planet Earth)</p>
            </div>
        );
    }
    else if(props.mode === 'quantum') {
        return(
            <div>
                <h3>Quantum Scale Questions</h3>
                <p className = 'explanation'>(For things that are too small to see with your eyes)</p>
            </div>
        );
    }
}