
import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import Navbar from "./components/Navbar/Navbar";
import { Route,Routes } from 'react-router-dom';
import Add from "./screens/Add/Add"
import List from "./screens/List/List"
import Orders from "./screens/Orders/Orders"
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  const url= 'https://react-project-1-kq9z.onrender.com'
  return (
    <div className="app">
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/orders' element={<Orders url={url}/>}/>
        </Routes>
        </div>
    </div>
  )
}

export default App