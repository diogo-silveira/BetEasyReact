import React from 'react';
import './App.css';
import './components/event-details'
import EventDetails from './components/event-details';


function App() {
  return (
    <div className="App container">
      <div className="row">    
        <div className="col-2"></div>  
        <div className="col-12">
          <EventDetails></EventDetails>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
  
}




export default App;
