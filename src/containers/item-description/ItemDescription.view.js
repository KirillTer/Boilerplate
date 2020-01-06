import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Input from '@material-ui/core/Input';

import PlayerItem from '../../components/PlayerItem'
import GameItem from '../../components/GameItem'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    width: '100%',
    maxWidth: 360,
    margin: '2rem 4rem',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));


const ItemDescriptionView = ({ location, loadMain, loadPlayers, loadGames, searchPlayers, playersData, gamesData, mainData }) => {
  const classes = useStyles();
  const id = /[^/]*$/.exec(location.pathname)[0]

  useEffect(() => {
    loadMain();
    loadPlayers(id);
    loadGames(id);
  }, [loadMain, loadPlayers, loadGames, id])

  const handleSearch = event => {
    console.log(event.target.value)
    searchPlayers(event.target.value)
  }

  return (
    <div className={classes.root}>
      <List className={classes.card}>
        <h3>Players</h3>
        <Input onChange={(e) => handleSearch(e)} placeholder='Serch players'/>
        {playersData && playersData.map(player => {
          return <PlayerItem key={player.id} player={player}/>
        })}
      </List>
      <List className={classes.card}>
        <h3>Games</h3>
        {gamesData && gamesData.map(game => {
          return <GameItem key={game.id} game={game} mainData={mainData}/>
        })}
      </List>
    </div>
  );
}

export default ItemDescriptionView
