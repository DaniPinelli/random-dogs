import React, { useState, useEffect } from 'react';
import Select from './components/Select';
import Card from './components/Card';
import getDog from './helpers/getDog';
import Error from './components/Error';


const initialDog = {
  image: "",
  breed: {
    id: 1,
    name: ""
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateDog()
  }, [])


  const updateDog = (breedId) => {
    setLoading(true);
    getDog(breedId)
      .then((newDog) => {
        setDog(newDog);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError("Error obtain dog");
        setError(false);
      })
  }

  return (
    <div className="App">
      <h1>Random Dogs</h1>

      <Select updateDog={updateDog} />
      <Card dog={dog} updateDog={updateDog} loading={loading} />
      {error && <Error error={error} />}

    </div>
  );
}

export default App;
