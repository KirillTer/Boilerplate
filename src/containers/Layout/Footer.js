import React from 'react';
import { Link as RouterLink } from "react-router-dom";
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//     },
// }))

const Footer = () => {
    // const classes = useStyles();

    return(
        <Typography variant="h6" noWrap>
            <Link component={RouterLink} to="/main" color="secondary">
                Footer
            </Link>
        </Typography>
    )
}

export default Footer