import React, { useState, useEffect } from 'react'
import getBreeds from '../helpers/getBreeds'


const initialBreeds = [
    {
        id: 1,
        name: 'Labrador Retriever'
    },
    {
        id: 2,
        name: 'Hulsky'
    }
]


const Select = ({ updateDog }) => {

    const [breeds, setBreeds] = useState(initialBreeds)

    useEffect(() => {
        updateBreeds();
    }, [])

    const updateBreeds = () => {
        getBreeds()
            .then(newbreeds => {
                setBreeds(newbreeds);
            })
    }


    return (
        <select onChange={(e) => updateDog(e.target.value)} >
            {breeds.map(breed => (
                <option key={breed.id} value={breed.id}>{breed.name}</option>
            ))}
        </select>
    )
}

export default Select