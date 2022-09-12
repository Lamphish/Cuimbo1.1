import React from 'react';
import createCircle from './scripts/newElement';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Brightness1OutlinedIcon from '@mui/icons-material/Brightness1Outlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import ChangeHistoryOutlinedIcon from '@mui/icons-material/ChangeHistoryOutlined';
import './static/playground.css';

const actions = [
  { icon: <Brightness1OutlinedIcon />, name: 'Circle'},
  { icon: <CropSquareOutlinedIcon />, name: 'Square'},
  { icon: <ChangeHistoryOutlinedIcon />, name: 'Triangle'},
];

export default function playground() {
  return (
    <div className='playground__inner'>
      <canvas id='playground'></canvas>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {createCircle()}}
          />
        ))}
      </SpeedDial>
    </div>
  );
}