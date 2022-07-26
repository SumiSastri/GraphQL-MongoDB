import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageLinks from "./PageLinks";

import BookClientsIndex from "../content-pages/bookClients/BookClientsIndex";
import BookProjectsIndex from "../content-pages/bookProjects/BookProjectsIndex";
import BooksIndex from "../content-pages/books/BooksIndex";
import DisplayBookProject from "../content-pages/bookProjects/display/DisplayBookProject";

const PageRouting = () => {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path='/' 
            component={PageLinks}/>

            <Route exact path='/books-and-authors' 
            component={BooksIndex} />
            
            <Route
              exact
              path='/book-clients'
              component={BookClientsIndex} />
          
            <Route
              exact
              path='/book-projects'
              component={BookProjectsIndex} 
            />

            {/* Routes with IDs */}

            <Route 
            path='/book-projects/:id' 
            component={DisplayBookProject}  />
        
          </Switch>
      </Router>
    </div>
  );
}

export default PageRouting;
