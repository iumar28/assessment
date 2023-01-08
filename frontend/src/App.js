import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
// import Screen from './components/Screen'
import  './App.css'
import Header from './components/Header'


const App = () => {
  return (
    <div>
      <div className="left"><Navbar/></div>
      <Sidebar/>
      {/* <Screen /> */}
    </div>
  )
}

export default App