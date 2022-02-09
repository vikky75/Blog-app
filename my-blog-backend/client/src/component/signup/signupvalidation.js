function validation(values){
  const errors={};
  var regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
  if(!values.username){
      errors.username="Username is required";
  }
  if(!values.email){
    errors.email="Email is required";
 }
 else if(!regex.test(values.email)){
     errors.email="Enter valid email";
 }
if(!values.password){
    errors.password="Password is required";
}
else if(values.password.length<8){
    errors.password="Password is too short";
}
if(!values.repassword){
    errors.repassword="Please re-enter the password";
}
if(values.password!==values.repassword){
    errors.repassword="Password Mismatched";
}
  return errors;      
}

export default validation;