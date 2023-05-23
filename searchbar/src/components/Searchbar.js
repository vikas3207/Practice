import React, { useState } from 'react'
import './searchbar.css'

const Searchbar = () => {
    const [input, setInput] = useState('')
    const [catchResult, setCatchResult] = useState([])

    const fetchData = (value) => {
        fetch("http://cdn-api.co-vin.in/api/v2/admin/location/states")
            .then((response) => response.json())
            .then((data) => {
                const states = data.states;
                const results = states.filter((user) => {
                    return (value && user && user.state_name && user.state_name.toLowerCase().includes(value.toLowerCase()));
                });
                setCatchResult(results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    //   fetchData("your_value_here");



    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <>
            <div className='main-container'>
                <div className='inputField'>
                    <input
                        type='text'
                        placeholder='Search States Here'
                        value={input}
                        onChange={(event) => handleChange(event.target.value)}
                    />
                    <button type='submit' className='btn'>Submit</button>

                </div>
                <div className='search-options'>
                    {catchResult.map((result, id) => {
                        return <p key={id}>{result.state_name}</p>
                    })}
                </div>
            </div>
        </>
    )
}

export default Searchbar
