import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './route/route';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <ToastContainer />
    </div>
  );
}

export default App;
