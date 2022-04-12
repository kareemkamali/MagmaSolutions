// import HomePage from "./pages/HomePage";
import React, { Suspense } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import SpinnerLoading from './shared/UiElement/SpinnerLoading';

// import Aboutpage from "./pages/AboutPage";
// import ServicesPage from "./pages/ServicesPage";
// import ProductPage from "./pages/ProductPage";


const HomePage = React.lazy(() => import('./pages/HomePage'));
const Aboutpage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ProductPage = React.lazy(() => import('./pages/ProductPage'));





function App() {
  return (
  <>
  <Router>
    <Suspense fallback={
      <div className='centered'>
       <SpinnerLoading></SpinnerLoading>
      </div>
    }>
  <Switch>
        <Route path="/"  exact>
          <Redirect to='/home-page'/>
      
        </Route>
        <Route path="/home-page" exact >
        <HomePage></HomePage>
        </Route>

        <Route path="/about-us" exact>
        <Aboutpage></Aboutpage>
      
        </Route>
        <Route path="/services"  exact>
        <ServicesPage/>
      
        </Route>
        <Route path="/products"  exact>
        <ProductPage/>
      
        </Route>
        <Route path='*'>
          <p>This Page Not Found</p>
          </Route>
</Switch>
</Suspense>
  </Router>


  </>
  );
}

export default App;
