import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

const ConfirmDeleteDailog = ({open, handleclose, deleteHandler}) => {
  return (
  <Dialog open={open} onClose={handleclose}>
    <DialogTitle>Confirm Delete</DialogTitle>
    <DialogContent>
        <DialogContentText>
            Are you Sure! You Wanted To Delete This Group.
        </DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={handleclose} >No</Button>
        <Button onClick={deleteHandler} color='error'>Yes</Button>
    </DialogActions>
  </Dialog>
  );
}

export default ConfirmDeleteDailog