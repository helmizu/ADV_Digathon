import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';

const BodyCardCategory = props => {
  const { item: { title = '', match: { text = '', count = '' } = {}, before = '', after = '' } = {} } = props;
  const isEmpty = (text = '') => text || '-';
  return (
    <Grid
      container
      direction="row"
    >
      <Grid item style={{ padding: 4 }} xs={6}>
        <Typography color="textSecondary" variant="body2">Title Name</Typography>
        <Typography color="textPrimary" variant="body1">{isEmpty(title)}</Typography>
      </Grid>
      <Grid item style={{ padding: 4 }} xs={6}>
        <Typography color="textSecondary" variant="body2">Text Match</Typography>
        <Typography color="textPrimary" variant="body1">{isEmpty(text)}</Typography>
      </Grid>
      <Grid item style={{ padding: 4 }}  xs={4}>
        <Typography color="textSecondary" variant="body2">Count Text Match</Typography>
        <Typography color="textPrimary" variant="body1">{`${isEmpty(count)}`}</Typography>
      </Grid>
      <Grid item style={{ padding: 4 }} xs={4}>
        <Typography color="textSecondary" variant="body2">Text Before</Typography>
        <Typography color="textPrimary" variant="body1">{isEmpty(after)}</Typography>
      </Grid>
      <Grid item style={{ padding: 4 }} xs={4}>
        <Typography color="textSecondary" variant="body2">Text After</Typography>
        <Typography color="textPrimary" variant="body1">{isEmpty(before)}</Typography>
      </Grid>
    </Grid>
  );
};

export default BodyCardCategory;

BodyCardCategory.propTypes = {
  item: PropTypes.object.isRequired
};
