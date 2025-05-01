
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>Välkommen till min React-app</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : "Laddar data..."}</pre>
    </div>
  );
}

export default App;
