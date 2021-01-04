import axios from 'axios';
import React from 'react';
import { serverUrl } from '../../../server/utils';
import { log } from '../../../utils';
import Form from '../Form';

function Register() {
  const create = async (payload) => {
    const { data } = await axios.post(`${serverUrl}/weapons`, payload, {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
    log('success', 'Weapon created', data);
  };

  const onSubmit = (data) => {
    create(data);
  };

  return <Form onSubmit={onSubmit} />;
}

export default Register;
