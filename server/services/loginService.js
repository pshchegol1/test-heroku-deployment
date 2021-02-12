/* 
    Login Service will Authenticate an email and password
    return a true or false response
*/

const fileService = require('./fileService');

// login route, pass the authenticate function {email, password}
// read the user.json file to get the data
// loop over the data check email and password to match
const authenticate = (credential) =>{

    const {email, password} = {...credential}
    const users = fileService.getFileContents('../data/users.json');
    // making the test
    //* array ..... sort, filter, map, reduce, find, forEach
    // need to know what the return is

    //!CONTINUE HERE (FIND IF EMAIL AND PASSWORD MATCH data in user.json)
    users.filter(function(item)
    {
         console.log(credential=item) 
    })
}

authenticate({emal:"test@jdsds.com",password:"1234"})