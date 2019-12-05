import React, {useState} from 'react';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  white: {
    color: 'white',
  },
}));


const HeaderView = ({ loadMain }) => {
  const classes = useStyles();
  const [join, setJoin] = useState(false)

  const onJoin = () => {
    setJoin(!join)
    loadMain()
  }

  return(
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            <Link component={RouterLink} to="/main" className={classes.white}>
              Chat
            </Link>
          </Typography>
          {!join && <Button color="inherit" onClick={() => onJoin()}>Join to chat</Button>}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default HeaderView