import { createMuiTheme } from '@material-ui/core';
import colors from './styles/_colors.scss';

export default createMuiTheme({
  overrides: {
    MuiMenuItem: {
      root: {
        '&:hover': {
          backgroundColor: colors.background,
        },
      },
    },
    MuiMenu: {
      paper: {
        borderRadius: '2px',
      },
      list: {
        padding: '0',
      },
    },
  },
});
