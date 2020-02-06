import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  formControl: {
    width: '100%'
  },
  inputControl: {
    border: '1px solid #d3d3d3',
    borderRadius: 4,
    padding: '18.5px 14px'
  },
  inputAddormentControl: {
    position: 'absolute',
    right: 0
  },
}));


export default useStyles;
