import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ResponsiveDialog = ({ open, onClose, onSubmit, updatedEvent, handleUpdateChange }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        Edit Event
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Type"
          name="evenType"
          value={updatedEvent.evenType}
          onChange={handleUpdateChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          name="description"
          value={updatedEvent.description}
          onChange={handleUpdateChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Packages"
          name="eventPackages"
          value={updatedEvent.eventPackages}
          onChange={handleUpdateChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Count"
          name="participantCount"
          value={updatedEvent.participantCount}
          onChange={handleUpdateChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Charges"
          name="charges"
          value={updatedEvent.charges}
          onChange={handleUpdateChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResponsiveDialog;
