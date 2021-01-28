function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(username == "sam" && password == "sam"){
		window.location.href = "/static/main.html";
		return false;
	}
	else{
		alert("Please enter a valid username and password");
	}
}
