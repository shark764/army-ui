import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { serverUrl } from '../../../server/utils';
import { log } from '../../../utils';
import Weapons from './Weapons';

function List() {
  const [weapons, setWeapons] = useState([]);

  const fetchWeapons = async () => {
    const { data } = await axios.get(`${serverUrl}/weapons`);
    setWeapons(data);
  };

  useEffect(() => {
    // effect
    fetchWeapons();

    return () => {
      // cleanup
      console.log('Drop your weapons!');
    };
  }, []);

  const handleRemove = async (id) => {
    const { data } = await axios.delete(`${serverUrl}/weapons/${id}`);
    log('info', 'Weapon removed', data);
    fetchWeapons();
  };

  return <Weapons weapons={weapons} handleRemove={handleRemove} />;
}

export default List;
