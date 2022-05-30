#### What is Axios and Superagent?

The two most popular options for making AJAX request with React are Fetch and Axios. As React does not have Ajax to use promises in React you need to install axios [npm install axios]

Axios is like Ajax and you can use ES-6 promises with Axios in React.

SuperAgent does not have promises baked-into the library

Axios is a http runner that is used to communicate with servers through API calls. It is a third party library and has to be installed and has to be compiled. However, as a result, it automatically transforms data and is less verbose. As it is promise-based, we do not use to use the promise libarary.

Front-end routers like React-Router and the Reach-Router do not make API calls, they link pages to each other.

Fetch is vanilla JavaScript. It can be read directly by browsers. The downside is you have to manually transform data. It is more verbose and harder to work with.
