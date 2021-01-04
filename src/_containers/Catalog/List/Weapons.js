import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useStyles } from '../../../styles';
import Weapon from './Weapon';

function Weapons({ weapons }) {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {weapons.map((weapon) => (
          <Weapon key={weapon.id} weapon={weapon} />
        ))}
      </Grid>
    </Container>
  );
}

export default Weapons;
