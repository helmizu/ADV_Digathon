import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import ListItem from '../../components/ListItem';
import { IMAGES } from '../../configs';
// import { toLowerCase } from '../../utils/text';

export default class Component extends React.Component {
  componentWillMount() {
    this.props.actions.getListOfDevelopers();
  }

  _renderList() {
    const { data } = this.props;
    if (data.length === 0) {
      return (
        <p>No data</p>
      );
    } else {
      return (
        <Grid container justify="center" spacing={24}>
          {
            data.map((item, idx) => (
              <Grid item key={idx} md={1} sm={6} xs={12}>
                {/* <ListItem text={item} url={ROUTES.DEVELOPER(toLowerCase(item))} /> */}
                asdsd
              </Grid>
            ))
          }
        </Grid>
      );
    }
  }

  render() {
    const { classes, isLoading } = this.props;
    if (isLoading) {
      return (
        <Typography variant="display2">Loading...</Typography>
      );
    } else {
      return (
        <section className={classes.container}>
          <img className={classes.logo} src={IMAGES.LOGO} />
          <Typography variant="display2">App is Ready</Typography>
          <Typography className={classes.routeExample}>Route example:</Typography>
          {this._renderList()}
        </section>
      );
    }
  }
}

Component.defaultProps = {
  actions: {},
  classes: {},
  data: [],
  isLoading: false,
};

Component.propTypes = {
  actions: PropTypes.object,
  classes: PropTypes.object,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};
