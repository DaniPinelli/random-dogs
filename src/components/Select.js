import React, { useState, useEffect } from 'react'
import getBreeds from '../helpers/getBreeds'
import Error from './Error'


const initialBreeds = [
    {
        id: 0,
        name: 'Select'
    }
]


const Select = ({ updateDog }) => {

    const [breeds, setBreeds] = useState(initialBreeds)
    const [error, setError] = useState(null)

    useEffect(() => {
        updateBreeds();
    }, [])

    const updateBreeds = () => {
        getBreeds()
            .then(newbreeds => {
                setBreeds(newbreeds);
            })
            .catch(err => {
                console.log(err);
                setError("Error obtain breeds");
            })
    }


    return (
        <>
            <select onChange={(e) => updateDog(e.target.value)} >
                {breeds.map(breed => (
                    <option key={breed.id} value={breed.id}>{breed.name}</option>
                ))}
            </select>

            {error && <Error error={error} />}
        </>
    )
}

export default Select