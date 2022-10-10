//Given stored username and password and input username and password, Print if the user can login or not.

let Did = "divyanshgoel777@gmail.com";
let Dpass = "password@12345";

let uname = "Divyansh Goel"

let inputId = "divyanshgoel777@gmail.com";
let inputPass = "password@12345";

if (Did == inputId && inputPass == Dpass) {
  console.log("Welcome, " + uname);
}
else if (Did == inputId) {
  if (inputPass !== Dpass) {
    console.log("Hey " + uname + " ,Please input correct password");
  }
}
else if (Did !== inputId) {
  console.log("Please fill correct Userid");
}