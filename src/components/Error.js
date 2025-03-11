import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
  return (
    <div>
        <h1>Oops...!!!!</h1>
        <img src="https://thumbs.dreamstime.com/z/cute-sad-kitten-under-leaf-rainy-day-little-hide-275635535.jpg" width="200px" />
        <h2>Something went wrong</h2>
        <h3>{err.status} : {err.statusText}</h3>
    </div>
  )
}

export default Error