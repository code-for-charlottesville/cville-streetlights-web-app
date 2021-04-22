import './App.css';
import React from 'react';
import MainMap from './components/MainMap';
import TabularData from './components/TabularData';
import streetlights from './streetlights.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <MainMap streetlights={streetlights}/>
      <TabularData streetlights={streetlights}/>
    </>
  );
}

export default App;
