import './App.css';
import React,{useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const [data,setData] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      setData(response.data);
    })
  },[]);

  return (
    <div className="App">
      {data !== null ? (
        data.map((user) => {
          return(
            <h2>{user.name}</h2>
          );
        })
      ): (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
