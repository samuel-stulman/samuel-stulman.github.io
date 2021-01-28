function validate(){
    var username = document.getElementById("username").value;
    alert(username);
    var password = document.getElementById("password").value;
    alert(password);
	if(username == "sam" && password == "sam"){
		window.location.href = "/public/main.html";
		return false;
	}
	else{
		alert("Please enter a valid username and password");
	}
}
