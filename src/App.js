import React, { useState, useEffect } from 'react';
import './App.css';
import { players, groups, positionGroups } from './players';
import playersOfTheDay from './playersOfTheDay';
import PlayerCard from './PlayerCard';
import Legend from './Legend';
import Settings from './Settings';
import WinnerDialog from './WinnerDialog';
import LoserDialog from './LoserDialog';
import { IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from './euro2024.png'; // Adjust the path according to your project structure
import bottomBorder from './footer.jpg'; // Adjust the path according to your project structure
import { Helmet } from 'react-helmet';

const MAX_GUESSES = 6;

const App = () => {
  const [targetPlayer, setTargetPlayer] = useState(null);
  const [guesses, setGuesses] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [feedback, setFeedback] = useState([]);
  const [difficulty, setDifficulty] = useState(1);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [winnerDialogOpen, setWinnerDialogOpen] = useState(false);
  const [loserDialogOpen, setLoserDialogOpen] = useState(false);
  const [isFirstGame, setIsFirstGame] = useState(true);

  useEffect(() => {
    setNewTargetPlayer();
  }, [difficulty]);

  const setNewTargetPlayer = () => {
    const today = new Date().toISOString().split('T')[0];
    const playerOfTheDayName = playersOfTheDay[today];
    let selectedPlayer;

    if (isFirstGame && playerOfTheDayName) {
      selectedPlayer = players.find(player => player.name === playerOfTheDayName);
      setIsFirstGame(false);
    } else {
      const filteredPlayers = players.filter(player => player.difficulty <= difficulty);
      const randomPlayer = filteredPlayers[Math.floor(Math.random() * filteredPlayers.length)];
      selectedPlayer = randomPlayer;
    }

    setTargetPlayer(selectedPlayer);
  };

  const handleGuess = () => {
    if (guesses.length >= MAX_GUESSES) {
      setLoserDialogOpen(true);
      return;
    }

    const guessedPlayer = players.find(player => {
      const playerFullName = player.name.toLowerCase();
      const playerLastName = player.name.split(' ').slice(-1)[0].toLowerCase();
      const inputLowerCase = inputValue.toLowerCase();
      return playerFullName === inputLowerCase || playerLastName === inputLowerCase;
    });

    if (guessedPlayer) {
      setGuesses([...guesses, guessedPlayer]);
      setFeedback([...feedback, generateFeedback(guessedPlayer)]);
      if (guessedPlayer.name === targetPlayer.name) {
        setWinnerDialogOpen(true);
      }
    } else {
      alert('Player not found!');
    }
    setInputValue('');
  };

  const generateFeedback = (guessedPlayer) => {
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

    const targetGroup = getGroup(targetPlayer.nation);
    const guessedGroup = getGroup(guessedPlayer.nation);
    const targetPositionGroup = getPositionGroup(targetPlayer.position);
    const guessedPositionGroup = getPositionGroup(guessedPlayer.position);

    let ageFeedback = 'red';
    let ageArrow = '';
    if (guessedPlayer.age === targetPlayer.age) {
      ageFeedback = 'green';
    } else if (guessedPlayer.age < targetPlayer.age) {
      ageArrow = '↑';
    } else {
      ageArrow = '↓';
    }

    return {
      nation: guessedPlayer.nation === targetPlayer.nation
        ? 'green'
        : guessedGroup === targetGroup
        ? 'yellow'
        : 'red',
      age: ageFeedback,
      ageArrow: ageArrow,
      position: guessedPlayer.position === targetPlayer.position
        ? 'green'
        : guessedPositionGroup === targetPositionGroup
        ? 'yellow'
        : 'red'
    };
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleGuess();
    }
  };

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  const handleWinnerDialogClose = () => {
    setWinnerDialogOpen(false);
  };

  const handlePlayAgain = () => {
    setGuesses([]);
    setFeedback([]);
    setWinnerDialogOpen(false);
    setLoserDialogOpen(false);
    setNewTargetPlayer();
    setIsFirstGame(true); // Reset the first game flag
  };

  const handleShare = () => {
    if (!targetPlayer) return;
    const shareText = `I guessed the correct player: ${targetPlayer.name}! Can you do it? Try the Soccer Player Guessing Game!`;
    if (navigator.share) {
      navigator.share({
        title: 'EURO 2024 Guessing Game',
        text: shareText,
        url: window.location.href
      }).catch((error) => console.error('Error sharing:', error));
    } else {
      alert(shareText);
    }
  };

  const handleKeepPlaying = () => {
    setLoserDialogOpen(false);
  };

  return (
    <div className="App">
      <Helmet>
        <title>EURO 2024 Guesser</title>
      </Helmet>
      <img src={logo} alt="EURO 2024 Logo" className="logo" />
      
      <h1>EURO 2024 PLAYER PURSUIT</h1>
      <div className="header-container">
        <div className="input-container">
          <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Guess the player"
          className="input-player"
          />
          <button className='guess-button' onClick={handleGuess}>GUESS</button>
        </div>
        <IconButton onClick={handleSettingsOpen} aria-label="settings">
          <SettingsIcon />
        </IconButton>
        <Settings
          open={settingsOpen}
          onClose={handleSettingsClose}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          className="settings-dialog"
        />
      </div>
      <p>Remaining Guesses: {MAX_GUESSES - guesses.length}</p>
      <div className="container">
        <div className="guesses-container">
        {guesses.slice().reverse().map((guess, index) => (
          <PlayerCard key={index} player={guess} targetPlayer={targetPlayer} />
        ))}
      </div>
      <div>
        <Legend />
      </div>
      
      </div>
      
      {/* <Legend /> */}
      {targetPlayer && (
        <WinnerDialog
          open={winnerDialogOpen}
          onClose={handleWinnerDialogClose}
          onPlayAgain={handlePlayAgain}
          onShare={handleShare}
          player={targetPlayer}
          guesses={guesses.length}
        />
      )}
      {targetPlayer && (
        <LoserDialog
          open={loserDialogOpen}
          onClose={handleKeepPlaying}
          onKeepPlaying={handleKeepPlaying}
          player={targetPlayer}
        />
      )}
      <div className="bottom-border"></div>
    </div>
  );
};

export default App;
