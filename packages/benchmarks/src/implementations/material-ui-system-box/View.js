/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    alignItems: 'stretch',
    borderWidth: 0,
    borderStyle: 'solid',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
    // fix flexbox bugs
    minHeight: 0,
    minWidth: 0
  }
});

function View(props) {
  const classes = useStyles();
  return <Box {...props} m={0} p={0} position="relative" className={`${classes.root} ${props.className}`} />;
}

export default View;
