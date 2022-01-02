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
        return true;
    }
    else{
        return false;
    }
}    
function authenticateToFirebase(){
    var firstname=document.getElementById("first-name").value;
    var lastname=document.getElementById("last-name").value;
    var email=document.getElementById("email").value;
    var mobilenumber=document.getElementById("mobile-number").value;
    var university=document.getElementById("university").value;
    var ip=document.getElementById("my-ip").textContent;
    if(firstname.length==0 || email.length==0 || mobilenumber.length==0){
        window.alert("Required Fields Missing!")
    }
    else{
      if(validateEmail(email)==false || validateMobileNumber(mobilenumber)==false){
           window.alert("Invalid Email or mobile number!")
      }
      else{
        if (lastname.length==0){
          lastname="Null";
        }
          // Insert data into Firestore Database
          try {
            const docRef = addDoc(collection(db, "users"), {
               "firstName": firstname,
               "lastName": lastname,
               "emailID": email,
               "mobileNumber": mobilenumber,
               'universityName': university,
               "ipAddress": ip
              });
              console.log("Document written with ID: ", docRef.id);
              } catch (e) {
              console.error("Error adding document: ", e);
              }
          // Print data logs to console
          console.log("First Name: ", firstname);
          console.log("Last Name: ", lastname);
          console.log("Email: ", email);
          console.log("Mobile Number: ", mobilenumber);
          console.log("University: ", university);
          console.log("Public IP Address: ", ip);
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