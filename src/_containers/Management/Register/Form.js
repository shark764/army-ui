import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button, Container, Grid } from '@material-ui/core';

import FormInput from '../../../_components/controls/input';

import { useStyles } from '../../../styles';

function Form({ onSubmit }) {
  const methods = useForm();
  const { handleSubmit } = methods;

  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        <FormProvider {...methods}>
          <form noValidate autoComplete="off">
            <Grid
              container
              spacing={2}
              style={{
                paddingTop: 24,
                paddingBottom: 24,
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              <Grid item xs={6}>
                <FormInput name="name" label="Name" fullWidth />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit(onSubmit)}
                >
                  SUBMIT
                </Button>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Grid>
    </Container>
  );
}

export default Form;
