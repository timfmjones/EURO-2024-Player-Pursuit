// src/Settings.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Settings = ({ open, onClose, difficulty, setDifficulty }) => {
  const handleDifficultyChange = (event) => {
    setDifficulty(Number(event.target.value));
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <FormControl fullWidth>
          <InputLabel>Difficulty</InputLabel>
          <Select value={difficulty} onChange={handleDifficultyChange}>
            <MenuItem value={1}>1 (Easy)</MenuItem>
            <MenuItem value={2}>2 (Medium)</MenuItem>
            <MenuItem value={3}>3 (Hard)</MenuItem>
          </Select>
        </FormControl>
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
