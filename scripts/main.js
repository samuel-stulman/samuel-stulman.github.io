

function change() {
    var myImage = document.getElementById('profile');

    var mrSrc = myImage.getAttribute('src');
    if (mySrc === "images/IMG-2716.JPG") {
        myImage.src = "images/IMG-3665.jpg";
    } else {
        myImage.src = "images/IMG-2716.JPG";
    }
    
}