document.getElementById("download-button").addEventListener("mouseover",ChangeToLight);
document.getElementById("download-button").addEventListener("mouseout",ChangeToDark);
document.getElementById("download-button").addEventListener("click",ClickEvent);
document.getElementById("reset-button").addEventListener("click", resetForm);
function validateEmail(emailID){
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(emailID);
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

//This function will be called on clicking the Download button
function authenticateToFirebase(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var email=document.getElementById("email").value;
    var mobilenumber=document.getElementById("mobile-number").value;
    var university=document.getElementById("university").value;
    var ip=document.getElementById("my-ip").textContent;
    var check=document.getElementById("terms-of-use").checked;
    console.log(validateMobileNumber(mobilenumber));
    if (age.length==0){
      age="18+"; //As per the terms of use, age should be 18 and above, by default.
    if(name.length==0 || email.length==0 || mobilenumber.length==0){
        window.alert("Required Fields Missing!");
    } else{
    if(validateEmail(email)==false || validateMobileNumber(mobilenumber)==false){
        window.alert("Invalid Email or mobile number!");
    }
      else{
        if(check==false){
          alert("Please accept the terms and conditions before you proceed!")
        }
        else{
          // Print data logs to console
          console.log("Name: ", name);
          console.log("Age: ", age);
          console.log("Email: ", email);
          console.log("Mobile Number: ", mobilenumber);
          console.log("University: ", university);
          console.log("Public IP Address: ", ip);
          console.log("Checkbox: ", check);

          // Insert data into Firestore Database here
            }
          }
        }
      }
    }
function ChangeToLight(){
    document.getElementById("android-icon").src="assets/images/android-icon-hover.png";
    document.getElementById("ios-icon").src="assets/images/ios-icon-hover.png";

}
function ChangeToDark(){
    document.getElementById("android-icon").src="assets/images/android-icon.png";
    document.getElementById("ios-icon").src="assets/images/ios-icon.png";

}
function ClickEvent(){
    authenticateToFirebase();
}
function resetForm(){
    document.getElementById("registration-form").reset();
}

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