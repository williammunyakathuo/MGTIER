// import { useState } from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import FullDashboard from './pages/fulldashboard/Dashboard';
import AllSales from './components/sales/AllSales';
import ViewProducts from './components/products/ViewProducts';
import Reports from './components/reports/Reports';
import Account from './components/account/Account';
import Users from './components/users/.AllUsers';
import Notification from './components/notification/Notification';
import Dash from './components/common/dash';


function App() {


  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/dashboard' element={<FullDashboard  />} >
          <Route index element={<Dash/>}></Route>
          <Route path='Sales' element={<AllSales/>}></Route>
          <Route path='Products' element={<ViewProducts/>}></Route>
          <Route path='Reports' element={<Reports />}></Route>
          <Route path='Account' element={<Account />}></Route>
          <Route path='Notification' element={<Notification />}></Route>
          <Route path='Users' element={<Users/>}></Route>
        </Route>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
