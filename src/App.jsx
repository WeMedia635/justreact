import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import CreateDatabase from './page/CreateDatabase'; // import the page
import CardList from './Cards';
import Hamburger from './component/Hamburger';

const App = () => {

  return (
 
    <>
      <Hamburger />
    </>
  );
}

export default App