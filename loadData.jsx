import React, { useEffect, useState } from 'react';

const loadData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/dev-cheatsheet/cheatsheets/file.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return data;
};

export default loadData;