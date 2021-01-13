import React from 'react';

import './rank.css';

const Rank = () => {
    return (
        <div className="rank">
            <p className="rank__text">
                {`John, your current rank is...`}
            </p>
            <p className="rank__text">
                {`#5`}
            </p>
        </div>
    )
};

export default Rank;