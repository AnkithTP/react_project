
import React from 'react'
import Sidebar from './components/Sidebar/sidebar'
import Navbar from "./components/Navbar/Navbar";
import { Route,Routes } from 'react-router-dom';
import Add from "./screens/Add/Add"
import List from "./screens/List/List"
import Orders from "./screens/orders/orders"


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
        </div>
    </div>
  )
}

export default App