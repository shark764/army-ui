import React from 'react';
import Form from './Form';

function Register() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return <Form onSubmit={onSubmit} />;
}

export default Register;
