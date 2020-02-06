import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default class Component extends React.Component {
  render() {
    const { children, classes, className, component = 'span', variant, inline, ...rest } = this.props;
    const customClass = className ? `${classes.text} ${className}` : classes.text;
    const props = {
      display: 'block',
      variant: 'body2'
    };
    if (inline) {
      props.display = 'inline';
    }
    if (variant) {
      props.variant = variant;
    }
    return (
      <Typography className={customClass} component={component} {...props} {...rest}>
        {children}
      </Typography>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  component: PropTypes.node,
  inline: PropTypes.bool,
  variant: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
Component.defaultProps = {
  children: undefined,
  classes: {},
  className: '',
  component: undefined,
  inline: false,
  variant: false
};
