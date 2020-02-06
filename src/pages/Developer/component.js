import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { ROUTES } from '../../configs';

export default class Component extends React.Component {
  render() {
    const name = this.props.match.params.name;
    return (
      <section>
        <Typography>
          <Link to={ROUTES.HOME()}>Back to home</Link>
        </Typography>
        <Typography variant="display2">Developer name: {name}</Typography>
      </section>
    );
  }
}

Component.defaultProps = {
  match: {},
};

Component.propTypes = {
  match: PropTypes.object
};
