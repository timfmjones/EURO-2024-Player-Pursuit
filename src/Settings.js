import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Slider, Typography } from '@mui/material';

const Settings = ({ open, onClose, difficulty, setDifficulty, maxGuesses, setMaxGuesses }) => {
  const handleDifficultyChange = (event, newValue) => {
    setDifficulty(newValue);
  };

  const handleMaxGuessesChange = (event, newValue) => {
    setMaxGuesses(newValue);
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ '& .MuiDialog-paper': { width: '300px' } }}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <Typography gutterBottom>Difficulty</Typography>
        <Slider
          value={difficulty}
          onChange={handleDifficultyChange}
          aria-labelledby="difficulty-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={3}
          valueLabelFormat={(value) => {
            switch (value) {
              case 1:
                return 'Easy';
              case 2:
                return 'Medium';
              case 3:
                return 'Hard';
              default:
                return value;
            }
          }}
        />
        <Typography gutterBottom>Number of MaxGuesses</Typography>
        <Slider
          value={maxGuesses}
          onChange={handleMaxGuessesChange}
          aria-labelledby="MaxGuesses-slider"
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={10}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Settings;
