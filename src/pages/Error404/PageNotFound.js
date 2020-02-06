import React from 'react';
import { Button, Container } from '@material-ui/core';
import useStyles from './useStyles';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../configs';

const PageNotFound = () => {
  const message = 'Page Not Found';
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <h1 className={classes.textStyle}>404</h1>
      <h1 className={classes.subTextStyle}>{message}</h1>
      <Link className={classes.link} to={ROUTES.HOME()} >
        <Button className={classes.buttonStyle} >
            Back to Home
        </Button>
      </Link>
    </Container>
  );
};

export default PageNotFound;
