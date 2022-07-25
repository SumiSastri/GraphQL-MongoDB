While apollo server handles the front-end request-response cycle with its own methods, the essential functions in the front end with GrapQL are to run a query to the data that is outside the front-end frame works for data-safety/security and then to resolve the responses that come back.

Once the request is made, the front-end mutations are the equivalent of state-management front end where the data is then used to add/ update or delete the data by grabbing the id for the update and delete methods and creating a new id with the add new resource.

The methods in the front end are also mirrored in the back-end server. In this case the server is Express, but any server this is required. So for example, with AWS a typescript lamda is written to write the back-end mutations.