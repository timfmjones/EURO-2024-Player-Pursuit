// src/WinnerDialog.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const WinnerDialog = ({ open, onClose, onPlayAgain, onShare, player }) => {
  if (!player) {
    return null;
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Congratulations!</DialogTitle>
      <DialogContent>
        <p>You guessed the correct player: {player.name}!</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onPlayAgain} color="primary">
          Play Again
        </Button>
        <Button onClick={onShare} color="primary">
          Share
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WinnerDialog;
