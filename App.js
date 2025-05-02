
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL || 'http://localhost:5000/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div>
      <h1>React-frontend</h1>
      <pre>{data ? JSON.stringify(data, null, 2) : "Laddar data..."}</pre>
    </div>
  );
}

export default App;
