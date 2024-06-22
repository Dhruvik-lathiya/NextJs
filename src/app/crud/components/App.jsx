import React, { useState } from 'react';

const App = () => {
    const [data, setData] = useState([]);
    const [input, setInput] = useState({});

    const inputHandler = (e) => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitHandler = () => {
        setData([...data, input]); // Using spread operator to create a new array
        setInput({}); // Clear input fields after submission
    };

    const deleteHandler = (ind) => {
        const newData = data.filter((item, index) => index !== ind); // Filtering out the item to delete
        setData(newData); // Updating state with the new array
    };

    return (
        <>
            <div>
                <label>First name:</label>
                <input name='firstname' value={input.firstname || ''} onChange={inputHandler} type='text' />
            </div>
            <div>
                <label>Last name:</label>
                <input name='lastname' value={input.lastname || ''} onChange={inputHandler} type='text' />
            </div>
            <div>
                <button onClick={submitHandler}>SUBMIT</button>
            </div>
            {data.map((val, ind) => (
                <div key={ind}>
                    <h1>{val.firstname}</h1>
                    <h1>{val.lastname}</h1>
                    <button onClick={() => deleteHandler(ind)}>DELETE</button>
                </div>
            ))}
        </>
    );
};

export default App;
