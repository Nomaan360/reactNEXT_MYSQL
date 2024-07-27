"use client"; // This directive marks the file as a Client Component

import React, { useState,useEffect } from 'react';

const jsonform = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
        try {
          const response = await fetch('/api/getdataapi');

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setData(result);
        } catch (error) {
          setError(error.message);
        } finally {
          //setLoading(false);
        }
    }
  
    fetchData();
  },[])
  console.log(data);

  const deleterow=(uname)=> {
    console.log('vcxv',uname);
  }

  return (
    <div>
    {error && <div>Error: {error}</div>}
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Number</th>
          <th colSpan="2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{item.uname}</td>
            <td>{item.unumber}</td>
            <td><a onClick={deleterow(item.uname)}>Delete</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default jsonform;