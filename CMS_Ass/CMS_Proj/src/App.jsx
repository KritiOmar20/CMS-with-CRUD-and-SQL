import React, { useEffect } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './Components/Home'
import AddUser from './Components/AddUsers'
import ViewUsers from './Components/ViewUsers'
import EditUser from './Components/EditUsers'

const App = () => {

  return (
    <div><Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/viewUsers" element={<ViewUsers/>} />
        <Route path="/edit" element={<EditUser  />} />
      </Routes>

    </Router>
    </div>
  )
}

export default App