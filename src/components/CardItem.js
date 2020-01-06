import React from 'react';
import { history } from "../store/configureStore";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: '18rem',
    textAlign: 'center',
    margin: '2rem'
  },
  media: {
    height: '8rem',
    width: '8rem',
    margin: '2rem auto 0'
  },
});

const CardItem = ({item}) => {
  const classes = useStyles();

  const cardToogle = (id) => {
    history.push(`/main/item/${id}`)
  }

  return (
    <Card className={classes.card} onClick={() => cardToogle(item.id)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.logo_url}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            City - {item.city}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Founded - {item.founded}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Budget - {item.budget}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardItem;