
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Component from './component';
import styles from './styles';

function mapStateToProps(state) {
  return {
    pageBase: state.pageBase
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const Styled = withStyles(styles)(Component);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Styled);
