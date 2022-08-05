import React from 'react';
import './App.css';

// components
import PageRouting from './routing/PageRouting';
// import DisplayLogo from "./common/displayImages/DisplayLogo";
import HeaderComponent from "./common/header/HeaderComponent";
import "./common/header/headerStyles.css"

function App() {
  return (  
    <div className="App">   
   <HeaderComponent
      className="header-styles"
        children={
          <div>
            <h1>BookApp</h1>
            {/* <DisplayLogo /> */}
    </div>
        }
    />
     <PageRouting/>
    </div>
  );
}

export default App;
