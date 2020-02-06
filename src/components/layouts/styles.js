const drawerWidth = 270;

const styles = theme => ({
  appBar: {
    backgroundColor: '#FFFFFF',
    boxShadow: '10px 1px 10px 0 rgba(0, 0, 0, 0.03) !important',
    color: theme.palette.primary.main,
    transition: theme.transitions.create(['margin', 'width'], {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut,
    }),
    width: `calc(100% - ${drawerWidth}px)`
  },
  avatar: {
    height: 34,
    margin: 0,
    width: 34
  },
  bodyListNotif: {
    backgroundColor: '#f5f7fa'
  },
  content: {
    flexGrow: 1,
    height: '100%',
    marginLeft: -drawerWidth,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp
    }),
  },
  contentShift: {
    marginLeft: 0,
    transition: theme.transitions.create('margin', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeOut
    })
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
    zIndex: 0
  },
  drawerHeader: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    ...theme.mixins.toolbar,
    zIndex: '9999 !important'
  },
  drawerHeaderText: {
    color: theme.palette.secondary.contrastText,
    fontWeight: '500',
    padding: '24px 24px 24px 0',
  },
  drawerPaper: {
    backgroundColor: theme.palette.secondary.dark,
    border: 0,
    width: drawerWidth,
  },
  footer: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      ...theme.description,
      bottom: 30,
      display: 'block',
      fontSize: 14,
      left: 30,
      position: 'absolute',
      width: 180
    }
  },
  grow: {
    flexGrow: 1
  },
  hide: {
    display: 'none'
  },
  line: {
    backgroundColor: theme.palette.secondary.main,
    height: '1.5px',
    width: 'calc(100%)',
  },
  listItemAccount: {
    cursor: 'pointer',
    paddingBottom: 6,
    paddingRight: 0,
    paddingTop: 6
  },
  margin5: {
    margin: '5px'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  menuChild: {
    left: 30,
    position: 'absolute',
    top: 65
  },
  nested: {
    '&:hover': {
      color: theme.palette.secondary.main
    },
    color: theme.palette.primary.main,
    cursor: 'pointer',
    fontFamily: 'Ubuntu',
    fontSize: 15,
    paddingLeft: theme.spacing(7)
  },
  notificationChild: {
    left: '-150px',
    position: 'absolute',
    top: ' 65px',
    width: '260px'
  },
  overlay: {
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    left: 0,
    opacity: 0.4,
    position: 'fixed',
    top: '64px',
    width: '100%',
    zIndex: 2
  },
  padding8: {
    padding: '8px'
  },
  relativePosition: {
    position: 'relative'
  },
  removePadding: {
    padding: 0
  },
  root: {
    display: 'flex',
    height: '100%'
  },
  rootAvatar: {
    minWidth: 48
  },
  sectionDesktop: {
    display: 'none',
    fontSize: 15,
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  shadowTop: {
    boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.03)'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  userName: {
    textOverflow: 'ellipse',
    width: 90
  },
});

export default styles;
