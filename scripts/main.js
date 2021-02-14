let nav = document.querySelector('profile');

myImage.onClick = function() {
    let mrSrc = myImage.getAttribute('src');
    if (mySrc === 'images/IMG-2716.JPG') {
        myImage.setAttribute('src', 'images/IMG-3665.jpg');
    } else {
        myImage.setAttribute('src', 'images/IMG-2716.JPG');
    }
}