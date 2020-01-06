import {connect} from "react-redux";
import { LOAD_MAIN_START, LOAD_PLAYERS_START, LOAD_GAMES_START, SEARCH_PLAYERS } from '../../store/actionTypes'
import { getMainSelector, getPlayersSelector, getGamesSelector } from '../../store/selectors'
import ItemDescriptionView from './ItemDescription.view';


const mapStateToProps = (state) => {
  return {
    playersData: getPlayersSelector(state),
    gamesData: getGamesSelector(state),
    mainData: getMainSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMain: () => dispatch({
      type: LOAD_MAIN_START
    }),
    loadPlayers: id => dispatch({
      type: LOAD_PLAYERS_START,
      payload: id
    }),
    searchPlayers: searchText => dispatch({
      type: SEARCH_PLAYERS,
      payload: searchText
    }),
    loadGames: id => dispatch({
      type: LOAD_GAMES_START,
      payload: id
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDescriptionView);
