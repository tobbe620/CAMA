import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface HelloWorldResponse {
  message: string;
}

function HelloWorld() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    axios.get<HelloWorldResponse>('http://localhost:8000/hello-world/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Hello, AAAAAAAAAAAAA World!</h1>
      <p>{message}</p>
    </div>
  );
}

export default HelloWorld;
