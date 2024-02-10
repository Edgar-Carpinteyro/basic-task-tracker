import React from 'react';
import { DisplayTasks } from '../components/DisplayTasks';
import { Footer } from '../components/Footer';

import './App.css';

function App() {


  return (
    <>
      <h1>Task List</h1>
      < DisplayTasks/>
      <br />
      <Footer />
    </>
  )
}

export default App
