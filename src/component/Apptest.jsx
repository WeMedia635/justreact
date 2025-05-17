import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import CreateDatabase from './page/CreateDatabase'; // import the page
import CardList from './Cards';
import Hamburger from './component/Hamburger';

const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//  useEffect(() => {
//   const localstorage = localStorage.getItem('isAuthenticated');
//   // Check if the user is authenticated
//   if (localstorage) {
//     setIsAuthenticated(true);
//   }}, []);
//   // Handle login and logout
//   const handleLogin = () => {
//     setIsAuthenticated(true);
//     localStorage.setItem('isAuthenticated', true);
//   };
//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem('isAuthenticated');
//   }
  return (
    // <Router>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         isAuthenticated ? (
    //           <Navigate to="/dashboard" />
    //         ) : (
    //           <Login onLogin={() => handleLogin()} />
    //         )
    //       }
    //     />
    //     <Route
    //       path="/dashboard"
    //       element={
    //         isAuthenticated ? (
    //           <Dashboard onLogout={() => handleLogout()} />
    //         ) : (
    //           <Navigate to="/" />
    //         )
    //       }
    //     />
    //     <Route
    //       path="/create-database"
    //       element={
    //         isAuthenticated ? (
    //           <CreateDatabase />
    //         ) : (
    //           <Navigate to="/" />
    //         )
    //       }
    //     />
    //   </Routes>
    // </Router>
    <>
      
      <Hamburger />
    </>
  );
}

export default App