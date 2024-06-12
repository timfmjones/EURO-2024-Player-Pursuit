// src/PlayerCard.js
import React from 'react';
import { groups, positionGroups } from './players';
import './PlayerCard.css';

const ResultPlayerCard = ({ player }) => {
  const getGroup = (nation) => {
    for (const group in groups) {
      if (groups[group].includes(nation)) {
        return group;
      }
    }
    return null;
  };

  const getPositionGroup = (position) => {
    for (const group in positionGroups) {
      if (positionGroups[group].includes(position)) {
        return group;
      }
    }
    return null;
  };

  const playerGroup = getGroup(player.nation);

  const playerPositionGroup = getPositionGroup(player.position);

  const getPositionClass = (position) => {

    return 'green';
  };

  // const getNationClass = (nation) => {
  //   if (nation === targetPlayer.nation) {
  //     return 'green';
  //   } else if (playerGroup === targetGroup) {
  //     return 'yellow';
  //   } else {
  //     return 'red';
  //   }
  // }

  const getAgeArrow = () => {

    return '✔';
  };

  const getGroupCheckamark = () => {

    return '✔';
  };

  const getNationCheckmark = () => {
    return '✔';
  };

  const getPositionCheckmark = () => {
    return '✔';
  };


  return (
    <div className="player-card">
      <h2>{player.name}</h2>
      <div className="player-info">
        <div className="formation">
        
        <div className="field">
          
          <div className="center-line"></div>
          <div className="left-box"></div>
          <div className="right-box"></div>
          <div className="center-circle"></div>
          <div className="goal-line left"></div>
          <div className="goal-line right"></div>
          
          <div className={`position ${getPositionClass('Goalie')}`} style={{ top: '85%', left: '45%' }}></div>
          <div className={`position ${getPositionClass('Left Back')}`} style={{ top: '65%', left: '10%' }}></div>
          <div className={`position ${getPositionClass('Center Back')}`} style={{ top: '70%', left: '35%' }}></div>
          <div className={`position ${getPositionClass('Center Back')}`} style={{ top: '70%', left: '55%' }}></div>
          <div className={`position ${getPositionClass('Right Back')}`} style={{ top: '65%', left: '80%' }}></div>
          <div className={`position ${getPositionClass('Defensive Midfield')}`} style={{ top: '55%', left: '45%' }}></div>
          <div className={`position ${getPositionClass('Midfielder')}`} style={{ top: '40%', left: '45%' }}></div>
          <div className={`position ${getPositionClass('Attacking Midfield')}`} style={{ top: '25%', left: '45%' }}></div>
          <div className={`position ${getPositionClass('Left Wing')}`} style={{ top: '10%', left: '10%' }}></div>
          <div className={`position ${getPositionClass('Striker')}`} style={{ top: '5%', left: '45%' }}></div>
          <div className={`position ${getPositionClass('Right Wing')}`} style={{ top: '10%', left: '80%' }}></div>
        </div>
          {/* <div className="forward">
            <div className={`position ${getPositionClass('Left Wing')}`}></div>
            <div className={`position ${getPositionClass('Striker')}`}></div>
            <div className={`position ${getPositionClass('Right Wing')}`}></div>
          </div>
          <div className="midfield">
            <div className={`position ${getPositionClass('Attacking Midfield')}`}></div>
            <div className={`position ${getPositionClass('Midfielder')}`}></div>
            <div className={`position ${getPositionClass('Defensive Midfield')}`}></div>
          </div>
          <div className="defense">
            <div className={`position ${getPositionClass('Left Back')}`}></div>
            <div className={`position ${getPositionClass('Center Back')}`}></div>
            <div className={`position ${getPositionClass('Right Back')}`}></div>
          </div>
          <div className="goalie">
            <div className={`position ${getPositionClass('Goalie')}`}></div>
          </div> */}
        </div>
        <div className="details">
          <p><strong>Nation:</strong> {player.nation} {getNationCheckmark()}</p>
          <p><strong>Age:</strong> {player.age} {getAgeArrow()}</p>
          <p><strong>Position:</strong> {player.position} {getPositionCheckmark()}</p>
          <p><strong>Euros Group:</strong> {playerGroup} {getGroupCheckamark()}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultPlayerCard;

