import { createMuiTheme } from '@material-ui/core';
export const COLOR_WHITE = '#ffffff';
export const ONE_HUNDRED = '100';

const initialPalate = {
  primary: {
    moreLight: '#dee3ed',
    light: '#8d98aa',
    main: '#2e434d',
    dark: '#2e434d',
    moreDark: '#1e2c33',
    contrastText: COLOR_WHITE
  },
  secondary: {
    light: '#c24b8e',
    main: '#b31e72',
    dark: '#7d154f',
    moreLight: '#faeff5',
    contrastText: COLOR_WHITE
  },
  grey: {
    light: '#8d98aa',
    main: '#2e434d',
    dark: '#444a52',
    contrastText: COLOR_WHITE
  },
  appBar: {
    main: '#FFFFFF'
  },
  error: {
    main: '#c72037'
  }
};
export const theme = createMuiTheme({
  borderRadius: {
    borderRadius: 24
  },
  description: {
    color: initialPalate.grey.light,
    fontSize: 15,
    letterSpacing: 'normal',
    lineHeight: 1.5,
    textAlign: 'center'
  },
  palette: initialPalate,
  subTitle: {
    color: initialPalate.grey.light,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 2
  },
  textLink: {
    '&:hover': {
      color: initialPalate.secondary.dark
    },
    color: initialPalate.secondary.main,
    cursor: 'pointer',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  title: {
    color: initialPalate.grey.main,
    fontSize: 23,
    fontWeight: 500,
    lineHeight: 1.5
  },
  titleCatalog: {
    color: initialPalate.grey.main,
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 1.5
  },
  typography: {
    fontFamily: ['Ubuntu', 'Ubuntu Medium', 'Ubuntu Reguler'].join(','),
    fontSize: 12,
    useNextVariants: true
  },
  whiteButton: {
    backgroundColor: COLOR_WHITE,
    border: '0 !important',
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.1)'
  }
});
