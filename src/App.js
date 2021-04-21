import './App.css';
import React from 'react';
import MainMap from './components/MainMap';
import TabularData from './components/TabularData';
import streetlights from './streetlights.json';

const App = () => {
  return (
    <>
      <MainMap streetlights={streetlights}/>
      <TabularData streetlights={streetlights}/>
    </>
  );
}

export default App;
