// import HomePage from "./pages/HomePage";
import React, { Suspense, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import SpinnerLoading from './shared/UiElement/SpinnerLoading';
// lazy to run page when clicked
const HomePage = React.lazy(() => import('./pages/HomePage'));
const Aboutpage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ProductPage = React.lazy(() => import('./pages/ProductPage'));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 4000
    });
    AOS.refresh();

  });
  return (
    <>
      <Router>

        {/* page when reload between pages for first time */}
        <Suspense fallback={
          <div className='centered'>
            <SpinnerLoading></SpinnerLoading>
          </div>
        }>
          <Switch>
            <Route path="/" exact>
              <Redirect to='/home-page' />

            </Route>
            <Route path="/home-page" exact >
              <HomePage></HomePage>
            </Route>

            <Route path="/about-us" exact>
              <Aboutpage></Aboutpage>

            </Route>
            <Route path="/services" exact>
              <ServicesPage />

            </Route>
            <Route path="/products" exact>
              <ProductPage />

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
