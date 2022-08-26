import React from 'react';
import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <>
   <h1 className='not-found'> Not found 404</h1>
        <NavLink to='/'>Back to Home ...</NavLink>
        </>
    );
};

export default NotFound;