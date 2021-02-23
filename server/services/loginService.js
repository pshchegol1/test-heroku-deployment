/* 
  Login Service Will Authenticate an email and password
  return a true or false response.
  false returns will keep users on the login page with errors
  true will redirect user to the dashboard.html
*/
const fileService = require('./fileService')
 
// common js module import === require
//export import es module
 exports.authenticate = (credential)=>{
   const {email, password} = {...credential}
   const users = fileService.getFileContents('../data/users.json');

  const authUser = users.reduce((authObj, user)=>{

    if(user.email === email)
    {
      authObj.validEmail = true
    }

    if(user.password === password)
    {
      authObj.validPassword = true
    }

    if(authObj.validEmail === true && authObj.validPassword ===true)
    {
        authObj.user = user;
    }

    return authObj

   },{validEmail:false, validPassword:false, user:null})

   // ternary operator ()?true :false
   const auth0 = authUser.user ? authUser.user: formatErrors(authUser)
   return auth0
}

const formatErrors = function(user)
{
  let passwordWarning = ""
  let emailWarning = ""

  if(user.validPassword === false)
  {
    passwordWarning = `password is not valid`
  }

  if(user.validEmail === false)
  {
    emailWarning = `email is not correct`
  }

  return {user:null, emailWarning, passwordWarning}
}
 
 