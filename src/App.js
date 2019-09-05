import React, { Fragment } from 'react';
import Home from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import './index.css'

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
