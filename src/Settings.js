import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Settings = ({ open, onClose, difficulty, setDifficulty }) => {
  const handleDifficultyChange = (event) => {
    setDifficulty(Number(event.target.value));
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ '& .MuiDialog-paper': { width: '250px' } }}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <FormControl fullWidth variant="outlined" margin="dense">
          <InputLabel>Difficulty</InputLabel>
          <Select
            value={difficulty}
            onChange={handleDifficultyChange}
            label="Difficulty"
          >
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
