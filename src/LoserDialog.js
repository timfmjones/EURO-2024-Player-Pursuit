import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import PlayerCard from './PlayerCard';

const LoserDialog = ({ open, onClose, onKeepPlaying, onPlayAgain, player }) => {
  const [reveal, setReveal] = useState(false);

  const handleReveal = () => {
    setReveal(true);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{reveal ? "The Player Was:" : "Out of Guesses!"}</DialogTitle>
      <DialogContent>
        {reveal ? <PlayerCard player={player} /> : <p>You've run out of guesses.</p>}
        {reveal ? <p>It was {player.name}</p> : <p>You've run out of guesses.</p>}
      </DialogContent>
      <DialogActions>
        {!reveal && (
          <Button onClick={handleReveal} color="primary">
            Reveal Player
          </Button>
        )}
        <Button onClick={onKeepPlaying} color="primary">
          Keep Playing
        </Button>
        <Button onClick={onPlayAgain} color="primary" >
          Play Again
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoserDialog;
