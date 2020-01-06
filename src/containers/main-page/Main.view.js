import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import CardItem from '../../components/CardItem'

const useStyles = makeStyles({
  mainStyle: {
    display: 'flex',
  },
});

const MainView = ({ loadMain, mainData }) => {
  const classes = useStyles();

  useEffect(() => {
    loadMain()
  }, [loadMain])

  return (
    <div className={classes.mainStyle}>
      {mainData && mainData.map(item => {
        return <CardItem key={item.id} item={item} />
      })}
    </div>
  );
};

export default MainView;
