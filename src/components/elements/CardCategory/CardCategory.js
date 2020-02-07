import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, Grid, IconButton, CardContent } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import BodyCardCategory from './BodyCardCategory';
import { PATH } from '../../../configs/routes';
import ENDPOINT from '../../../configs/services';
import { noop } from '../../../utils';

const CardCategory = props => {
  const classes = useStyles();
  const { item: { categoryId = '', categoryName = '', keyword = []} = {} } = props;

  const onDelete = async (id) => {
    try {
      const { success } = await ENDPOINT.deleteCategory(id);
      if (success) {
        window.location.href = '/';
      }
    } catch (error) {
      noop();
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Grid
            alignItems="center"
            className={classes.buttonWrapper}
            container
            direction="row"
            justify="center"
          >
            <Link to={`${PATH.EDIT_CATEGORY}${categoryId}`}>
              <IconButton
                className={classes.iconButtonEdit}
              >
                <Edit />
              </IconButton>
            </Link>
            <IconButton className={classes.iconButtonDelete} onClick={() => onDelete(categoryId)}>
              <Delete />
            </IconButton>
          </Grid>
        }
        classes={{ root: classes.cardHeader }}
        title={categoryName}
      />
      <CardContent>
        {keyword.map((item, index) => {
          const withLine = index !== 0;
          if (withLine) return (
            <div key={index}>
              <div className={classes.line} />
              <BodyCardCategory item={item}  />
            </div>
          );
          return (<BodyCardCategory item={item} key={index} />);
        })}
      </CardContent>
    </Card>
  );
};

export default CardCategory;

CardCategory.propTypes = {
  item: PropTypes.object.isRequired
};
