// src/PlayerCard.js
import React from 'react';
import { groups, positionGroups } from './players';
import './PlayerCard.css';

const PlayerCard = ({ player, targetPlayer }) => {
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
  const targetGroup = getGroup(targetPlayer.nation);
  const targetPositionGroup = getPositionGroup(targetPlayer.position);
  const playerPositionGroup = getPositionGroup(player.position);

  const getPositionClass = (position) => {
    if (position === player.position) {
      if (position === targetPlayer.position) {
        return 'green';
      } else if (playerPositionGroup === targetPositionGroup) {
        return 'yellow';
      } else {
        return 'red';
      }
    }
    return '';
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
    if (player.age === targetPlayer.age) {
      return '✔';
    } else if (player.age < targetPlayer.age) {
      return '↑';
    } else {
      return '↓';
    }
  };

  const getGroupCheckamark = () => {
    if (playerGroup === targetGroup) {
      return '✔';
    } else {
      return '✖';
    }
  };

  const getNationCheckmark = () => {
    if (player.nation === targetPlayer.nation) {
      return '✔';
    } else {
      // return '✗';
      return '✖';
    }
  };

  const getPositionCheckmark = () => {
    if (player.position === targetPlayer.position) {
      return '✔';
    } else {
      // return '✗';
      return '✖';
    }
  };

  const getNameCheckmark = () => {
    if (player.name === targetPlayer.name) {
      return '✔';
    } else {
      // return '✗';
      return '✖';
    }
  };


  return (
    <div className="player-card">
      <h2>{player.name} {getNameCheckmark()}</h2>
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
          <p style={{color: 'white'}}><strong>Nation:</strong> {player.nation} {getNationCheckmark()}</p>
          <p style={{color: 'white'}}><strong>Age:</strong> {player.age} {getAgeArrow()}</p>
          <p style={{color: 'white'}}><strong>Position:</strong> {player.position} {getPositionCheckmark()}</p>
          <p style={{color: 'white'}}><strong>Euros Group:</strong> {playerGroup} {getGroupCheckamark()}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

// // src/PlayerCard.js
// import React from 'react';
// import './PlayerCard.css';

// const PlayerCard = ({ player, targetPlayer }) => {
//   const getPositionColor = (position) => {
//     if (position === targetPlayer.position) {
//       return 'green';
//     } else if (targetPlayer.positionGroups.includes(position)) {
//       return 'yellow';
//     } else {
//       return 'red';
//     }
//   };

//   return (
//     <div className="player-card">
//       <h2>{player.name}</h2>
//       <div className="formation">
//         <div className={`position position-1 ${getPositionColor('Goalkeeper')}`}></div>
//         <div className={`position position-2 ${getPositionColor('Left Back')}`}></div>
//         <div className={`position position-3 ${getPositionColor('Center Back')}`}></div>
//         <div className={`position position-4 ${getPositionColor('Right Back')}`}></div>
//         <div className={`position position-5 ${getPositionColor('Defensive Midfield')}`}></div>
//         <div className={`position position-6 ${getPositionColor('Midfielder')}`}></div>
//         <div className={`position position-7 ${getPositionColor('Attacking Midfield')}`}></div>
//         <div className={`position position-8 ${getPositionColor('Left Wing')}`}></div>
//         <div className={`position position-9 ${getPositionColor('Striker')}`}></div>
//         <div className={`position position-10 ${getPositionColor('Right Wing')}`}></div>
//       </div>
//       <p>Nation: {player.nation}</p>
//       <p>Age: {player.age} {targetPlayer && (player.age < targetPlayer.age ? '↑' : player.age > targetPlayer.age ? '↓' : '')}</p>
//       <p>Position: {player.position}</p>
//       <p>Euros Group: {player.group}</p>
//     </div>
//   );
// };

// export default PlayerCard;
