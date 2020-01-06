import React from 'react';
import * as R from 'ramda'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
});

const PlayerItem = ({game, mainData}) => {
  const classes = useStyles();

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText className={classes.root}
          primary={R.find(R.propEq('id', game.team_one_id))(mainData).name + ' - ' + R.find(R.propEq('id', game.team_two_id))(mainData).name}
          secondary={game.team_one_goals + ' - ' + game.team_two_goals}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default PlayerItem;