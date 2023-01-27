import React from 'react'
import {
  Route,
  Routes

} from "react-router-dom";
import Grid from './Grid';
import Home from './Home';

const AllRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path='/' element={ <Home/>}/>
              <Route path='/grid' element={ <Grid/>}/>
          
          </Routes>
      </div>
  )
}

export default AllRoutes