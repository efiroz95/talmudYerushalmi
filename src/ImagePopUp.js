import * as React from 'react';
import {useState} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Draggable from 'react-draggable';

function ImagePopUp(props) {
  const { onClose, open, url } = props;

  const handleClose = () => {
    onClose();
  };

  const [size, setSize] = useState(100)
    
  const zoomIn = ()=>{
      setSize(size+10)
  }

  const zoomOut = ()=>{
    if (size>100) {
      setSize(size-10)
    }
  }

  return (
    <Draggable>
      <Dialog onClose={handleClose} open={open}>
      <Button variant="outlined" onClick={zoomIn}>+</Button>
      <Button variant="outlined" onClick={zoomOut}>-</Button>
      <img src={url} width={size+"%"}/>
      </Dialog>
    </Draggable>
  );
}

export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        לחצו כאן להצגת התמונה
      </Button>
      <ImagePopUp
        url={props.url}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}