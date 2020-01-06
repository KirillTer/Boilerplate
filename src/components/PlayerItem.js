import React from 'react';
import { history } from "../store/configureStore";
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
});

const PlayerItem = ({player}) => {
  const classes = useStyles();

  const playerToogle = (id) => {
    console.log('Clicked', id)
    history.push(`/main/player/${id}`)
  }

  return (
    <>
      <ListItem alignItems="flex-start" onClick={() => playerToogle(player.id)} className={classes.root}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={player.flag_url} />
        </ListItemAvatar>
        <ListItemText
          primary={player.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Nationality - {player.nationality}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

export default PlayerItem;