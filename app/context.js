"use client";
import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';

export const DataContext = createContext(null);

const DataStore = (props) => {
    const [Info, setInfo] = useState([]);
  return (

    <div>
    < DataContext.Provider value={[Info, setInfo]}>{props.children}</DataContext.Provider>   
    </div>
  )
}

export default DataStore;
