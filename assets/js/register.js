function ChangeToLight(){
  document.getElementById("android-icon").src="assets/images/android-icon-hover.png";
  document.getElementById("ios-icon").src="assets/images/ios-icon-hover.png";
}

function ChangeToDark(){
  document.getElementById("android-icon").src="assets/images/android-icon.png";
  document.getElementById("ios-icon").src="assets/images/ios-icon.png";
}
function resetForm(){
  document.getElementById("registration-form").reset();
}
// Dismissal of events like opening developer tools or source code using shortcut keys
document.onkeydown = function(e) {
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    alert("This function is not allowed!");
    return false;

  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    alert("This function is not allowed!");
    return false;

  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    alert("This function is not allowed!");
    return false;

  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    alert("This function is not allowed!");
     return false;  
  }
}

function validateEmail(emailID){
  if (email.length==0){
    return false
  } else {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(emailID);
  }
}

function validateMobileNumber(number){
  if(number.length==10){
    var returnValue;
  for(let i=0;i<=9;i++){
    if((number[i].match(/^\d+/))){
      returnValue = true;
      }
    else{
      returnValue = false;
      break;      
      }
    }
    return returnValue;
  }
  else{
    return false;
    }
  }
