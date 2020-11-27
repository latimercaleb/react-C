import React from 'react';
import './season.css';

const seasonOptions = {
    Summer: {
        Message: 'Let\'s hit the beach!',
        Icon: 'sun'
    },
    Winter: {
        Message: 'Burr.. it\'s cold out! Bundle up!',
        Icon: 'snowflake'
    }
}

const getSeason = (Latitude, CurrentMonth) => {
    if(CurrentMonth > 2 && CurrentMonth < 9){
        return Latitude > 0 ? 'Summer' : 'Winter';
    } else {
        return Latitude > 0 ? 'Winter' : 'Summer';
    }
}
const SeasonDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const {Message, Icon} = seasonOptions[season];
    return (
    <div className={`season-display ${season}`}>
        <i className={`${Icon} icon massive icon-left`}></i>
        <h2>{Message}</h2>
        <i className={`${Icon} icon massive icon-right`}></i>
    </div>
    );
}

export default SeasonDisplay;