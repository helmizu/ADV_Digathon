import { makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => createStyles({
  active: {
    color: theme.palette.secondary.contrastText + '!important',
    fontWeight: '500 !important',
  },
  fullWidth: {
    width: '100%'
  },
  item: {
    '&:hover': {
      color: theme.palette.secondary.contrastText + '!important',
      fontWeight: '500 !important',
    },
    color: theme.palette.secondary.main,
    fontFamily: 'Ubuntu',
    fontSize: 16,
    outline: 'none !important',
    margin: '5px auto',
  },
  itemCatalog: {
    '&:hover': {
      color: theme.palette.secondary.contrastText + '!important',
      fontWeight: '500 !important',
    },
    color: theme.palette.secondary.main,
    fontFamily: 'Ubuntu',
    fontSize: 16,
    marginTop: 5,
    outline: 'none !important'
  },
  marginRightZero: {
    marginRight: '0 !important'
  },
  selected: {
    color: theme.palette.secondary.contrastText + '!important',
    fontWeight: '500 !important',
  },
  title: {
    padding: '0px 8px'
  },
}));

export default useStyles;
