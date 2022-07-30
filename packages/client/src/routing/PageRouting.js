import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageLinks from "./PageLinks";

import BookClientsIndex from "../content-pages/bookClients/BookClientsIndex";
import BookProjectsIndex from "../content-pages/bookProjects/BookProjectsIndex";
import BooksIndex from "../content-pages/books/BooksIndex";
import DisplayBookProject from "../content-pages/bookProjects/display/DisplayBookProject";
import AddBook from "../content-pages/books/forms/AddBook";
import DisplayBook from "../content-pages/books/display/DisplayBook";
import UpdateBook from "../content-pages/books/forms/UpdateBook";

const PageRouting = () => {
  return (
    <div>
      <Router>
        <Switch>
          {/* home */}
          <Route exact path='/' component={PageLinks} />
          {/* books */}
          <Route exact path='/books-and-authors' component={BooksIndex} />
          <Route exact path='/add-book-form' component={AddBook} />
         
          {/* book clients */}
          <Route exact path='/book-clients' component={BookClientsIndex} />
          {/* book projects */}
          <Route exact path='/book-projects' component={BookProjectsIndex} />

          {/* Routes with IDs */}
          <Route path='/books-and-authors/:id' component={DisplayBook} />
          <Route path='/update-book-form/:id' component={UpdateBook} />  
          <Route path='/book-projects/:id' component={DisplayBookProject} />
        </Switch>
      </Router>
    </div>
  );
};

export default PageRouting;
