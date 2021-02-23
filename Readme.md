# Employee Manager Day 5

### Tasks
- Complete the authentication process.
- Convert the login.html page to login.ejs.
- Setup error message handeling on the server.
- Add cookie-session middleware.
- Making the dashboard a protected route.
 

### /Login Post Route.
Were going to create a service for the login process to handle the authentication of the users email and password using the users.json file.


### Login Service
The login service has to do a couple of tasks. It has to read the user.json file data and match the req.body.email and the req.body.password to the user data. If there are any errors we have to return an error object to the client. If the user email and password are valid credentials then we will redirect the user to the dashboard.html. At a later date we will convert the dashboard.html file into a server side ejs template and render the error messages server side and send the ejs template as the response.

 
  