import React from 'react';
import NavBar from './components/Navbar/navbar';
import PersonalInfo from './components/PersonalInfo/personInfo';
import Homepage from './components/Homepage/homepage';
import Projects from './components/Projects/projects';
import Stack from './components/Stack/stack';

function App() {
  return (
    <div>
      <NavBar />
      <Homepage />
      <PersonalInfo />
      <Projects />
      <Stack />
    </div>
  );
}

export default App;
