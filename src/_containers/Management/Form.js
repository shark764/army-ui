import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button, Container, Grid } from '@material-ui/core';

import FormInput from '../../_components/controls/input';
import FormSelect from '../../_components/controls/select';
import FormTextarea from '../../_components/controls/textarea';

import { useStyles } from '../../styles';

function Form({ onSubmit, values = {} }) {
  const methods = useForm({
    defaultValues: values,
  });
  const { handleSubmit } = methods;

  const classes = useStyles();

  return (
    <div style={{ padding: 40 }}>
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
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <FormInput name="name" label="Name" />
                </Grid>

                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <FormSelect
                    name="type"
                    label="Type"
                    options={[
                      {
                        value: 'Anti-Materiel Rifle',
                        text: 'Anti-Materiel Rifle',
                      },
                      { value: 'Assault Rifle', text: 'Assault Rifle' },
                      {
                        value: 'General Purpose Machine Gun',
                        text: 'General Purpose Machine Gun',
                      },
                      { value: 'Heavy Machine Gun', text: 'Heavy Machine Gun' },
                      { value: 'Pistol', text: 'Pistol' },
                      { value: 'Recoilless Gun', text: 'Recoilless Gun' },
                      { value: 'Rifle', text: 'Rifle' },
                      { value: 'Rocket Launcher', text: 'Rocket Launcher' },
                      { value: 'Sniper Rifle', text: 'Sniper Rifle' },
                      {
                        value: 'Stand-Alone Grenade Launcher',
                        text: 'Stand-Alone Grenade Launcher',
                      },
                      { value: 'Sub-machine Gun', text: 'Sub-machine Gun' },
                      {
                        value: 'Under-Barrel Grenade Launcher',
                        text: 'Under-Barrel Grenade Launcher',
                      },
                    ]}
                  />
                </Grid>

                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <FormSelect
                    name="calibre"
                    label="Calibre"
                    options={[
                      { value: '0.45', text: '0.45' },
                      { value: '12.7x107mm', text: '12.7x107mm' },
                      { value: '12.7x99mm', text: '12.7x99mm' },
                      { value: '40mm', text: '40mm' },
                      { value: '40x46mm', text: '40x46mm' },
                      { value: '5.45x39mm', text: '5.45x39mm' },
                      { value: '5.56x45mm', text: '5.56x45mm' },
                      { value: '66mm', text: '66mm' },
                      { value: '7.62x25mm', text: '7.62x25mm' },
                      { value: '7.62x39mm', text: '7.62x39mm' },
                      { value: '7.62x51mm', text: '7.62x51mm' },
                      { value: '7.62x54R', text: '7.62x54R' },
                      { value: '7.92x57mm', text: '7.92x57mm' },
                      { value: '73mm', text: '73mm' },
                      { value: '82mm', text: '82mm' },
                      { value: '9x19mm', text: '9x19mm' },
                    ]}
                  />
                </Grid>

                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <FormTextarea name="description" label="Description" />
                </Grid>

                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <FormTextarea name="features" label="Features" />
                </Grid>

                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <FormTextarea name="distribution" label="Distribution" />
                </Grid>

                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <FormTextarea name="imageUrl" label="Image Url" />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
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
    </div>
  );
}

export default Form;
