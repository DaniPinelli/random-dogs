import React, { useState, useEffect } from 'react'


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


const Select = () => {

    const [breeds, setBreeds] = useState(initialBreeds)

    useEffect(() => {

    }, [])


    return (
        <select>
            {breeds.map(breed => (
                <option key={breed.id} value={breed.id}>{breed.name}</option>
            ))}
        </select>
    )
}

export default Select