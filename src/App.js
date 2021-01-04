import React from 'react';
import { Toys } from '@material-ui/icons';
import Copyright from './_components/Copyright';
import { useStyles } from './styles';
import Routing from './_components/routing';
import { useHistory } from 'react-router-dom';
import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from '@material-ui/core';

function App() {
  let history = useHistory();
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Toys className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Army Weapons and Equipment Catalog
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Weapons List
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Kid, I&apos;m a zoo clown. Now, buy a weapon or go to hell.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push('/register')}
                  >
                    Register a weapon
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => history.push('/')}
                  >
                    Ok, I&apos;ll buy one
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Routing />
      </main>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}

export default App;
