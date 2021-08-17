
//adding event handler to the login button
document.getElementById('login-btn').addEventListener('click', function () {
    //getting the email value

    const emailValue = document.getElementById('email').value;

    //getting the password value
    const passwordValue = document.getElementById('password').value;

    //now matching it with a hard code (NOT PROPER WAY)
    if (emailValue == 'eshaddewan571@gmail.com' && passwordValue == 'pagla hawa') {

        //if matches then go to a new html page 
        window.location.href = 'banking.html';

    }
    else {
        alert('wrong email or password')
    }

})