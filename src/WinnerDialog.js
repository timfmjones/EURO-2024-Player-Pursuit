import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const WinnerDialog = ({ open, onClose, onPlayAgain, onShare, player, guesses }) => {
  if (!player) {
    return null;
  }

  const dialogTitleStyle = {
    backgroundColor: '#0033cc', // Primary main color
    color: '#ffffff', // Common white color
    textAlign: 'center',
  };

  const dialogContentStyle = {
    textAlign: 'center',
    padding: '24px', // theme.spacing(3)
  };

  const dialogActionsStyle = {
    justifyContent: 'center',
    paddingBottom: '16px', // theme.spacing(2)
  };

  const buttonStyle = {
    margin: '8px', // theme.spacing(1)
  };

  const playerNameStyle = {
    fontWeight: 'bold',
    color: 'black', // Secondary main color
  };

  const guessTextStyle = {
    marginTop: '8px', // theme.spacing(1)
    color: '#6d6d6d', // text secondary color
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={dialogTitleStyle}>Congratulations!</DialogTitle>
      <DialogContent style={dialogContentStyle}>
        <p>You guessed the correct player: <span style={playerNameStyle}>{player.name}</span>!</p>
        <p style={guessTextStyle}>It took you {guesses} {guesses === 1 ? 'guess' : 'guesses'}.</p>
      </DialogContent>
      <DialogActions style={dialogActionsStyle}>
        <Button onClick={onPlayAgain} color="primary" style={buttonStyle}>
          Play Again
        </Button>
        <Button onClick={onShare} color="primary" style={buttonStyle}>
          Share
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WinnerDialog;
