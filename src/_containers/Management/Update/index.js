import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { serverUrl } from '../../../server/utils';
import { log } from '../../../utils';
import Form from '../Form';

function Update() {
  const [weapon, setWeapon] = useState({});
  const { id } = useParams();

  const fetchWeapon = useCallback(async () => {
    // callback
    const { data } = await axios.get(`${serverUrl}/weapons/${id}`);
    setWeapon(data);
  }, [id]);

  useEffect(() => {
    // effect
    fetchWeapon();

    return () => {
      // cleanup
      console.log('Drop your weapon!');
    };
  }, [fetchWeapon]);

  const update = async (payload) => {
    const { data } = await axios.put(`${serverUrl}/weapons/${id}`, payload, {
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
    log('success', 'Weapon updated', data);
  };

  const onSubmit = (data) => {
    update(data);
  };

  return <Form onSubmit={onSubmit} values={weapon} key={weapon.id} />;
}

export default Update;
