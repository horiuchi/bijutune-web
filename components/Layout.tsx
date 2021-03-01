import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const version = require('../package.json').version;

const useStyles = makeStyles({
  footer: {
    position: 'fixed',
    bottom: '0.5rem',
    right: '0.5rem',
  },
});

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      {children}
      <Box className={classes.footer} component="footer" color="text.secondary">
        v{version}
      </Box>
    </Container>
  );
};

export default Layout;
