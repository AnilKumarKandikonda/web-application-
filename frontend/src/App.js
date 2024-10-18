import React from 'react';
import { Route, Routes } from "react-router-dom";
import Aux from './hoc/Auxilliary/Auxilliary';
import Layout from './hoc/Layout/Layout';
import { nonAuthRoutes, authRoutes } from './routes/allroutes';


function App() {
  return (
    <Aux>

      <Routes>
        <Route>
          {authRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={route.isLayout ? <Layout>{route.component}</Layout> : route.component}
              key={idx}
              exact={true}
            />
          ))}
        </Route>
        <Route>
          {nonAuthRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={route.isLayout ? <Layout>{route.component}</Layout> : route.component}
              key={idx}
              exact={true}
            />
          ))}
        </Route>
      </Routes>


    </Aux>
  );
}

export default App;
