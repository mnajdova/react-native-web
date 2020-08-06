/* eslint-disable react/prop-types */
import React from 'react';
import classnames from 'classnames';
import View from './View';
import { makeStyles } from '@material-ui/styles';

const getColor = color => {
  switch (color) {
    case 0:
      return '#14171A';
    case 1:
      return '#AAB8C2';
    case 2:
      return '#E6ECF0';
    case 3:
      return '#FFAD1F';
    case 4:
      return '#F45D22';
    case 5:
      return '#E0245E';
    default:
      return 'transparent';
  }
};

const useStyles = makeStyles({
  outer: {
    alignSelf: 'flex-start',
    padding: 4
  },
  row: {
    flexDirection: 'row'
  },
  background: (props) => ({
    backgroundColor: getColor(props.color),
  }),
  fixed: {
    width: 6,
    height: 6
  }
});

function Box({ color, fixed = false, layout = 'column', outer = false, ...other }) {
  const classes = useStyles({ color });

  return (
    <View
      {...other}
      className={classnames(classes.background, {
        [classes.fixed]: fixed,
        [classes.outer]: outer,
        [classes.row]: layout === 'row'
      })}
    />
  );
}

export default Box;
