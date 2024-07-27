"use client"; // This directive marks the file as a Client Component

import React, { useState } from 'react';

const jsonform = () => {
  const [uname, setUname] = useState('');
  const [unumber, setUnumber] = useState('');

  const handleUnameChange = (e) => {
    setUname(e.target.value);
  };

  const handleUnumberChange = (e) => {
    setUnumber(e.target.value);
  };

  const writeToJsonFile = async () => {
    try {
      const data = {
        uname: uname,
        unumber: unumber,
      };

      const response = await fetch('/api/writeToJson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error writing to file');
      }

      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form>

        <input type="text" className="form-control" value={uname} id="uname" onChange={handleUnameChange}
        />
        <br/>
        <input type="text" className="form-control" value={unumber} id="unumber" onChange={handleUnumberChange}/>
        <br/>


      <button onClick={writeToJsonFile}>Write to JSON File</button>
      </form>
    </div>
  );
};

export default jsonform;