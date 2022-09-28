function validation(){
    let form = document.getElementById("form");
    let fnameAtt = document.getElementById("fnameAtt");
    let lnameAtt = document.getElementById("lnameAtt");
    let emailAtt = document.getElementById("emailAtt");
    let passAtt = document.getElementById("passAtt");

    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    let fname = document.getElementById("fname").value;
    let fnameError = document.getElementById("fnameError");

    let lname = document.getElementById("lname").value;
    let lnameError = document.getElementById("lnameError");

    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");

    if (fname == ""){
        fnameError.innerHTML = "First Name cannot be empty";
        fnameError.style.color = "#ff7a7a";
        fnameAtt.style.visibility = "visible";

    }else{
        fnameError.innerHTML = "";
        fnameAtt.style.visibility = "hidden";
    }

    if (lname == ""){
        lnameError.innerHTML = "Last Name cannot be empty";
        lnameError.style.color = "#ff7a7a";
        lnameAtt.style.visibility = "visible";
    }else{
        lnameError.innerHTML = "";
        lnameAtt.style.visibility = "hidden";
    }

    if(email.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        emailError.innerHTML = ""
        emailAtt.style.visibility = "hidden";
    }else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        emailError.innerHTML = "Looks like this not an email"
        emailError.style.color = "#ff7a7a";
        emailAtt.style.visibility = "visible";
    }
    if (email == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        emailError.innerHTML = "Email cannot be empty"
        emailError.style.color = "#ff7a7a";
        emailAtt.style.visibility = "visible";
    }

    if (password == ""){
        passwordError.innerHTML = "Password cannot be empty";
        passwordError.style.color = "#ff7a7a";
        passAtt.style.visibility = "visible"; 
    }else{
        passwordError.innerHTML = "";
        passAtt.style.visibility = "hidden";
    }
    
    return false;
}