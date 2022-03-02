import React, { useState, useEffect } from 'react';
import Select from './components/Select';
import Card from './components/Card';
import getDog from './helpers/getDog';


const initialDog = {
  image: "",
  breed: {
    id: 0,
    name: ""
  }
}

function App() {
  const [dog, setDog] = useState(initialDog);
  const [loading, setLoading] = useState(false);

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
  }

  return (
    <div className="App">
      <h1>Random Dogs</h1>

      <Select updateDog={updateDog} />
      <Card dog={dog} updateDog={updateDog} loading={loading} />

    </div>
  );
}

export default App;
