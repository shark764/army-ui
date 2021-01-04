import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Weapons from './Weapons';

function List() {
  const [weapons, setWeapons] = useState([]);

  const fetchWeapons = async () => {
    const { data } = await axios.get('http://localhost:8080/api/v1/weapons');
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

  return <Weapons weapons={weapons} />;
}

export default List;
