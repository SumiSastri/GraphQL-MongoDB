import React from 'react';
import './App.css';

// components
import PageRouting from './routing/PageRouting';
import HeaderComponent from "./common/header/HeaderComponent";
import "./common/header/headerStyles.css"

function App() {
  return (  
    <div className="App">   
   <HeaderComponent
        children={
          <div>
            <h1>GraphQL & MongoDB App</h1>
    </div>
        }
    />
     <PageRouting/>
    </div>
  );
}

export default App;
