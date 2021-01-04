import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { useStyles } from '../../../styles';
import Weapon from './Weapon';

function Weapons({ weapons, handleRemove }) {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {weapons.map((weapon) => (
          <Weapon key={weapon.id} weapon={weapon} handleRemove={handleRemove} />
        ))}
      </Grid>
    </Container>
  );
}

export default Weapons;
