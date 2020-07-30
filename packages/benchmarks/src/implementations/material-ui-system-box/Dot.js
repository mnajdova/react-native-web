/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    cursor: 'pointer',
    width: 0,
    height: 0,
    borderColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    transform: 'translate(50%, 50%)'
  },
  dynamic: ({ size, color }) => ({
    borderBottomColor: color,
    borderRightWidth: `${size / 2}px`,
    borderBottomWidth: `${size / 2}px`,
    borderLeftWidth: `${size / 2}px`,
  })
});

function Dot(props) {
  const classes = useStyles(props);
  return <Box ml={`${props.x}px`} mt={`${props.y}px`} className={`${classes.root} ${classes.dynamic}`}>{props.children}</Box>;
}

export default Dot;
