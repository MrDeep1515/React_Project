import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Home from './createWebsite/home';
import Dashboard from './createWebsite/dashboard';
import Employee from './createWebsite/employee';
import Salary from './createWebsite/salary';
import Showalldata from './createWebsite/showAllData';
import store from './createWebsite/store';
import AllRecords from './createWebsite/AllRecords';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path='/showalldata' element={<Showalldata />} />
          <Route path='/all' element={<AllRecords />} />
          <Route path='/all' element={<Showalldata />} />
          <Route path='/home' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/employee' element={<Employee />}></Route>
          <Route path='/salary' element={<Salary />}></Route>
          <Route path='/showalldata' element={<Showalldata />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);

reportWebVitals();
