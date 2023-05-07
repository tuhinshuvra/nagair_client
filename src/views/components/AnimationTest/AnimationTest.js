import React from 'react';

const AnimationTest = () => {
    return (
        <div>
            <i
                className="fas fa-car-side fa-3x"
                data-mdb-toggle="animation"
                data-mdb-animation="slide-in-left"
                data-mdb-animation-start="onScroll"
                data-mdb-animation-on-scroll="repeat"
            ></i>
        </div>
    );
};

export default AnimationTest;