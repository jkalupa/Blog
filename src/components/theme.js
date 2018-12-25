import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';

export default createMuiTheme({
  palette:{
      primary: {
      main:  '#03a9f4',
      contrastText: '#FFFFFF'
    },

    secondary: indigo, // Indigo is probably a good match with pink
  }
});
