import React from 'react';

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import Rowpost from './Components/RowPost/RowPost';
import {originals,action,HorrorMovies} from './urls'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Rowpost url={originals} title='Netflix Originals'/>
    <Rowpost url={action}title='Action' isSmall/>
    <Rowpost url={HorrorMovies} title='HorrorMovies'/>
    </div>
  );
}

export default App;
