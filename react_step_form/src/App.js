import React, {useState} from 'react';
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Submenu from "./components/Submenu/Submenu";
import { UserForm } from './components/UserForm';

const App = () => {
  const [showQue, setShowQue] = useState(false)
  const clickHandler = () => {
    setShowQue(showQue => !showQue)
  }
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Hero onClick={clickHandler}/>
      <Submenu />
      {showQue ? <UserForm /> : <></>}
    </div>
  );
}

export default App;
