// src/Legend.js
import React from 'react';
import './Legend.css';

const groups = {
  A: ['Germany', 'Hungary', 'Scotland', 'Switzerland'],
  B: ['Spain', 'Croatia', 'Italy', 'Albania'],
  C: ['England', 'Denmark', 'Slovenia', 'Serbia'],
  D: ['France', 'Netherlands', 'Austria', 'Poland'],
  E: ['Belgium', 'Romania', 'Slovakia', 'Ukraine'],
  F: ['Portugal', 'Türkiye', 'Czechia', 'Georgia']
};

const Legend = () => {
  return (
    <div className="legend">
      <div className="groups">
        {Object.entries(groups).map(([group, nations]) => (
          <div key={group} className={`group group-${group}`}>
            <h3 className="diagonal-outline">GROUP {group.toUpperCase()}</h3>
            <ul>
              {nations.map(nation => (
                <li key={nation}>{nation.toUpperCase()}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
