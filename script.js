function validEmail(str) {
  //your JS code here.
	
 let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(emailRegex.test(str)){
    return true;
  }
  else{
    return false;
  }
}
// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
